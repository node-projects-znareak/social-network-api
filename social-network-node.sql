-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-07-2021 a las 00:02:09
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `social-network-node`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth`
--

CREATE TABLE `auth` (
  `id` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `auth`
--

INSERT INTO `auth` (`id`, `username`, `password`) VALUES
('aiSwA6HHtjRTdxgKb8k52', 'user123', '$2b$06$NcQZ1FNuEYp6yq6lrU4VieFD.0PPAjTx3tKEGMZ1At/q15Aeir4/W'),
('d2PuVNqNv8-4hJWtt7HDL', 'Mariana', '$2b$06$3v99vn80ShtV8amhyxNBXerlU.AlDe0LRtoXIGesJJ3ZLIUbdADnO'),
('dBR6auKiUnpghUbJRd9DV', 'user123', '$2b$06$zLAZGjknL.qlScwVs4BIJ.MgCyCNed29Muuxbz0t1WPN7wNoKfhd.'),
('YqfLJBLxdJZ82W0jkvO6j', 'znareak', '$2b$06$EIXk5El7ymnEcfSXgDfBeukbBkaubPGcUjjGJGzKrQIGdjZZC7reG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `text` text COLLATE utf8_unicode_ci NOT NULL,
  `user` varchar(32) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `text`, `user`) VALUES
('2323', 'y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to', 'YqfLJBLxdJZ82W0jkvO6j'),
('3yC4JuL8RNb9FxrztM6Ir', 'Post creado por luis mendez EDITADO', 'dBR6auKiUnpghUbJRd9DV'),
('4GBlrobjryIfANUPHtn6X', 'Probando el contenido del post', 'YqfLJBLxdJZ82W0jkvO6j');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `name`) VALUES
('aiSwA6HHtjRTdxgKb8k52', 'user123', 'Luis Mendez'),
('d2PuVNqNv8-4hJWtt7HDL', 'Mariana', 'Mariana Solorzano'),
('dBR6auKiUnpghUbJRd9DV', 'user123', 'Luis Mendez'),
('YqfLJBLxdJZ82W0jkvO6j', 'znareak', 'Libardo Rengifo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_follow`
--

CREATE TABLE `users_follow` (
  `user_from` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `user_to` varchar(32) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users_follow`
--

INSERT INTO `users_follow` (`user_from`, `user_to`) VALUES
('aiSwA6HHtjRTdxgKb8k52', 'YqfLJBLxdJZ82W0jkvO6j'),
('d2PuVNqNv8-4hJWtt7HDL', 'YqfLJBLxdJZ82W0jkvO6j');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users_follow`
--
ALTER TABLE `users_follow`
  ADD UNIQUE KEY `user_from` (`user_from`,`user_to`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
