CREATE DATABASE myfirstwebapp
	DEFAULT CHARACTER SET utf8
	DEFAULT COLLATE utf8_general_ci;
	
CREATE USER 'eiu2'@'localhost' IDENTIFIED BY '4#Eiumysql#4';
GRANT ALL ON myfirstwebapp.* TO 'eiu'@'localhost';

	
use myfirstwebapp

DROP TABLE IF EXISTS account;	
CREATE TABLE account (
  account_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  login varchar(50)
) ENGINE=InnoDB;