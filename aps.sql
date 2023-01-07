-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2023 at 02:45 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aps`
--

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `id` int(11) NOT NULL,
  `sendersid` text NOT NULL,
  `receiversid` text NOT NULL,
  `message_sent` text NOT NULL,
  `message_id` text NOT NULL,
  `mess_type` text NOT NULL,
  `sendemail` text NOT NULL,
  `recemail` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usr`
--

CREATE TABLE `usr` (
  `id` int(255) NOT NULL,
  `names` text NOT NULL,
  `email` text NOT NULL,
  `pass` text NOT NULL,
  `dob` text NOT NULL,
  `edu` text NOT NULL,
  `gend` text NOT NULL,
  `bio` text NOT NULL,
  `profilepic` text NOT NULL,
  `coverpic` text NOT NULL,
  `c_usr` text NOT NULL,
  `xs` text NOT NULL,
  `v_code` text NOT NULL,
  `v_txt` text NOT NULL,
  `states` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `usr`
--

INSERT INTO `usr` (`id`, `names`, `email`, `pass`, `dob`, `edu`, `gend`, `bio`, `profilepic`, `coverpic`, `c_usr`, `xs`, `v_code`, `v_txt`, `states`) VALUES
(42, 'U2FsdGVkX1/eY6wQiz6IM/3PdJ78YI8VsMHh7YiuhXc=', 'jujubelt124@gmail.com', 'U2FsdGVkX1+PyCC1cZ/pphCCNnlphIzLETzJAurkno4=', 'U2FsdGVkX1+INmLUcvVy9b2tD6VMNrtGVG8WJTPN4zzrLZFUCkksLgFh/RgXdMpP02yARenun0TtayS8AwcGYA==', 'U2FsdGVkX1/djJCf6oe+ZtiU4scQuX1u2zapJr5w6Fo=', 'U2FsdGVkX19+uYReZ+Z4v8TX08fy319lVUQsIQ2iV9I=', 'U2FsdGVkX1+Zj4gvkjYt/hed3ddiHa+oMa3w6fwe+8E=', 'U2FsdGVkX19wWm35DG2jRxqipJYL5ZW5eO0NtazALnuon7Y4F1R4HNMeK+COpnZ5sa09QfhmxqQxbdrIZSZqhdzfMeyU+UNjywRhKG5CBMXCrwNXEVi5RpC/7ZejLCJJBTtEc9WPqPrQ7pACKxRVxSCv7UABUX1OqsaKJFAWLccleq/ulx5lSwDIjvq800Tcs4IM/NxOEQ4/hoOSmkr5EnjNlUX6zEUAWXoEHn4mLcKn1s2RI6BRtp6us0kHacAc', 'U2FsdGVkX18t77u3VQfjpglm8PlWD0aTjMXtePua9Cf2fL4ZxHweKSSTX7eM3OD2m2vKkFV2ckcCDgDzxHH1xg72UN/bpSkpv0cL29TbEhNiKNTfGL1GwSS0zR6zZqGNe1FKkL3YwtgQqWOXqhJo+a//o3emySS5jXuLgTH2J12QZ6i2I3m41lixYJhWqFfzUoINOCHHhMdWzzhAn4jJ2prmcNkPDhRmTe5deeXqt40ADWpSEicGPftFZu7ph/01', 'b2d2c56b-d7b8-4a1f-93d3-3df010b3b9e4', 'U2FsdGVkX1+N9pZqi1xSrKwF4GJnCLkrVZLXUfnQBDDLkgIEq38KzGJdWY8nkXSm3okOiF1/IN9lMqEjPmdXww==', 'U2FsdGVkX19FPjSO62fyRzwLUYbgbk4hx+CXiNLVsC0=', 'U2FsdGVkX180BE2GaEwwoe3O5p/iJPrlgH1Ta62Zk6c=', 'U2FsdGVkX1+y7Dh/92DdfofXDBafE2ffIaXKk22qCzQ='),
(43, 'U2FsdGVkX1+eHcWIuN07rRZsWdZCBtrV8Xf8jBVgYGI56EMhqonjYnE558oD2zie', 'meddivero@gmail.com', 'U2FsdGVkX18AAWsXsV7SKUFuDBpqG+nccmVaxEoviSg=', 'U2FsdGVkX18NVLvh2TBKCUjMHP2mpTiFrYCEF2F8iba/xMCCzzCbrPh3nTe//ApSwrNFVx2eF42xxRcKxzir6g==', 'U2FsdGVkX1/gdbd4GR39Fvh8MI0z4M3UnWt2JHlqEu0=', 'U2FsdGVkX1/7iHlCnMCUkiDk/KkRaDs4bj4/gwPmVSQ=', 'U2FsdGVkX18DN01lCyjJdA6tEUcn+puJX9FcV6jtArA=', 'U2FsdGVkX18KPOovzfY+t2kHDDj1CgKxEKsVVOayHphoEw7Uc0kqf6FHukh2ki/wypD5xyQKYfH9/fixuQn/H4menA89hL+PjORHimEQymkyII8vM9uYzsejxjjyCiyR7SIptIqSHMsvDcrPfdJd6JN2JiwdvTsH2W08ZvoCtVOVxcPoZgAIHgIRARSutuW5JK38Q2qKPzewTViXd0GlGCuZlG55A92XKZWgRsnGVoaFKrQ1CGKiSwOglQuUhfDI', 'U2FsdGVkX19Bg9DBobZKNpnUij0sMzXNuaEfD3HiaksJjQM/8P8FzvJld0xUsVv3O+warAQLkAg17UpSjQm/IpSUxyjc8nQV0iTqWrcatK6l/m3x61nx0I4Hs3bD4I7abYVU2wUNN4to5AqA2JvXEzgAf+mdYkLRWo1VZmJbbWWZDau5eVeD6J1jFKflJn/+THHusfXysDB2IkAaqaOnVK5FxJgqIYguIVm0CCX5/hSjkmbSjOkXxLd2eln8EXYh', '1183be3a-6fd5-4a85-93bc-4216fb18478a', 'U2FsdGVkX18gCwOdAG+6coMyoILJ+KCUycvYWj9UIezODA3rO5NiZUD1bVn5qxpGHmnV/DClQ4b3IJnEVgcaBw==', 'U2FsdGVkX184taiddkxq9k7jM1SbP/6WIRRF1xcSF9g=', 'U2FsdGVkX180BE2GaEwwoe3O5p/iJPrlgH1Ta62Zk6c=', 'U2FsdGVkX1+pNNkNIiaiRz3XB5RmCrqlAnaAnelF/7M='),
(44, 'U2FsdGVkX188fSlsBRJd930+uoVQgjlgFT3Ah2Wgb5w=', 'whitewebforus@gmail.com', 'U2FsdGVkX1+Z/o/5bzMUNQETiDodl1X96j0AXFYHVME=', 'U2FsdGVkX18WzJS1TvIAFoad56XZbXaaWrX8Vz2u23W1Zl2kzuXK/smFGP3KcMpxUImaAaReCBQYTm+nbKQOMQ==', 'U2FsdGVkX19A7Asp7JEbeTFdujHmebe4x39wFjXPRwI=', 'U2FsdGVkX19A3y7KF+i+4ZAq2c1gSdJcEJ1Cgeg8/os=', 'U2FsdGVkX19Db55Bugt0ZexYt2lB3AbWW4OkTAMF21E=', 'U2FsdGVkX1/W13qLV8c8HlFLO0Lvsxl1Vzn2UXVx1s0=', 'U2FsdGVkX1/nBeCrniXsZDDmOoibZ1iL2Qyjla6NNJ0=', 'e6a3a01d-6d4c-4525-9959-1786ecdc434d', 'U2FsdGVkX1+HmCYUgMDyfKDO2vinUcJw9Y1Alm3I6nX5unIJS6++TUHyPJt7ckdkEOd9lS3ocQvsk+wLh7Yo4g==', 'U2FsdGVkX19T+WvC3SpocDp8GaScalWlVxl9LrcNt6g=', 'U2FsdGVkX1/TSO+5MvthTxlnXCmV4O8yYfczLUq9vlg=', 'U2FsdGVkX1+vN/KtUoInbrgb0JrZJHCAnqmB9j7MAHo=');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usr`
--
ALTER TABLE `usr`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `usr`
--
ALTER TABLE `usr`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
