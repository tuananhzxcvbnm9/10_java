INSERT INTO users(email,password_hash,role) VALUES ('admin@app10.local','$2a$10$W2BWCwfQtlZ7yM2fMa4YQOVxA8v0Xfyi6f7hWtJc9r4wI5jyl4Q6S','ROLE_ADMIN') ON CONFLICT (email) DO NOTHING;
INSERT INTO metrics(name,status) VALUES ('Sample Metric A','ACTIVE'), ('Sample Metric B','ACTIVE');
