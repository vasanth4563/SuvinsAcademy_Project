from fastapi import APIRouter, HTTPException, status
from fastapi.responses import FileResponse
from datetime import datetime
from database import get_connection
from models import EnquiryCreate, EnquiryResponse
from excel_handler import append_enquiry, EXCEL_FILE
import os

router = APIRouter(prefix="/api/enquiries", tags=["Enquiries"])


# ─── POST /api/enquiries ──────────────────────────────────────────────────────
@router.post(
    "",
    status_code=status.HTTP_201_CREATED,
    response_model=dict,
    summary="Submit a new enquiry",
)
def submit_enquiry(payload: EnquiryCreate):
    submitted_at = datetime.now()

    # 1. Save to MySQL
    try:
        conn   = get_connection()
        cursor = conn.cursor()
        sql = """
            INSERT INTO enquiries (full_name, mobile_number, school_name, class_name, standard, submitted_at)
            VALUES (%s, %s, %s, %s, %s, %s)
        """
        cursor.execute(sql, (
            payload.full_name,
            payload.mobile_number,
            payload.school_name,
            payload.class_name,
            payload.standard,
            submitted_at,
        ))
        conn.commit()
        new_id = cursor.lastrowid
        cursor.close()
        conn.close()
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Database error: {str(e)}",
        )

    # 2. Append to Excel
    try:
        append_enquiry(
            full_name=payload.full_name,
            mobile_number=payload.mobile_number,
            school_name=payload.school_name,
            class_name=payload.class_name,
            standard=payload.standard,
            submitted_at=submitted_at,
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Excel error: {str(e)}",
        )

    return {
        "success": True,
        "message": "✅ Enquiry submitted successfully! We will contact you soon.",
        "id": new_id,
        "submitted_at": submitted_at.strftime("%Y-%m-%d %H:%M:%S"),
    }


# ─── GET /api/enquiries ───────────────────────────────────────────────────────
@router.get(
    "",
    response_model=list[EnquiryResponse],
    summary="Get all enquiries",
)
def get_enquiries():
    try:
        conn   = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM enquiries ORDER BY submitted_at DESC")
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        return rows
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Database error: {str(e)}",
        )


# ─── GET /api/enquiries/export ────────────────────────────────────────────────
@router.get(
    "/export",
    summary="Download the enquiries Excel file",
)
def export_excel():
    if not os.path.exists(EXCEL_FILE):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No enquiries file found yet.",
        )
    return FileResponse(
        path=EXCEL_FILE,
        filename="Suvins_Academy_Enquiries.xlsx",
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    )
