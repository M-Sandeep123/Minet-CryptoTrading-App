
DROP TABLE IF EXISTS `wallet`;
CREATE TABLE `wallet` (
    `id` int NOT NULL,
    `available_balance` varchar(255) NOT NULL,
    `date` date NOT NULL,
    `user_name` varchar(255) NOT NULL,
    `quantity` varchar(255) NOT NULL,
    `transaction_crypto_name` varchar(255) NOT NULL,
    `transaction_type` varchar(255) NOT NULL,
    `user_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;