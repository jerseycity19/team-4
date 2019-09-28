CREATE TABLE users(
user_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
identification VARCHAR(100) NOT NULL,
age_range VARCHAR(100) NOT NULL,
gender CHAR(100) NOT NULL,
country VARCHAR(100) NOT NULL,
primary_language VARCHAR(100) NOT NULL,
employment_status VARCHAR(100) NOT NULL,
disciple_area VARCHAR(100) NOT NULL,
access_code VARCHAR(100) NOT NULL,
code_flag VARCHAR(100) NULL,
sensitivity VARCHAR(100) NOT NULL
);


CREATE TABLE questions(
questions_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_id INT UNSIGNED,
self_censored_frequency VARCHAR(30) NOT NULL,
others_censored_frequency VARCHAR(30) NOT NULL,
advised_frequency VARCHAR(30) NOT NULL,
primary_source_consequences VARCHAR(30) NOT NULL,
experience_retaliation VARCHAR(30) NOT NULL,
aware_others_retaliation VARCHAR(30) NOT NULL,
chance_of_self_censor VARCHAR(30) NOT NULL
);

CREATE TABLE accesscode(
    key_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(30) NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    start_time  INT UNSIGNED NOT NULL,
    end_time  INT UNSIGNED NOT NULL,
    number_people INT UNSIGNED NOT NULL,
    event_name VARCHAR(30) NOT NULL,
    event_type VARCHAR(30) NOT NULL
);