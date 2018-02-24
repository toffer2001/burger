
-- DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE zgylzqxjfq0uh48o;
-- CREATE DATABASE burgers_db;

USE zgylzqxjfq0uh48o;
-- USE burgers_db;

CREATE TABLE burgers

(
    id int NOT NULL AUTO_INCREMENT,
	burger_name varchar (255) NOT NULL,
	devoured boolean,
	date TIMESTAMP,
	PRIMARY KEY (id)
);
