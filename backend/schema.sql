CREATE TABLE polls (
    usr_id VARCHAR(255) NOT NULL,
    poll_id VARCHAR(255) NOT NULL,
    option_one VARCHAR(255) NOT NULL,
    option_two VARCHAR(255) NOT NULL,
    option_one_votes INTEGER DEFAULT 0,
    option_two_votes INTEGER DEFAULT 0,
    num SERIAL PRIMARY KEY
);

CREATE TABLE users (
    usr_id VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    pass VARCHAR(255)
);

CREATE TABLE votes (
    usr_id VARCHAR(255) NOT NULL,
    poll_id VARCHAR(255) NOT NULL,
    isOptionOne boolean NOT NULL
);