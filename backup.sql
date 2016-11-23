CREATE TABLE persona
(
	id serial NOT NULL,
	nombre character varying(30),
	apellido character varying(30),
	edad integer,
	direccion character varying(30),
	CONSTRAINT persona_pk PRIMARY KEY (id)
);

CREATE TABLE telefono
(
	id serial NOT NULL,
	persona integer,
	telefono character varying(100),
	CONSTRAINT telefono_pk PRIMARY KEY (id),
	CONSTRAINT telefono_fk FOREIGN KEY (persona)
		REFERENCES persona (id) MATCH SIMPLE
		ON UPDATE NO ACTION ON DELETE NO ACTION
);


insert into persona (nombre, apellido, edad, direccion) values ('Pablo', 'Bassil', '31', 'Calle 08 #75-176');
insert into persona (nombre, apellido, edad, direccion) values ('Camilo', 'Bassil', '24', 'Calle 08 #75-176');
insert into persona (nombre, apellido, edad, direccion) values ('Candelaria', 'Amin', '40', 'Carrera 44 #85-26');


insert into telefono (persona, telefono) values (1, '3002781650');
insert into telefono (persona, telefono) values (1, '3856678');
insert into telefono (persona, telefono) values (2, '3004874364');
insert into telefono (persona, telefono) values (3, '3594026');