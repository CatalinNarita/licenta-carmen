export const rooms = [
  {
    title: "Title 1",
    capacity: 2,
    phone: "1234567890",
    type: "DELUXE",
  },
  {
    title: "Title 2",
    capacity: 3,
    phone: "1234567890",
    type: "BUDGET",
  },
  {
    title: "Title 3",
    capacity: 4,
    phone: "1234567890",
    type: "APARTMENT",
  },
  {
    title: "Title 4",
    capacity: 2,
    phone: "1234567890",
    type: "DELUXE",
  },
  {
    title: "Title 5",
    capacity: 3,
    phone: "1234567890",
    type: "BUDGET",
  },
  {
    title: "Title 6",
    capacity: 4,
    phone: "1234567890",
    type: "APARTMENT",
  },
  {
    title: "Title 7",
    capacity: 2,
    phone: "1234567890",
    type: "DELUXE",
  },
  {
    title: "Title 8",
    capacity: 3,
    phone: "1234567890",
    type: "BUDGET",
  },
  {
    title: "Title 9",
    capacity: 4,
    phone: "1234567890",
    type: "APARTMENT",
  },
  {
    title: "Title 10",
    capacity: 4,
    phone: "1234567890",
    type: "APARTMENT",
  },
];

export const bookings = [
  {
    booking_number: 1,
    num_of_guests: 2,
    start_date: "2023-01-17T13:00:00.000Z",
    end_date: "2023-01-18T13:00:00.000Z",
    user_id: 17,
    room_id: 93,
  },
];


//

SELECT
    `rooms`.*
FROM
    `rooms`
LEFT JOIN `bookings` ON `rooms`.`id` = `bookings`.`room_id`
WHERE `bookings`.`room_id` IS NOT NULL AND /*'2023-01-17 13:00:00' <= `bookings`.`start_date`;*/
    ((
        '2023-01-14 13:00:00' < `bookings`.`start_date` AND '2023-01-16 13:00:00' < `bookings`.`start_date`
    ) OR (
        '2023-01-14 13:00:00' > `bookings`.`end_date` AND '2023-01-16 13:00:00' > `bookings`.`end_date`
    ));


// SELECT * FROM `rooms` LEFT OUTER JOIN `bookings` ON `rooms`.`id` = `bookings`.`room_id` WHERE (DATE('2023-01-14') < `bookings`.`start_date` AND DATE('2023-01-16') < `bookings`.`start_date`) OR (DATE('2023-01-14') > `bookings`.`end_date` AND DATE('2023-01-16') > `bookings`.`end_date`);