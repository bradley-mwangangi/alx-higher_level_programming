-- creates teh table id_not_null on MySQL server

CREATE table IF NOT EXISTS id_not_null(id INT NOT NULL DEFAULT 1, name VARCHAR(256));
