from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import init_db
from routes.enquiry import router as enquiry_router

# ── App ──────────────────────────────────────────────────────────────────────
app = FastAPI(
    title="Suvin's Academy API",
    description="Enquiry management API — saves to MySQL & Excel",
    version="1.0.0",
)

# ── CORS (allow React dev server) ─────────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Startup ──────────────────────────────────────────────────────────────────
@app.on_event("startup")
def on_startup():
    init_db()

# ── Routers ──────────────────────────────────────────────────────────────────
app.include_router(enquiry_router)

# ── Health check ─────────────────────────────────────────────────────────────
@app.get("/", tags=["Health"])
def root():
    return {"status": "ok", "message": "Suvin's Academy API is running 🎓"}
