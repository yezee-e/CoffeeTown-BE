-- migrate:up
CREATE TABLE userInfo(
    user_email varchar(100) primary key ,
    user_name VARCHAR(20) not null,
    user_password  varchar(100) not null,
    user_nickname varchar(20) not null unique,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_grade varchar(10) default "user"
)  ;


-- migrate:down

