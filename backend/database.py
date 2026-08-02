import mysql.connector
from mysql.connector import Error
import os
from dotenv import load_dotenv

load_dotenv()

DB_CONFIG = {
    "host":     os.getenv("DB_HOST", "localhost"),
    "port":     int(os.getenv("DB_PORT", 3306)),
    "database": os.getenv("DB_NAME", "suvins_db"),
    "user":     os.getenv("DB_USER", "root"),
    "password": os.getenv("DB_PASSWORD", "Suvins@1234"),
}

DROP_TABLE_SQL = "DROP TABLE IF EXISTS enquiries;"
CREATE_TABLE_SQL = """
CREATE TABLE enquiries (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    full_name     VARCHAR(255) NOT NULL,
    mobile_number VARCHAR(15)  NOT NULL,
    school_name   VARCHAR(255) NOT NULL,
    class_name    VARCHAR(10)  NOT NULL,
    standard      VARCHAR(50)  NOT NULL,
    submitted_at  DATETIME     DEFAULT CURRENT_TIMESTAMP
);
"""

def get_connection():
    """Return a fresh MySQL connection."""
    return mysql.connector.connect(**DB_CONFIG)

def init_db():
    """Create database and table if they don't exist."""
    # Connect without specifying a database first
    cfg = {**DB_CONFIG}
    db_name = cfg.pop("database")

    try:
        conn = mysql.connector.connect(**cfg)
        cursor = conn.cursor()
        cursor.execute(f"CREATE DATABASE IF NOT EXISTS `{db_name}`;")
        cursor.execute(f"USE `{db_name}`;")
        cursor.execute(DROP_TABLE_SQL)
        cursor.execute(CREATE_TABLE_SQL)
        conn.commit()
        cursor.close()
        conn.close()
        print(f"[OK]  Database '{db_name}' and table 'enquiries' ready.")
    except Error as e:
        print(f"[ERROR]  DB init error: {e}")
        raise
