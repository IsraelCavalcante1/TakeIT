CREATE TABLE T_TI_USER
(
    user_id serial PRIMARY KEY,
    ds_email VARCHAR(70) NOT NULL UNIQUE,
    ds_password VARCHAR NOT NULL,
    dt_register Date NOT NULL,
    dt_update DATE NOT NULL
)


-- CREATE TABLE accounts (
--                           user_id serial PRIMARY KEY,
--                           username VARCHAR ( 50 ) UNIQUE NOT NULL,
--                           password VARCHAR ( 50 ) NOT NULL,
--                           email VARCHAR ( 255 ) UNIQUE NOT NULL,
--                           created_on TIMESTAMP NOT NULL,
--                           last_login TIMESTAMP
-- );