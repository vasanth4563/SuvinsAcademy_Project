from pydantic import BaseModel, Field, validator
from datetime import datetime
from typing import Optional

class EnquiryCreate(BaseModel):
    full_name:     str = Field(..., min_length=2,  max_length=255, example="Ananya Raj")
    mobile_number: str = Field(..., min_length=10, max_length=15,  example="9876543210")
    school_name:   str = Field(..., min_length=2,  max_length=255, example="ABC IB School")
    class_name:    str = Field(..., example="10")
    standard:      str = Field(..., min_length=1, max_length=50, example="CBSE")

    @validator("mobile_number")
    def validate_mobile(cls, v):
        digits = v.replace("+", "").replace("-", "").replace(" ", "")
        if not digits.isdigit():
            raise ValueError("Mobile number must contain only digits")
        if len(digits) < 10 or len(digits) > 13:
            raise ValueError("Mobile number must be 10–13 digits")
        return v

    @validator("class_name")
    def validate_class(cls, v):
        valid = [str(i) for i in range(6, 13)]
        if v not in valid:
            raise ValueError("Class must be between 6 and 12")
        return v

class EnquiryResponse(BaseModel):
    id:            int
    full_name:     str
    mobile_number: str
    school_name:   str
    class_name:    str
    standard:      str
    submitted_at:  datetime

    class Config:
        from_attributes = True
