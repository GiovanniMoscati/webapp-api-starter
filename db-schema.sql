create table users
(
    id       varchar(255) not null
        primary key,
    password varchar(255) not null,
    name     varchar(255) not null,
    surname  varchar(255) not null
);

create table items
(
    id          int auto_increment
        primary key,
    userId      varchar(255)                                         not null,
    name        varchar(255)                                         not null,
    brand       varchar(255)                                         not null,
    description text                                                 null,
    type        enum ('perfume', 'decant') default 'perfume'         not null,
    price       float                                                not null,
    size        int                                                  not null,
    createdAt   datetime                   default CURRENT_TIMESTAMP not null,
    updatedAt   timestamp                  default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    constraint items_users_fk
        foreign key (userId) references users (id)
            on delete cascade
);

