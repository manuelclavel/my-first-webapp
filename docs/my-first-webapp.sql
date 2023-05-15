CREATE DATABASE myfirstwebapp
	DEFAULT CHARACTER SET utf8
	DEFAULT COLLATE utf8_general_ci;
	
CREATE USER 'eiu'@'localhost' IDENTIFIED BY '4#Eiumysql#4';
GRANT ALL ON myfirstwebapp.* TO 'eiu'@'localhost';

	
use myfirstwebapp

DROP TABLE IF EXISTS account;	
CREATE TABLE account (
  account_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  login varchar(50)
) ENGINE=InnoDB;

insert into account (login) values ("manuelgclavel@gmail.com");

DROP TABLE IF EXISTS course;	
CREATE TABLE course (
  course_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  code varchar(50),
  name varchar(250)
) ENGINE=InnoDB;

insert into course (code, name) values ("CSE470", "Cloud Computing");
insert into course (code, name) values ("CSE480", "Web Programming");
