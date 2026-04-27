# Database Design

- Mỗi app dùng DB riêng trong cùng PostgreSQL instance: `app01_db` ... `app10_db`.
- Schema migration qua Flyway (`V1__init.sql`, `V2__seed_data.sql`) ở từng backend app.
- Khuyến nghị production:
  - dùng transaction cho migration mặc định
  - tách migration schema và seed
  - không sửa migration cũ sau khi release
  - dùng backup + restore drill định kỳ.
