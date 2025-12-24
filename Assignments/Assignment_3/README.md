# Vehicle Rental System

## Query 1

```cmd
select b.booking_id, u.name as customer_name, v.name as vehicle_name, b.start_date, b.end_date, b.status from bookings as b
  inner join users as u using(user_id)
  inner join vehicles as v using(vehicle_id);
```

![alt text](image.png)

## Query 2

```cmd
select * from vehicles as v where not exists(select vehicle_id from bookings as b where b.vehicle_id = v.vehicle_id);
```

![alt text](image-1.png)

## Query 3

```cmd
select * from vehicles where status = 'available' and type = 'car';
```

![alt text](image-2.png)

## Query 4

```cmd
select v.name, count(*) from bookings as b inner join vehicles as v using(vehicle_id) group by v.name having count(*)>2;
```

![alt text](image-3.png)
