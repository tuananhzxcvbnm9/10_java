# java-10-apps-monorepo

Monorepo chứa 10 ứng dụng web full-stack Java/Spring Boot + React/Vite.

## Danh sách 10 apps
1. Task Manager
2. Inventory System
3. CRM System
4. Booking System
5. E-commerce Admin
6. Learning Management
7. Expense Tracker
8. Helpdesk Ticketing
9. Blog CMS
10. Analytics Dashboard

## Chạy toàn bộ hệ thống
```bash
cp .env.example .env
docker compose up --build
```

## Chạy riêng một app
```bash
docker compose up --build app-01-backend app-01-frontend
# hoặc
make app APP=app-01
```

## URL truy cập
- App 01 frontend: http://localhost/app-01
- App 02 frontend: http://localhost/app-02
- App 03 frontend: http://localhost/app-03
- App 04 frontend: http://localhost/app-04
- App 05 frontend: http://localhost/app-05
- App 06 frontend: http://localhost/app-06
- App 07 frontend: http://localhost/app-07
- App 08 frontend: http://localhost/app-08
- App 09 frontend: http://localhost/app-09
- App 10 frontend: http://localhost/app-10

- App 01 API: http://localhost/api/app-01
- App 02 API: http://localhost/api/app-02
- App 03 API: http://localhost/api/app-03
- App 04 API: http://localhost/api/app-04
- App 05 API: http://localhost/api/app-05
- App 06 API: http://localhost/api/app-06
- App 07 API: http://localhost/api/app-07
- App 08 API: http://localhost/api/app-08
- App 09 API: http://localhost/api/app-09
- App 10 API: http://localhost/api/app-10

- Grafana: http://localhost:3000
- Prometheus: http://localhost:9090

## Demo account
- username: `admin@app01.local`
- password: seeded dưới dạng BCrypt hash trong migration (MVP scaffold)

## Migration / seed / test
- Migration: Flyway auto run khi backend startup
- Seed: `V2__seed_data.sql` trong từng app backend
- Test: `mvn test`

## Kubernetes
```bash
kubectl apply -f shared/k8s
kubectl apply -f apps/app-01-task-manager/k8s
# lặp tương tự cho app-02 ... app-10
```

## Frontend UI/UX (SaaS dashboard)
Mỗi app frontend đã được nâng cấp theo layout SaaS thống nhất gồm:
- Sidebar + icon
- Topbar search + user menu
- Dark/Light mode
- Dashboard cards + Recharts
- Data table (search/sort/pagination)
- Form validation (React Hook Form + Zod)
- Toast notification (Sonner)
- Loading/Empty/Error state
- Confirm dialog khi xóa

Các frontend dùng `API_BASE_URL` theo `VITE_API_BASE_URL` hoặc fallback path `/api/app-xx`.
