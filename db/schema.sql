-- create burgers_db

-- create burgers table with:
    -- id, burger_name, devoured (boolean)

CREATE DATABASE IF NOT EXISTS burgers_db;

CREATE TABLE IF NOT EXISTS burgers (
    id int AUTO_INCREMENT primary key,
    burger_name varchar(50),
    devoured boolean,
);