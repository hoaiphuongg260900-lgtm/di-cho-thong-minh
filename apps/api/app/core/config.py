from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "Trợ lý Lên thực đơn & Đi chợ thông minh"
    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str = "temporary_secret_key_for_development"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days
    
    DATABASE_URL: str = "postgresql://postgres:postgrespassword@localhost:5432/vibehost_db"
    REDIS_URL: str = "redis://localhost:6379/0"

    OPENAI_API_KEY: Optional[str] = None
    GEMINI_API_KEY: Optional[str] = None

    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
