-- MySQL dump 10.13  Distrib 8.0.35, for Win64 (x86_64)
--
-- Host: localhost    Database: loginauction
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `buyers`
--

DROP TABLE IF EXISTS `buyers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `buyers` (
  `name` varchar(30) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buyers`
--

LOCK TABLES `buyers` WRITE;
/*!40000 ALTER TABLE `buyers` DISABLE KEYS */;
INSERT INTO `buyers` VALUES ('ujjwal','ujjwal123@gmail.com','ujjUJJ123',1),('om','om123@gmail.com','omOM123',2),('NIKHIL','nikhil123@gmail.com','nikNIK123',3);
/*!40000 ALTER TABLE `buyers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cardetail`
--

DROP TABLE IF EXISTS `cardetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cardetail` (
  `card_id` int DEFAULT NULL,
  `fuel` varchar(40) DEFAULT NULL,
  `transmission` varchar(30) DEFAULT NULL,
  `cylinder` int DEFAULT NULL,
  `body` varchar(40) DEFAULT NULL,
  `power` int DEFAULT NULL,
  `capacity` int DEFAULT NULL,
  `boot_space` int DEFAULT NULL,
  `clearance` int DEFAULT NULL,
  `image` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cardetail`
--

LOCK TABLES `cardetail` WRITE;
/*!40000 ALTER TABLE `cardetail` DISABLE KEYS */;
INSERT INTO `cardetail` VALUES (1,'Petrol','Manual',4,'sedan',350,4,100,200,'/images/mustang.jpg'),(2,'Petrol','Manual',4,'sedan',300,4,200,200,'/images/audi.jpg'),(3,'Electric','Automatic',4,'sedan',250,4,200,200,'/images/Harrier-EV.jpg'),(4,'Electric','Automatic',4,'sedan',250,4,200,200,'/images/bentley-continental-gt-EV.jpg'),(5,'Electric','Automatic',4,'sedan',250,4,200,200,'/images/Jaguar XF.jpg');
/*!40000 ALTER TABLE `cardetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cars` (
  `car_id` int DEFAULT NULL,
  `id` varchar(40) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `bid` int DEFAULT NULL,
  `images` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (1,'nikhil123@gmail.com','Mustang',4000,'./images/mustang.jpg'),(2,'nikhil123@gmail.com','Audi',2500,'./images/audi.jpg'),(3,'ujjwal123@gmail.com','Harrier-EV',2500,'./images/Harrier-EV.jpg'),(4,'ujjwal123@gmail.com','Bentley Continenental',2500,'./images/bentley-continental-gt.jpg'),(5,NULL,'Jaguar XF',2000,'./images/Jaguar XF.jpg');
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-14 22:42:41
