
-- @BLOCK
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT,
    country VARCHAR(2)
);


-- @BLOCK
INSERT INTO Users (email, bio, country) VALUES ('3@world.com', '3', 'AS');


-- @BLOCK
SELECT email, id FROM Users;

-- @BLOCK
SELECT email, id FROM Users LIMIT 2;

-- @BLOCK
SELECT email, id, country FROM Users ORDER BY id DESC LIMIT 2;
-- @BLOCK
SELECT email, id, country FROM Users WHERE country = 'US' ORDER BY id DESC LIMIT 2;

-- @BLOCK
SELECT email, id, country FROM Users WHERE country = 'US' AND email LIKE 'h%' ORDER BY id DESC LIMIT 2;

-- @BLOCK
CREATE INDEX email_index ON Users(email);


-- @BLOCK
CREATE TABLE Rooms(
    id INT AUTO_INCREMENT,
    street VARCHAR(255),
    owner_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(owner_id) REFERENCES Users(id)
)


-- @BLOCK
INSERT INTO Rooms (owner_id, street) VALUES 
    (1, 'street 1'),
    (1, 'street 2'),
    (2, 'street 3'),
    (3, 'street 4');

-- @BLOCK
SELECT * FROM USERS 
LEFT JOIN Rooms
ON Rooms.owner_id = Users.id; 


-- @BLOCK
DELETE FROM Rooms
WHERE owner_id = 3;


-- @BLOCK
CREATE TABLE Bookings(
    id INT AUTO_INCREMENT,
    guest_id INT NOT NULL,
    room_id INT NOT NULL,
    check_in DATETIME,
    PRIMARY KEY(id),
    FOREIGN KEY(guest_id) REFERENCES Users(id),
    FOREIGN KEY(room_id) REFERENCES Rooms(id)
);

-- @BLOCK rooms a user has booked
SELECT guest_id, street, check_in FROM Bookings INNER JOIN Rooms ON Rooms.owner_id = guest_id WHERE guest_id = 1;