-- Create DB workshops and switch to it
create database  if not exists workshops;
use workshops;
-- Create the tables to define the following (your design can have other tables based on normalization requirements). Choose appropriate data types. Use auto incremented ids. Make sure to setup foreign key relationships. Set up NOT NULL constraints and other constraints as necessary.
    -- workshop
        -- id
        -- name
        -- description
        -- startDate
        -- endDate
        -- time
        -- address
        -- city
        -- state
        -- modes (if available as "in person" | "online" - could be both)
        -- imageUrl
        -- category_id
create table workshop (
	id int not null auto_increment,
    name varchar(40) not null,
    description varchar(200) not null,
    startDate date not null,
    endDate date not null,
    startTime time not null,
    endTime time not null,
    location_id int not null,
    modes_id int not null,
    imageUrl varchar(40) not null,
    category_id int not null,
    primary key(id),
    foreign key fk_category(category_id) references category(id),
	foreign key fk_modes(modes_id) references modes(id),
    foreign key fk_location(location_id) references location(id)
);

create table location (
	id int not null auto_increment,
    address varchar(40) not null,
    city varchar(40) not null,
    state varchar(40) not null,
    primary key(id)
);

create table modes (
	id int not null auto_increment,
    `in person` enum('true', 'false'),
    `online` enum('true', 'false'),
    primary key(id)
);
    -- category
        -- id
        -- name
        -- description
create table category (
	id int not null auto_increment,
    name varchar(40) not null,
	description varchar(200) not null,
	primary key(id)
);
    -- session
        -- name
        -- speaker
        -- workshop_id
        -- sequence_id
        -- duration
        -- level ("Basic" | "Intermediate" | "Advanced")
        -- description
        -- votes
create table session (
	id int not null auto_increment,
    speaker varchar(40) not null,
    workshop_id int not null,
    sequence_id int not null,
    duration int not null,
    level enum('Basic', 'Intermediate', 'Advanced'),
	description varchar(200) not null,
    votes int not null,
    primary key(id),
    foreign key fk_workshop(workshop_id) references workshop(id)
);

alter table session
rename column description to abstract;

alter table category 
modify column description varchar(2000) not null;

alter table workshop 
modify column description varchar(2000) not null;

alter table workshop 
modify column imageUrl varchar(200) not null;

alter table session
add column name varchar(40) not null;

/*
alter table workshop 
modify column startDate datetime not null;

alter table workshop 
modify column endDate datetime not null;
*/

-- added all types of mode
insert into modes ( id, `in person`, `online`) values ( null, 'true', 'true');
insert into modes ( id, `in person`, `online`) values ( null, 'true', 'false');
insert into modes ( id, `in person`, `online`) values ( null, 'false', 'true');
insert into modes ( id, `in person`, `online`) values ( null, 'false', 'false');

select * from modes;

-- adding locations
insert into location ( id, address, city, state ) values ( null, 'Tata Elxsi, Prestige Shantiniketan', 'Bangalore', 'Karnataka' );

select * from location;

-- adding category
insert into category ( id, name, description ) values ( null, 
														'Angular JS Bootcamp',
														'<p><strong>AngularJS</strong> (also written as <strong>Angular.js</strong>) is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.</p><p>It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications. (This flexibility has led to the acronym MVW, which stands for "model-view-whatever" and may also encompass model–view–presenter and model–view–adapter.)</p>'
);

select * from category;
-- adding workshop
insert into workshop ( id, name, description, startDate, endDate, startTime, endTime, imageUrl, modes_id, location_id, category_id ) 
values ( null, 
		'Angular JS Bootcamp', 
		'<p><strong>AngularJS</strong> (also written as <strong>Angular.js</strong>) is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.</p><p>It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications. (This flexibility has led to the acronym MVW, which stands for "model-view-whatever" and may also encompass model–view–presenter and model–view–adapter.)</p>',
		str_to_date('2019-01-01T04:00:00.000Z', '%Y-%m-%dT%T.%fZ'),
        str_to_date('2019-01-03T08:00:00.000Z', '%Y-%m-%dT%T.%fZ'),
        '09:30:00',
        '01:30:00',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/2000px-AngularJS_logo.svg.png',
        2,
		1,
        1
);

-- delete from workshop where id = 1;
select * from workshop;
-- adding session

insert into session ( id, name, speaker, workshop_id, sequence_id, duration, level, abstract, votes ) values ( null, 'Introduction to Angular JS', 'John Doe', 2, 1, 1, 'Basic', 'In this session you will learn about the basics of Angular JS', 0 );

select * from session;

