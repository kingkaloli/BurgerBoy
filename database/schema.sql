USE burger_db;

CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);
