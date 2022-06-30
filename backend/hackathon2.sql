-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 30 juin 2022 à 16:40
-- Version du serveur :  8.0.21
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `hackathon`
--

-- --------------------------------------------------------

--
-- Structure de la table `city`
--

DROP TABLE IF EXISTS `city`;
CREATE TABLE IF NOT EXISTS `city` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `postal_code` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_employee` int DEFAULT NULL,
  `id_project` int DEFAULT NULL,
  `feature` varchar(255) DEFAULT NULL,
  `comment_desc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `employee`
--

DROP TABLE IF EXISTS `employee`;
CREATE TABLE IF NOT EXISTS `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `id_city` int DEFAULT NULL,
  `is_available` tinyint(1) DEFAULT NULL,
  `id_language` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `language`
--

DROP TABLE IF EXISTS `language`;
CREATE TABLE IF NOT EXISTS `language` (
  `id` int NOT NULL AUTO_INCREMENT,
  `language` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `project`
--

DROP TABLE IF EXISTS `project`;
CREATE TABLE IF NOT EXISTS `project` (
  `id` int NOT NULL AUTO_INCREMENT,
  `project_name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `projet_owner` varchar(255) DEFAULT NULL,
  `modif_date` timestamp NULL DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `target_public` varchar(255) DEFAULT NULL,
  `id_language` int DEFAULT NULL,
  `progression` int DEFAULT NULL,
  `number_of_people` int DEFAULT NULL,
  `id_employee` int DEFAULT NULL,
  `id_city` int DEFAULT NULL,
  `project_domain` varchar(255) DEFAULT NULL,
  `end_date` timestamp NULL DEFAULT NULL,
  `cost` int DEFAULT NULL,
  `responsible` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `project`
--

INSERT INTO `project` (`id`, `project_name`, `created_at`, `projet_owner`, `modif_date`, `description`, `target_public`, `id_language`, `progression`, `number_of_people`, `id_employee`, `id_city`, `project_domain`, `end_date`, `cost`, `responsible`) VALUES
(1, 'projet d\'application méteo', '2022-06-29 15:21:20', 'Clémence is the owner', '2022-06-30 15:21:20', 'le projet concerne le développement d\'une appli météo à destination du grand public', 'comptable', 1, 50, 25, 1, 1, 'Développement', '2022-06-30 15:21:20', 1500, 'Delphine'),
(2, 'Ecologie', '2022-06-30 15:21:20', 'Jerome', '2022-06-30 15:21:20', 'projet pour gérer l\'écologie', 'les écolos', 2, 42, 13, 2, 2, 'Ressources Humaines', '2022-06-30 15:21:20', 2500, 'Lamarre'),
(3, 'projet d\'application méteo', '2022-06-29 15:21:20', 'Clémence is the owner', '2022-06-30 15:21:20', 'le projet concerne le développement d\'une appli météo à destination du grand public', 'comptable', 1, 80, 25, 1, 1, 'Consulting', '2022-06-30 15:21:20', 1500, 'Delphine'),
(4, 'Projet ECO12', '2022-06-30 15:21:20', 'Jerome', '2022-06-30 15:21:20', 'projet pour gérer l\'écologie', 'les écolos', 2, 42, 13, 2, 2, 'Communication', '2022-06-30 15:21:20', 2500, 'Lamarre'),
(5, 'toto', '2022-06-30 09:56:19', 'Attila', '2022-06-30 09:56:19', 'projet de développement', 'développeur', 2, 98, 12, 4, 3, 'Développement', '2022-06-30 09:56:19', 2500, 'Attila');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
