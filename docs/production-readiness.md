# Production Readiness

## Checklist
- Multi-stage Docker build cho backend/frontend.
- Container chạy non-root user.
- Healthcheck cho reverse-proxy, postgres, redis, prometheus, grafana, toàn bộ app backend/frontend.
- Secrets cấu hình qua env/Kubernetes Secret, không hard-code.
- Flyway migration dùng `baseline-on-migrate` và `out-of-order=false` cho production safety.
- JSON logging + correlation id + audit log filter.
- Nginx security headers + rate limiting cho API.
- Actuator health/readiness/liveness + Prometheus metrics.
- Kubernetes có ConfigMap/Secret template, probes, resource requests/limits, HPA.

## Deployment runbook
1. Build image:
   - backend: `docker build -t app-xx-backend ./apps/app-xx-.../backend`
   - frontend: `docker build -t app-xx-frontend ./apps/app-xx-.../frontend`
2. Push image lên registry.
3. Apply infra:
   - `kubectl apply -f shared/k8s/`
4. Apply từng app:
   - `kubectl apply -f apps/app-xx-.../k8s/`
5. Verify:
   - `kubectl get pods -n java-10-apps`
   - `kubectl get hpa -n java-10-apps`

## Database backup guideline
- PostgreSQL logical backup hàng ngày bằng `pg_dump` và lưu object storage.
- Giữ tối thiểu 14 bản backup ngày + 4 bản backup tuần.
- Định kỳ restore test trong môi trường staging để kiểm tra backup integrity.
- Với Docker local:
  - `docker exec <postgres-container> pg_dump -U $POSTGRES_USER app01_db > backup_app01.sql`
