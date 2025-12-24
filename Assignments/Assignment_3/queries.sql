
create type user_role as enum('Admin', 'Customer');

create type vehicle_type as enum('car', 'bike', 'truck');

create type vehicle_status as enum('available', 'rented', 'maintenance');

create type booking_status as enum('pending', 'confirmed', 'completed', 'cancelled');



create table if not exists users(
  user_id serial primary key,
  name varchar(50) not null,
  email varchar(70) not null unique,
  phone varchar(11) not null,
  role user_role not null 
);



create table if not exists vehicles(
  vehicle_id serial primary key,
  name varchar(30) not null,
  type vehicle_type not null,
  model varchar(20) not null,
  registration_number varchar(50) not null unique,
  rental_price decimal(8,2) not null,
  status vehicle_status not null
);



create table if not exists bookings(
  booking_id serial primary key,
  user_id int references users(user_id) not null,
  vehicle_id int references vehicles(vehicle_id) not null,
  start_date date not null,
  end_date date not null,
  status booking_status not null,
  total_cost decimal(8,2) not null
);



-- Query 1
select b.booking_id, u.name as customer_name, v.name as vehicle_name, b.start_date, b.end_date, b.status from bookings as b 
  inner join users as u using(user_id) 
  inner join vehicles as v using(vehicle_id);




-- Query 2
select * from vehicles as v where not exists(select vehicle_id from bookings as b where b.vehicle_id = v.vehicle_id);




-- Query 3
select * from vehicles where status = 'available' and type = 'car';




-- Query 4
select v.name, count(*) from bookings as b inner join vehicles as v using(vehicle_id) group by v.name having count(*)>2;

