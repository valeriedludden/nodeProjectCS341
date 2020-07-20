DROP TABLE activity;
DROP TABLE type;
DROP TABLE price;

CREATE TABLE type
(
id SERIAL NOT NULL PRIMARY KEY,
type VARCHAR (50) NOT NULL UNIQUE
);

CREATE TABLE price
(
id SERIAL NOT NULL PRIMARY KEY,
amount VARCHAR(10) NOT NULL
);

CREATE TABLE activity
(
id SERIAL  NOT NULL PRIMARY KEY,
name VARCHAR (50) NOT NULL,
city VARCHAR (50),
state VARCHAR (2),
type_id INT REFERENCES type(id),
price INT REFERENCES price(id),
description VARCHAR (150)
);

INSERT INTO price VALUES (DEFAULT, '$');
INSERT INTO price VALUES (DEFAULT, '$$');
INSERT INTO price VALUES (DEFAULT, '$$$');
INSERT INTO price VALUES (DEFAULT, '$$$$');
INSERT INTO price VALUES (DEFAULT, '$$$$$');

INSERT INTO type VALUES (DEFAULT, 'dining');
INSERT INTO type VALUES (DEFAULT, 'hike');
INSERT INTO type VALUES (DEFAULT, 'theater');
INSERT INTO type VALUES (DEFAULT, 'museum');
INSERT INTO type VALUES (DEFAULT, 'outdoor recreation');
INSERT INTO type VALUES (DEFAULT, 'educational');
INSERT INTO type VALUES (DEFAULT, 'comedy');
INSERT INTO type VALUES (DEFAULT, 'christmas');
INSERT INTO type VALUES (DEFAULT, 'halloween');

INSERT INTO activity VALUES (DEFAULT, 'Tsnami Sushi', 'Lehi', 'UT', 1, 3,'Delicious sushi and a great atmosphere. Can be crowded');
INSERT INTO activity VALUES (DEFAULT, 'Mint Sushi', 'Sandy', 'UT', 1, 3,'Nicely priced. A little hole in the wall but yummy and quite nice on the inside');
INSERT INTO activity VALUES (DEFAULT, 'Hike to Silver Lake', 'American Fork Canyon', 'UT', 2, 1,'Takes a while to get to, but beautiful and secluded');
INSERT INTO activity VALUES (DEFAULT, 'Gardens at Thanksgiving Point', 'Lehi', 'UT', 5, 1, 'Beautiful and relaxing place to take a stroll');

