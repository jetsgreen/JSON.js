DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id integer not null auto_increment,
burger_name varchar(300),
devoured boolean,
primary key(id)
);