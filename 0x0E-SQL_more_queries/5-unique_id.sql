-- creates the table unique_id on MySQL server

CREATE table IF NOT EXISTS unique_id(id INT NOT NULL DEFAULT 1 UNIQUE, name VARCHAR(256));
