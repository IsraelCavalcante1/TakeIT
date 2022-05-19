CREATE TABLE T_TI_BOARD
(
    board_id serial primary key,
    nome VARCHAR(20) NOT NULL,
    user_id serial,
        CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES T_TI_USER(user_id)

);


CREATE TABLE T_TI_TAG_BOARD
(
    tag_board_id serial primary key,
    board_id serial,

    CONSTRAINT fk_board_id
    FOREIGN KEY (board_id)
    REFERENCES T_TI_BOARD(board_id),

    tag_id serial,

    CONSTRAINT fk_tag_id
    FOREIGN KEY (tag_id)
    REFERENCES T_TI_TAG(tag_id)
);