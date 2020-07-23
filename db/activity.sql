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

-- INSERT INTO activity VALUES (DEFAULT, 'Tsnami Sushi', 'Lehi', 'UT', 1, 3,'Delicious sushi and a great atmosphere. Can be crowded');
-- INSERT INTO activity VALUES (DEFAULT, 'Mint Sushi', 'Sandy', 'UT', 1, 3,'Nicely priced. A little hole in the wall but yummy and quite nice on the inside');
-- INSERT INTO activity VALUES (DEFAULT, 'Hike to Silver Lake', 'American Fork Canyon', 'UT', 2, 1,'Takes a while to get to, but beautiful and secluded');
-- INSERT INTO activity VALUES (DEFAULT, 'Gardens at Thanksgiving Point', 'Lehi', 'UT', 5, 1, 'Beautiful and relaxing place to take a stroll');

INSERT INTO activity VALUES (DEFAULT, 'Tsnami Sushi', 'Lehi', 'UT', 1, 3,'Delicious sushi and a great atmosphere. Can be crowded');
INSERT INTO activity VALUES (DEFAULT, 'Mint Sushi', 'Sandy', 'UT', 1, 3,'Nicely priced. A little hole in the wall but yummy and quite nice on the inside');
INSERT INTO activity VALUES (DEFAULT, 'Ridge Cafe', 'Draper', 'UT', 1, 4, 'More expensive amazing gourmet food. Beautiful valley view');
INSERT INTO activity VALUES (DEFAULT, 'Mo Bettahs', 'Lehi', 'UT', 1, 2,'Hawaiian flavor grille. Delicious Katsu Chicken. Chill atmosphere');
INSERT INTO activity VALUES (DEFAULT, 'Porcupine Pub', 'Fort Union', 'UT', 1, 3,'American food in a cabin home atmosphere');
INSERT INTO activity VALUES (DEFAULT, 'Hike to Silver Lake', 'American Fork Canyon', 'UT', 2, 1,'Takes a while to get to, but beautiful and secluded');
INSERT INTO activity VALUES (DEFAULT, 'Hike to Donut Falls', 'Big Cottonwood Canyon', 'UT', 2, 1,'Fairly easy hike with boulder scrambling at the end. Beautiful falls through a rock whole');
INSERT INTO activity VALUES (DEFAULT, 'Hike to Secret Lake', 'Little Cottonwood Canyon', 'UT', 2, 1, 'Secluded lake hike about the Alta ski resort. Wild flowers and beautiful lake');
INSERT INTO activity VALUES (DEFAULT, 'Hike to Bridal Veil Falls', 'Provo Canyon', 'UT', 2, 1, 'Beautiful and relaxing place to enjoy the falls');
INSERT INTO activity VALUES (DEFAULT, 'Hike Mt Timpanogas', 'American Fork Canyon', 'UT', 2, 1, 'Agressive hike with a complete view of the Salt Lake and Utah County valleys');
INSERT INTO activity VALUES (DEFAULT, 'Megaplex at Jordan Commons', 'Sandy', 'UT', 3, 2, 'Movie and variety food. Try the Gelato!');
INSERT INTO activity VALUES (DEFAULT, 'The Gateway Theater', 'Lehi', 'UT', 3, 2, 'Show and nearby walking and food');
INSERT INTO activity VALUES (DEFAULT, 'Temple Square Joseph Smith Memorial Theater', 'Lehi', 'UT', 3, 1, 'LDS heart warming movie');
INSERT INTO activity VALUES (DEFAULT, 'Clark Planetarium', 'Salt Lake City', 'UT', 3, 3, 'Star gaze in air conditioned spledor');
INSERT INTO activity VALUES (DEFAULT, 'Hale Theatre', 'Sandy', 'UT', 3, 3, 'Theater in the round');
INSERT INTO activity VALUES (DEFAULT, 'Tuacahn Center For the Arts', 'St George', 'UT', 3, 3, 'Outdoor ampitheater in a gorgeous red rock canyon');
INSERT INTO activity VALUES (DEFAULT, 'Museum of Natural History at Thanksgiving Point', 'Lehi', 'UT', 4, 3, 'Dino bones and Megaladon Jaws');
INSERT INTO activity VALUES (DEFAULT, 'Loveland Aquarium', 'Sandy', 'UT', 4, 3, 'Sharks, Rays, Jellyfish, Penguins and more');
INSERT INTO activity VALUES (DEFAULT, 'The Leonardo Museum', 'Salt Lake City', 'UT', 4, 3, 'Science and art museum with traveling exhibits');
INSERT INTO activity VALUES (DEFAULT, 'Gardens at Thanksgiving Point', 'Lehi', 'UT', 5, 1, 'Beautiful and relaxing place to take a stroll');
INSERT INTO activity VALUES (DEFAULT, 'Bees Baseball', 'Salt Lake City', 'UT', 5, 2, 'Take me out to the Ball Game!!!');
INSERT INTO activity VALUES (DEFAULT, 'Galavan Center Evening Concerts', 'Salt Lake City', 'UT', 5, 3, 'Local and Traving music concerts');
INSERT INTO activity VALUES (DEFAULT, 'Education Week', 'Provo', 'UT', 6, 1, 'BYU Education Week. LDS lectures');
INSERT INTO activity VALUES (DEFAULT, 'Park City Tour', 'Park City', 'UT', 6, 1, 'Learn about Park City mining');
INSERT INTO activity VALUES (DEFAULT, 'This is the Place', 'Salt Lake City', 'UT', 6, 1, 'Learn about the Pioneer life in early Utah');
INSERT INTO activity VALUES (DEFAULT, 'Hogle Zoo', 'Salt Lake City', 'UT', 6, 3, 'Meet the animals');
INSERT INTO activity VALUES (DEFAULT, 'Wiseguys Comedy Club', 'Salt Lake City', 'UT', 7, 2, 'Drinks and Laughs');
INSERT INTO activity VALUES (DEFAULT, 'Wiseguys Comedy Club', 'Ogden', 'UT', 7, 2, 'Drinks and Laughs');
INSERT INTO activity VALUES (DEFAULT, 'Dry Bar Comedy', 'Provo', 'UT', 7, 2, 'Food and Clean Laughs');
INSERT INTO activity VALUES (DEFAULT, 'Temple Square Lights', 'Salt Lake City', 'UT', 8, 1, 'Nativities and lights displays');
INSERT INTO activity VALUES (DEFAULT, 'Lights at the Zoo', 'Salt Lake City', 'UT', 8, 3, 'See the animals and emjoy the lights');
INSERT INTO activity VALUES (DEFAULT, 'Ice skating at the Galavan Center', 'Salt Lake City', 'UT', 8, 2, 'Outdoor ice skating');
INSERT INTO activity VALUES (DEFAULT, 'Ice Castles', 'Heber City', 'UT', 8, 3, 'Walk among the tall ice castles');
INSERT INTO activity VALUES (DEFAULT, 'Polar Express', 'Heber City', 'UT', 8, 3, 'Take a trip up the Heber Valley Railroad through a winter wonderland');
INSERT INTO activity VALUES (DEFAULT, 'Frightmares at Lagoon', 'Farmington', 'UT', 9, 1, 'Frights and rides at the Lagoon Amusement Park');
INSERT INTO activity VALUES (DEFAULT, 'Nightmare on 13th', 'Salt Lake City', 'UT', 9, 1, 'Super scary Haunted House');
