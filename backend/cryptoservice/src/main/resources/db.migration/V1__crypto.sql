
DROP TABLE IF EXISTS `crypto_watch_list`;
CREATE TABLE `crypto_watch_list` (
  `id` int NOT NULL AUTO_INCREMENT,
  `change` varchar(255) NOT NULL,
  `circulating_supply` varchar(255) NOT NULL,
  `label` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `src` varchar(255) NOT NULL,
  `volume` varchar(255) NOT NULL,
  `watchlist` bit(1) NOT NULL,
  `userid` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;