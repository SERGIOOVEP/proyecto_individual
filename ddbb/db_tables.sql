#DROP database appFilms;
CREATE database appFilms;
USE appFilms;

CREATE TABLE users (
    id_user INT AUTO_INCREMENT,
    name_user VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    pass varchar(20) NOT NULL UNIQUE,
    year_user VARCHAR(4) NOT NULL,
    PRIMARY KEY (id_user)
);


CREATE TABLE films (
    id_film INT AUTO_INCREMENT,
    name_film VARCHAR(100) NOT NULL,
    gender VARCHAR(100) NOT NULL,
    year_film YEAR NOT NULL,
    director VARCHAR(100) NOT NULL,
    stage VARCHAR(100) NOT NULL,
    PRIMARY KEY (id_pelicula)
);


CREATE TABLE films_favorites (
    id_favorite_film INT AUTO_INCREMENT,
    fk_id_user INT,
    fk_id_film INT,
    PRIMARY KEY (id_pelicula_favorita),
    FOREIGN KEY (fk_id_user) REFERENCES users(id_user),
    FOREIGN KEY (fk_id_film) REFERENCES films(id_film)
);



INSERT INTO usuarios VALUES(NULL, "Sergio", "sergio@gmail.com","1234",1988);

select * from users;
select * from films;
select * from films_favorites;