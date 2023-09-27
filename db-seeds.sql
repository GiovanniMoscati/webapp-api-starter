insert into users (id, password, name, surname) values ('giovanni@gmail.com', 'pass', 'Giovanni', 'Moscati');
insert into users (id, password, name, surname) values ('raissa@gmail.com', 'pass', 'Raissa', 'Zampagna');
insert into users (id, password, name, surname) values ('michele@gmail.com', 'pass', 'Michele', 'Salerno');

insert into items (userId, name, brand, description, type, price, size)
    values ('giovanni@gmail.com', 'Naxos', 'Xerjoff',
        'Naxos è un gran profumo con una descrizione lunga, quindi voglio dettagliare bene il contenuto di questa descrizione',
        'perfume', 245, 100
    );
insert into items (userId, name, brand, description, type, price, size)
    values ('giovanni@gmail.com', 'Spicebomb Extreme', 'Viktoria And Rolf',
        'Spicebomb Extreme è un gran profumo con una descrizione lunga, quindi voglio dettagliare bene il contenuto di questa descrizione',
        'perfume', 95, 90
    );
insert into items (userId, name, brand, description, type, price, size)
    values ('raissa@gmail.com', 'Bianco Latte', 'Giardini Di Toscana',
        'Bianco Latte è un gran profumo con una descrizione lunga, quindi voglio dettagliare bene il contenuto di questa descrizione',
        'perfume', 125, 100
    );
insert into items (userId, name, brand, description, type, price, size)
    values ('michele@gmail.com', 'Dior Home Sport', 'Dior',
        'Dior Home Sport è un gran profumo con una descrizione lunga, quindi voglio dettagliare bene il contenuto di questa descrizione',
        'perfume', 110, 100
    );
insert into items (userId, name, brand, description, type, price, size)
    values ('raissa@gmail.com', 'l\'interdit', 'Givency',
        'l\'interdit è un gran profumo con una descrizione lunga, quindi voglio dettagliare bene il contenuto di questa descrizione',
        'perfume', 245, 100
    );
