-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 07, 2023 at 02:14 AM
-- Server version: 8.0.31
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydata`
--

-- --------------------------------------------------------

--
-- Table structure for table `mes_all`
--

CREATE TABLE `mes_all` (
  `id` int NOT NULL,
  `sid` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `titlemain` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `frontthumb` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `backthumb` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `itemid` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `fiileitself` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `pages` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mes_all`
--

INSERT INTO `mes_all` (`id`, `sid`, `titlemain`, `frontthumb`, `backthumb`, `itemid`, `fiileitself`, `pages`) VALUES
(70, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Data Testing', 'https://i0.wp.com/www.trendyhiphop.com/wp-content/uploads/2022/10/Kizz-Daniel-%E2%80%93-Cough-Odo.jpg?fit=696%2C696&ssl=1', 'https://i.ytimg.com/vi/NzfLeDaBw1s/maxresdefault.jpg', '6d035a3a-d213-460f-af0e-097318c9fec2', 'https://www.trendyhiphop.com/wp-content/uploads/2022/10/Kizz_Daniel_-_Cough_Odo_.mp3', ''),
(74, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Cough Kiss Daniels https://www.youtube.com/watch?v=4j7Fa2PCMow', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2F0d298b23-c10e-45b1-80b7-80b2b1f217d0?alt=media&token=3e174923-cdbe-42fe-abb7-d0869eddb90f', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2F0d298b23-c10e-45b1-80b7-80b2b1f217d0?alt=media&token=a4e40ca0-fe78-4e7d-9fd3-5e2efa0b4604', '8a659aba-d672-4931-beb6-dee98ef3265a', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2F0d298b23-c10e-45b1-80b7-80b2b1f217d0?alt=media&token=3da17a05-f966-408e-b0ba-8fc1825a653c', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(75, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Kulosa - A color show https://www.youtube.com/watch?v=1pDQjwaH3qk&t=1s', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2F05fa66eb-2c98-40e4-bcc8-417d507452ad?alt=media&token=8a952442-a127-4c11-b128-193d09e0b6b2', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2F05fa66eb-2c98-40e4-bcc8-417d507452ad?alt=media&token=e1881c65-63f5-4e52-a806-397cf1e8a56f', 'c3efe703-359b-48a0-bd60-c50c15eacc7f', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2F05fa66eb-2c98-40e4-bcc8-417d507452ad?alt=media&token=ce106f22-ec0c-4631-b888-aa06d174eba4', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(76, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Purely virgin Part 2 (Remix)', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2F05d77682-2407-4481-8943-b4caadcc9563?alt=media&token=0e23db70-2f18-41a3-bc0e-d3bdc9bef945', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2F05d77682-2407-4481-8943-b4caadcc9563?alt=media&token=fad6d71f-8126-4ccf-b3a1-b139a60375b8', 'd7c566f7-3da9-4257-a291-e4d3f66bbbaf', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2F05d77682-2407-4481-8943-b4caadcc9563?alt=media&token=5ebd7aff-ac57-48d9-b4c6-bf276c6e7c17', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(77, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Blood Money https://www.youtube.com/watch?v=BIRrgVH5qx8', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2Fddd5d398-89c4-4e28-9cd7-36ba31106e2e?alt=media&token=2960cf69-a6d5-47d3-aff8-0300e25016ab', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2Fddd5d398-89c4-4e28-9cd7-36ba31106e2e?alt=media&token=11a63306-3b2a-41d5-b53c-04d9ed650a34', 'f04e6277-c213-4c69-81f3-9e38a6bb0295', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2Fddd5d398-89c4-4e28-9cd7-36ba31106e2e?alt=media&token=6b476580-7f22-41e6-81d8-8a7894a7e385', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(78, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Tinubu Agbado Riddim Song_Is it for Eba? Is it for Garri? Is it for Beans & Dodo? 50 million youths https://www.youtube.com/watch?v=SGfzPJ-HqxU', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2F548fc1fa-d0e6-457d-b518-6c996a3100b6?alt=media&token=5175ad11-5a1f-49b7-be96-197f4fb7329b', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2F548fc1fa-d0e6-457d-b518-6c996a3100b6?alt=media&token=6a15fb4d-974b-4e6b-9fbc-d9c0acfce601', '6313cbf9-d829-4b25-9e18-6bcdae196ea0', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2F548fc1fa-d0e6-457d-b518-6c996a3100b6?alt=media&token=dcc33353-633d-4a37-82a7-9be137865d92', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(79, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'African Beauty https://www.youtube.com/watch?v=FH2QsiBixe4', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2Fd93589b4-9e76-4500-9841-7a8836c30c14?alt=media&token=a1535883-0230-4f6a-adb9-9e6399841a2f', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2Fd93589b4-9e76-4500-9841-7a8836c30c14?alt=media&token=a7290bf5-51ee-451a-8673-ed8c5f0b5fae', '70c1bb86-03cc-4e77-ab04-a13cba07c6ed', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2Fd93589b4-9e76-4500-9841-7a8836c30c14?alt=media&token=72cebfdd-8ee5-444f-934a-24148656f8c0', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(80, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Power ranger https://www.youtube.com/watch?v=nuQWr8__Eng ', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2F1d387ccb-1a75-4f8f-a316-b6581f74c3fc?alt=media&token=dd6fc5ec-053f-4d9a-bdb7-e47f6e745399', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2F1d387ccb-1a75-4f8f-a316-b6581f74c3fc?alt=media&token=454c13d1-dc90-4519-b70d-e26eb21fbe6c', '0cdf2284-e51a-4d0c-8d10-221f4ed3f7a3', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2F1d387ccb-1a75-4f8f-a316-b6581f74c3fc?alt=media&token=642264c0-3859-47d9-a0a4-90ed72834e01', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(81, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'High https://www.youtube.com/watch?v=juBnNBm0cPw', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2Fdc88b50e-ef8f-47ff-a728-cc7f9860defc?alt=media&token=a7ada921-9184-4636-aa12-106eb2c6dfd9', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2Fdc88b50e-ef8f-47ff-a728-cc7f9860defc?alt=media&token=37423148-b676-438b-b262-7ee97689831e', 'eb384db4-58bc-4ccd-8098-789e0a76a7ae', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2Fdc88b50e-ef8f-47ff-a728-cc7f9860defc?alt=media&token=7aeb19c2-adde-42d6-9f30-61c5cb972759', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(82, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Cassava Garri Ewa', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2F3d770460-cc1e-4b09-b754-de7ab031b3f6?alt=media&token=dbdea945-12d0-4c83-a7c2-bb4f63a0123d', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2F3d770460-cc1e-4b09-b754-de7ab031b3f6?alt=media&token=281e85ba-a671-42d4-91a2-1623a00e35bd', '4397f7a4-6ceb-4ccc-8911-c0253084886a', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2F3d770460-cc1e-4b09-b754-de7ab031b3f6?alt=media&token=3747b24d-ca06-43c7-9ab5-018e0b78a931', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(83, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Comot your teeth https://www.youtube.com/watch?v=DYasljP30Ms', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2Fe5e50e41-65d0-49ea-861f-d239fe13a17b?alt=media&token=ea481d78-8f8f-4b0c-900f-cbe9a77195ae', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2Fe5e50e41-65d0-49ea-861f-d239fe13a17b?alt=media&token=55e44a7d-d43d-4034-aabb-7f61e08f360e', '2a9e71a4-c6af-4fee-a70e-e49f224dc448', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2Fe5e50e41-65d0-49ea-861f-d239fe13a17b?alt=media&token=0b5af6ff-58ca-4c6d-a1c2-5922a5c9c396', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(84, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Sewato https://www.youtube.com/watch?v=DPBRGWUgQsA', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2Fc45810a6-8830-4a45-855a-a246a1073ba4?alt=media&token=79fffff1-edb0-4d82-85dc-21b77ef6f6e1', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2Fc45810a6-8830-4a45-855a-a246a1073ba4?alt=media&token=9705b7fb-68e8-45f9-8b8d-00f87dfcb17b', '77f1ed57-d07c-4869-83ff-49a928215049', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2Fc45810a6-8830-4a45-855a-a246a1073ba4?alt=media&token=d37286e9-4c28-457f-b666-035202c8d625', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(85, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Rush', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2Ffb99cf67-0ffa-446c-bcaa-d28ad4c1e699?alt=media&token=4a946197-a28a-49f1-a152-b81862473558', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2Ffb99cf67-0ffa-446c-bcaa-d28ad4c1e699?alt=media&token=20a74139-330e-4506-9995-669ce28eca87', '1861ceb4-0fe1-4247-8736-37844d5ecc3d', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2Ffb99cf67-0ffa-446c-bcaa-d28ad4c1e699?alt=media&token=ba4b6acc-2e3a-40c7-8cb0-f7f819a09bd3', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(86, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Eventurary', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2F08033166-1d52-4ddd-8a51-540d57958f24?alt=media&token=41345d98-3578-4fb5-9899-b7c20d68377e', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2F08033166-1d52-4ddd-8a51-540d57958f24?alt=media&token=7be351ca-7f8f-4dbe-80d0-70bebd0a8b81', '3417c89a-126c-4a61-88d8-5df7afa76ed6', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2F08033166-1d52-4ddd-8a51-540d57958f24?alt=media&token=c4849ddb-5157-470c-bfbf-071523eb4dee', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(87, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Baby', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2F036ce07f-df7d-41ed-a0d8-d81ed8e59332?alt=media&token=813b601e-8ff2-4cf6-b875-30d73b73a2c0', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2F036ce07f-df7d-41ed-a0d8-d81ed8e59332?alt=media&token=1b5076e9-983a-46ae-9069-468d7fde9913', '8d92e11c-b3c4-4d04-a117-e09efa8da090', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2F036ce07f-df7d-41ed-a0d8-d81ed8e59332?alt=media&token=3260be35-6b39-4b14-80bd-ea6e8348cf87', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(88, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Lose your job', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2F056bcdf5-2512-4799-8cc4-1eca8f9dd901?alt=media&token=cafa9f30-f3b6-4398-b694-ed089651f9cb', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2F056bcdf5-2512-4799-8cc4-1eca8f9dd901?alt=media&token=3a2fa45e-5857-4932-8a03-a9696297ceb3', '08475332-4796-4938-bbd0-875090a45cfe', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2F056bcdf5-2512-4799-8cc4-1eca8f9dd901?alt=media&token=dc2a7f6f-e57c-4b19-ad7c-e05ed0e1fe6e', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(89, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Play boy', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2F34be788d-7998-411b-ab80-7aff67781ed5?alt=media&token=aacd9232-1c6e-4273-bd9f-0c1aa30dfd8a', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2F34be788d-7998-411b-ab80-7aff67781ed5?alt=media&token=ed566aac-001d-4de3-8720-96347dcb9af8', '24400d74-4b79-4744-903a-c6cbdf98bf66', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2F34be788d-7998-411b-ab80-7aff67781ed5?alt=media&token=f8213aed-9259-4645-abbc-0ca664f9cdc9', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(90, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Sip my Alcohol', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2F4f226904-78e8-45eb-abcf-3f783777e2c1?alt=media&token=9490ceb1-8bd3-4813-a24b-0365a4765a5b', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2F4f226904-78e8-45eb-abcf-3f783777e2c1?alt=media&token=7e5d9c6f-0327-4d23-a9a0-c03b7e839d83', 'd1f163d8-f839-40dc-90f7-75a84f768830', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2F4f226904-78e8-45eb-abcf-3f783777e2c1?alt=media&token=b58fe142-aaf1-4c34-b5b3-eb150b1c523c', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(91, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', ' All Over (Official Music Video)', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2F47f7508e-eda2-47c5-b04a-49f9c708d666?alt=media&token=9bb000f8-4070-4f00-8762-a4ffa694992f', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2F47f7508e-eda2-47c5-b04a-49f9c708d666?alt=media&token=6f7399ca-9270-41ec-941a-c665767bd6d1', 'dcd9b18e-7b66-4ff6-b88d-753095fdb5ef', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2F47f7508e-eda2-47c5-b04a-49f9c708d666?alt=media&token=1d5a12c7-0d6b-40a2-ba64-8f22ca3665f9', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(92, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'All for you', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2F76f4e53c-ef96-4b8c-898d-1b351a2ba2ca?alt=media&token=32ffe42c-333e-410e-ae35-cb2450443496', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2F76f4e53c-ef96-4b8c-898d-1b351a2ba2ca?alt=media&token=98ca0afe-b5f7-49cd-bff9-31cf2ffbfb3a', 'fad7f24f-c3b5-4ef0-a24a-b24a52f1d513', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2F76f4e53c-ef96-4b8c-898d-1b351a2ba2ca?alt=media&token=54b58ac7-b0b4-4517-9260-2524e5ac92da', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(93, '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'Beginning to fall in love', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2F0ce55280-26c5-4562-9da0-375eb4d073e6?alt=media&token=407e988e-bd38-4216-9c1c-16d977bfb698', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2F0ce55280-26c5-4562-9da0-375eb4d073e6?alt=media&token=b7d96088-cfdb-4b60-988c-97a6d4f1251a', 'e8b6354a-77f7-42ae-837e-d77fd1bca635', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2F0ce55280-26c5-4562-9da0-375eb4d073e6?alt=media&token=e9882a13-9b13-439d-bac7-409a610aabce', '4bfd147d-1287-4b6b-a247-70bc68375a37'),
(94, '882914ca-6fda-4188-8a65-b736cbd6e277', 'I\'m begning to fall in love', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Front%2Fd6f4a719-ab56-4087-b767-0cc3706f0794?alt=media&token=1e03e8dd-82dc-4f7f-ac3c-4e006be848c3', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Back%2Fd6f4a719-ab56-4087-b767-0cc3706f0794?alt=media&token=c84a658f-dcc0-4509-b4f1-42f0b5cc683c', 'f8cefccf-d242-45ee-aef4-f1f94937e722', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/video%2Fd6f4a719-ab56-4087-b767-0cc3706f0794?alt=media&token=e5fd743d-c3f1-4e35-8f3e-a026353429de', '2f5a05c6-51cd-4941-8c2b-07eaf10b2833');

-- --------------------------------------------------------

--
-- Table structure for table `usr`
--

CREATE TABLE `usr` (
  `id` int NOT NULL,
  `names` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `pass` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `c_usr` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `xs` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `profilepic` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `coverpic` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `pageid` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `index_num` int NOT NULL,
  `time_laps` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `usr`
--

INSERT INTO `usr` (`id`, `names`, `email`, `pass`, `c_usr`, `xs`, `profilepic`, `coverpic`, `pageid`, `index_num`, `time_laps`) VALUES
(7, 'U2FsdGVkX1/lcp6CUaRFnnRfJCo3HXnS6gYjjoEgI2M=', 'jujubelt124@gmail.com', 'U2FsdGVkX181F6VxyFGvVdqRPo1bELsRs52HLvNRIOE=', '4a980fe4-2afe-4b8f-b4f1-649e7568a8b1', 'U2FsdGVkX18s0y8CqGJQWBzjVoYKX3jPO9cfoVAai6mCDj/2Ct1fxGTNLlfQIMdQocxjHuiJKzJmi5y3Jh+XMQ==', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Profile%2Ff5cfd30e-0f98-4b7e-ba05-50c816ebd3e3?alt=media&token=34d9567a-33ca-4ef6-9db0-106230613c98', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Coverpic%2F17711770-ace8-4395-b2d1-b02dee0367ee?alt=media&token=7dca5883-7b22-42eb-a2dc-f507e41962ea', '4bfd147d-1287-4b6b-a247-70bc68375a37', 89, '0'),
(8, 'U2FsdGVkX18kYgb0QGHRLYhenUJUQHyBKwbg1TmJz2I=', 'sylvesteramaralahai35@gmail.com', 'U2FsdGVkX18EdFoRxqeldcQsn2AKHqEW3a21v0WobANmfTsFF2QFZClkk0OtbZQX', 'b7670569-a085-44a1-8dd6-2dbc3d9ae9ef', 'U2FsdGVkX1/hQnDZh/NJlWnqpkIq9zA5AVRZEfkAEycntzsa0BHzWJPmKD33INzijF/fgt3I37j/oBj9THRXxg==', '', '', '4916c569-bffd-4bbf-b8f7-af71bc7c8e6b', 0, '0'),
(9, 'U2FsdGVkX1/eTHYv7ZHTvQETQB+B3XnH+sYQ3joRAgQ=', 'balgureh@gmail.com', 'U2FsdGVkX19RccnvC9LcuprPZhz9cC8aMmW8KQWe+SU=', 'b27e54f1-4a2a-4aff-9fb9-c46eed53ba21', 'U2FsdGVkX18Gp4l76joZovwcc+zZvEJeaFi+p72akJrA8WVZLpc2/cSqywSo1FbLky3RfbMmOWgvCvIMn/sdRg==', '', '', '64e141fb-9474-4989-9b47-77ee6ebdace6', 0, '0'),
(10, 'U2FsdGVkX1+dEBmutmAUI3tgrgGMpGeGnpNjgX7UvQc=', 'labalu@gmail.com', 'U2FsdGVkX1/8LLYpDgBY8B1DQwYA66RMF/c26DTAzvQ=', 'c1e0587f-ed42-457e-b00d-bee55d2db7ec', 'U2FsdGVkX196K/AZRVX3HFtSCOKP+VNo+8DWkJffHQbnCS+UIsrh5r/NHSZSFWdCYjedzJyc0Voq62tTmtU6/w==', '', '', '3d5f4220-c868-466f-9554-79764602438b', 0, '0'),
(12, 'U2FsdGVkX19rtcYe7fmKkNsl9iflRcEkxoH/lEqkh8c=', 'dornalmed@gmail.com', 'U2FsdGVkX1/J9wepGccseHKF0v6sh5Bq4iwMF9zJ5mI=', '882914ca-6fda-4188-8a65-b736cbd6e277', 'U2FsdGVkX19vpV9n087fKfVhFWsuXK74jWRw220O3oU3eP7tf4yvWz+fmx/fK9X1zYum3diJcib1UTVT64wgyw==', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Profile%2Fe1c29b3e-dd51-41bf-a0b3-1c514b290e29?alt=media&token=b4d9cb79-72a0-459a-b243-ac18c1ee7752', 'https://firebasestorage.googleapis.com/v0/b/sbnmain-176d4.appspot.com/o/Coverpic%2F26c9e0d7-cbac-4dbc-9f7e-4d17ebc19b78?alt=media&token=dd7458dc-2d4b-4181-bd5d-85466497ae51', '2f5a05c6-51cd-4941-8c2b-07eaf10b2833', 105, '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mes_all`
--
ALTER TABLE `mes_all`
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
-- AUTO_INCREMENT for table `mes_all`
--
ALTER TABLE `mes_all`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT for table `usr`
--
ALTER TABLE `usr`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
