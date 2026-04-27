INSERT INTO users(email,password_hash,role) VALUES ('admin@app02.local','$2a$10$W2BWCwfQtlZ7yM2fMa4YQOVxA8v0Xfyi6f7hWtJc9r4wI5jyl4Q6S','ROLE_ADMIN') ON CONFLICT (email) DO NOTHING;
INSERT INTO inventory_items(name,status) VALUES ('Sample InventoryItem A','ACTIVE'), ('Sample InventoryItem B','ACTIVE');
