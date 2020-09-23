use nodejs

DROP TABLE Teams

CREATE TABLE Teams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    won VARCHAR(10) NOT NULL,
    drawn VARCHAR(10) NOT NULL,
    lost VARCHAR(10) NOT NULL
)

select * from teams