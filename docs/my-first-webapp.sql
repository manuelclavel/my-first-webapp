CREATE DATABASE myfirstwebapp
	DEFAULT CHARACTER SET utf8
	DEFAULT COLLATE utf8_general_ci;
	
CREATE USER 'eiu'@'localhost' IDENTIFIED BY '4#Eiumysql#4';
GRANT ALL ON myfirstwebapp.* TO 'eiu'@'localhost';

	
use myfirstwebapp

DROP TABLE IF EXISTS account;	
CREATE TABLE account (
  account_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  login varchar(50),
  role varchar(50)
) ENGINE=InnoDB;

insert into account (login, role) values ("manuelgclavel@gmail.com", "teacher");
insert into account (login, role) values ("manuel.clavel@eiu.edu.vn", "student");

DROP TABLE IF EXISTS course;	
CREATE TABLE course (
  course_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  code varchar(50),
  name varchar(250)
) ENGINE=InnoDB;

insert into course (code, name) values ("CSE470", "Cloud Computing");
insert into course (code, name) values ("CSE480", "Web Programming");

DROP TABLE IF EXISTS enrolment;	
CREATE TABLE enrolment (
  enrolment_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  course int,
  account int,
  FOREIGN KEY fk_enrolment_course(course)
  REFERENCES course(course_id),
  FOREIGN KEY fk_enrolment_account(account)
  REFERENCES account(account_id)
) ENGINE=InnoDB;

insert into enrolment (course, account) values (1, 2);

DROP TABLE IF EXISTS teaching;	
CREATE TABLE teaching (
  teaching_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  course int,
  account int,
  FOREIGN KEY fk_teaching_course(course)
  REFERENCES course(course_id),
  FOREIGN KEY fk_teaching_account(account)
  REFERENCES account(account_id)
) ENGINE=InnoDB;

insert into teaching (course, account) values (2, 1);





