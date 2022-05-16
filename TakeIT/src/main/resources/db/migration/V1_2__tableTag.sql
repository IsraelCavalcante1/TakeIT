CREATE TABLE T_TI_TAG
(
    tag_id SERIAL PRIMARY KEY,
    nm_nome_tag VARCHAR(16) not null,
    ds_color VARCHAR(10) not null,
    user_id  serial,
        CONSTRAINT fk_user
        FOREIGN KEY(user_id)
        REFERENCES T_TI_USER(user_id)
)


