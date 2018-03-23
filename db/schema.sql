### Schema

CREATE DATABASE fareFinder_db;
USE fareFinder_db;

CREATE TABLE fares
(
	id int NOT NULL AUTO_INCREMENT,
	VarName1 varchar(255) NOT NULL,
	VarName2 BOOLEAN DEFAULT false,
	-- required for sequelize
	createdAt DATETIME NOT NULL,
	updatedAt DATETIME NOT NULL,
	PRIMARY KEY (id)
);
