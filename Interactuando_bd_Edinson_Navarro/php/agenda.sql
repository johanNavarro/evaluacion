/*
Navicat MySQL Data Transfer

Source Server         : desarrollo
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : agenda

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-11-14 15:32:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for eventos
-- ----------------------------
DROP TABLE IF EXISTS `eventos`;
CREATE TABLE `eventos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `fecha_inicio` varchar(20) NOT NULL,
  `fecha_fin` varchar(20) DEFAULT NULL,
  `hora_inicio` varchar(20) DEFAULT NULL,
  `hora_fin` varchar(20) DEFAULT NULL,
  `allday` tinyint(1) DEFAULT NULL,
  `fk_usuarios` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuarios` (`fk_usuarios`),
  CONSTRAINT `fk_usuarioemail_evento` FOREIGN KEY (`fk_usuarios`) REFERENCES `usuarios` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of eventos
-- ----------------------------
INSERT INTO `eventos` VALUES ('4', 'prueba1', '2018-11-14', '2018-11-14', '07:00:00', '08:30:00', '0', 'jnavarro@mail.com');
INSERT INTO `eventos` VALUES ('5', 'prueba2', '2018-11-17', '2018-11-17', '08:00:00', '12:30:00', '0', 'jnavarro@mail.com');

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `email` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of usuarios
-- ----------------------------
INSERT INTO `usuarios` VALUES ('jnavarro@mail.com', 'johan', '$2y$10$5gQOKHDaNd1LGFaMK8RTUOPADC.Es8ZXKFJgwO763ZSIp7ZQxd4VW', '1995-11-08');
INSERT INTO `usuarios` VALUES ('prueba@mail.com', 'prueba', '$2y$10$qYQMkFe8elC1sou7WAfGLuv7MvjB4kbzw2GbHqL3sT4TPsAHudwqC', '1986-12-01');
INSERT INTO `usuarios` VALUES ('usuario@mail.com', 'usuario', '$2y$10$oehYLZno8Cm7g6799HRmietD/ps.turmjQ.RUcLZJv4oJ54mXdFc2', '1993-07-16');
