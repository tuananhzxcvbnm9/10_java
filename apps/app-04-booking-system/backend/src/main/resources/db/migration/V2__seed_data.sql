INSERT INTO users(email,password_hash,role) VALUES ('admin@app04.local','$2a$10$W2BWCwfQtlZ7yM2fMa4YQOVxA8v0Xfyi6f7hWtJc9r4wI5jyl4Q6S','ROLE_ADMIN') ON CONFLICT (email) DO NOTHING;
INSERT INTO bookings(name,status) VALUES ('Sample Booking A','ACTIVE'), ('Sample Booking B','ACTIVE');
