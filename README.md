# Trợ lý Lên thực đơn & Đi chợ thông minh ("Hôm nay ăn gì?")

Dự án ứng dụng web và di động thông minh giúp người dùng lập kế hoạch bữa ăn, quản lý tủ lạnh, tự động hóa danh sách đi chợ và tối ưu hóa ngân sách chi tiêu hàng tuần/tháng.

---

## 🏗️ Kiến trúc Hệ thống (System Architecture)

Dự án được cấu trúc theo mô hình **Monorepo** với 2 ứng dụng chính:
- **`apps/web`**: Frontend Web App & PWA xây dựng bằng **Next.js (React 19 / TypeScript)** và **Tailwind CSS**.
- **`apps/api`**: Backend RESTful API & AI Recommendation Engine xây dựng bằng **FastAPI (Python)**.
- **`database`**: **PostgreSQL** lưu trữ dữ liệu quan hệ, **Redis** lưu trữ cache & hàng đợi tác vụ nền.

```
vibehost/
├── apps/
│   ├── web/                     # Ứng dụng Frontend (Next.js App Router)
│   │   ├── public/              # Icons, PWA manifest, hình ảnh tĩnh
│   │   ├── src/
│   │   │   ├── app/             # App Router pages (meal-planner, pantry, shopping, budget)
│   │   │   ├── components/      # UI Components (Shadcn UI & Custom widgets)
│   │   │   ├── hooks/           # Custom React hooks
│   │   │   ├── stores/          # Zustand State Management
│   │   │   ├── services/        # HTTP API Client
│   │   │   └── types/           # TypeScript Data Models
│   │   ├── package.json
│   │   └── tailwind.config.ts
│   │
│   └── api/                     # Ứng dụng Backend (FastAPI Python)
│       ├── app/
│       │   ├── api/v1/          # Endpoints router (auth, meal, pantry, shopping, budget)
│       │   ├── core/            # Config, Security, Database connection
│       │   ├── models/          # SQLAlchemy Database Models
│       │   ├── schemas/         # Pydantic Request/Response Schemas
│       │   ├── services/        # Business Logic (Pantry Matcher, Meal Recommender, OCR)
│       │   └── tasks/           # Scheduled Tasks (Cảnh báo hết hạn hàng ngày)
│       ├── requirements.txt
│       └── Dockerfile
│
├── docker-compose.yml           # Khởi chạy toàn bộ hạ tầng (Web, API, Postgres, Redis)
└── README.md
```

---

## 🚀 Hướng dẫn Cài đặt & Khởi chạy (Getting Started)

### 1. Yêu cầu Môi trường (Prerequisites)
- [Node.js](https://nodejs.org/) (phiên bản 18+ hoặc 20 LTS)
- [Python](https://www.python.org/) (phiên bản 3.10+)
- [Docker & Docker Compose](https://www.docker.com/) (Khuyên dùng để chạy cơ sở dữ liệu nhanh)

### 2. Khởi chạy với Docker Compose (Nhanh nhất)
```bash
# Khởi động PostgreSQL, Redis, Backend API và Frontend Web
docker-compose up -d
```
- **Web App**: http://localhost:3000
- **API Swagger Docs**: http://localhost:8000/docs
- **PostgreSQL**: localhost:5432 (Database: `vibehost_db`)

### 3. Khởi chạy thủ công từng phần (Local Development)

#### Backend (FastAPI):
```bash
cd apps/api
python -m venv venv
# Trên Windows:
.\venv\Scripts\activate
# Trên macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

#### Frontend (Next.js):
```bash
cd apps/web
npm install
npm run dev
```

---

## 📱 5 Tính năng Cốt lõi (Core Features)

1. **Gợi ý Thực đơn Cá nhân hóa:** Tự động lập thực đơn theo ngày/tuần theo số người, chế độ ăn (Keto, Clean, Chay) và ngân sách.
2. **Nấu ăn từ Tủ lạnh (Pantry Match):** Đưa nguyên liệu sẵn có vào để tìm món nấu được ngay, tận dụng đồ cũ.
3. **Danh sách Đi chợ Thông minh:** Tự động gom nguyên liệu từ thực đơn theo từng gian hàng trong siêu thị.
4. **Quản lý Tủ lạnh & Cảnh báo Hạn dùng:** Cảnh báo các thực phẩm sắp hết hạn để tránh lãng phí.
5. **Thống kê & Quản lý Ngân sách:** Theo dõi hạn mức chi tiêu thực phẩm và cảnh báo khi sắp vượt định mức.
