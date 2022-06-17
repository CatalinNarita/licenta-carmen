-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 17, 2022 at 09:23 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `licenta_carmen`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `booking_number` varchar(255) DEFAULT NULL,
  `num_of_guests` int(11) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `booking_number`, `num_of_guests`, `phone_number`, `start_date`, `end_date`, `user_id`, `room_id`, `createdAt`, `updatedAt`) VALUES
(1, 'undefinedundefined', NULL, NULL, NULL, NULL, NULL, NULL, '2022-06-14 22:21:48', '2022-06-14 22:21:48'),
(20, '12', 2, '0752142002', '2022-06-15 21:00:00', '2022-06-22 21:00:00', 1, 2, '2022-06-14 22:41:57', '2022-06-14 22:41:57');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `breakfast_included` tinyint(1) DEFAULT NULL,
  `type` enum('SINGLE','STANDARD','DOUBLE','TRIPLE','SUITE') DEFAULT NULL,
  `lake_view` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `breakfast_included`, `type`, `lake_view`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'SINGLE', 1, '2022-06-14 22:21:05', '2022-06-14 22:21:05'),
(2, 1, 'DOUBLE', 1, '2022-06-14 22:21:05', '2022-06-14 22:21:05'),
(3, 1, 'STANDARD', 1, '2022-06-14 22:21:05', '2022-06-14 22:21:05'),
(4, 1, 'SUITE', 0, '2022-06-14 22:21:05', '2022-06-14 22:21:05'),
(5, 0, 'TRIPLE', 1, '2022-06-14 22:21:05', '2022-06-14 22:21:05');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'Catalin', 'Narita', 'catalin.narita@gmail.com', '$2b$10$yFgKUtGS41iBdAG9Xobe.evnBUZG6iQLPbLxMTkC2mfnMjAw/0z5W', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiQ2F0YWxpbiIsImxhc3ROYW1lIjoiTmFyaXRhIiwiZW1haWwiOiJjYXRhbGluLm5hcml0YUBnbWFpbC5jb20iLCJpYXQiOjE2NTUyNDY1MDAsImV4cCI6MTY1NTMzMjkwMH0.goWVGCevl9Y2YIowarRGJl4LDrfmZQojixGlA3t_spY', '2022-05-17 10:24:27', '2022-06-14 22:41:40'),
(13, 'Laura', 'Mihu', 'laura.mihu@gmail.com', '$2b$10$Fyj7NTDNHHIy/THnbKhl9.5f.U6rzfziG.3k8Tz1lk1U8gdVivUoa', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImZpcnN0TmFtZSI6IkxhdXJhIiwibGFzdE5hbWUiOiJNaWh1IiwiZW1haWwiOiJsYXVyYS5taWh1QGdtYWlsLmNvbSIsImlhdCI6MTY1Mjc5Nzg2OSwiZXhwIjoxNjUyODg0MjY5fQ.vVcRxbaqnF7RTjhFEBdyzi1y7fh2HxpzVVZvChlfYAw', '2022-05-17 11:19:47', '2022-05-17 14:31:09'),
(15, 'Carmen', 'Sandru', 'carmen.sandru@gmail.com', '$2b$10$pu/mVYAjWIaAXUg.duJOQeGoK30EdoTgr1WdTxEquWnOqLJYkP7EG', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImZpcnN0TmFtZSI6IkNhcm1lbiIsImxhc3ROYW1lIjoiU2FuZHJ1IiwiZW1haWwiOiJjYXJtZW4uc2FuZHJ1QGdtYWlsLmNvbSIsImlhdCI6MTY1Mjc5Nzc5NywiZXhwIjoxNjUyODg0MTk3fQ.GQ9qgK5HVsGdZD1BvzUjpTn6RGpikHEVWBYSQc3TFOw', '2022-05-17 11:23:47', '2022-05-17 14:29:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `booking_number` (`booking_number`),
  ADD UNIQUE KEY `phone_number` (`phone_number`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `room_id` (`room_id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`);
COMMIT;
