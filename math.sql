-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Сен 30 2018 г., 08:03
-- Версия сервера: 5.6.35
-- Версия PHP: 5.6.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `math`
--

-- --------------------------------------------------------

--
-- Структура таблицы `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `cuser` int(11) NOT NULL,
  `dat` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `comment` text COLLATE utf8_unicode_ci NOT NULL,
  `lection` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `comments`
--

INSERT INTO `comments` (`id`, `cuser`, `dat`, `comment`, `lection`) VALUES
(1, 1, '2018-09-29 16:33:20', '<p><strong style=\"margin: 0px; padding: 0px; font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; text-align: justify;\">Lorem Ipsum</strong><span style=\"font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; text-align: justify;\">&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s</span></p>', 1),
(3, 2, '2018-09-29 16:33:20', '<p>Создание страницы с блог постами (с google maps pro) на WordPress</p>', 1),
(4, 1, '2018-09-29 17:59:47', '<p>&cap;&THORN;&Iuml;&iota;&lambda;&Rho;&eta; kjbk <sup>jkbkm mn</sup>nkj&bull;&beta;</p>', 1),
(6, 2, '2018-09-29 18:07:11', '<p><strong>mn </strong><em>jugbj</em><span style=\"text-decoration: underline;\">&nbsp;jbjkbkj1</span><sub>1</sub><sup>2</sup>5&cedil;&divide;&not;&Yuml;&Yacute;&aelig;&atilde;</p>', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `lecture`
--

CREATE TABLE `lecture` (
  `id` int(11) NOT NULL,
  `id_txt` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `txt` text COLLATE utf8_unicode_ci NOT NULL,
  `cuser` int(11) NOT NULL,
  `dat` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `test` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `lecture`
--

INSERT INTO `lecture` (`id`, `id_txt`, `name`, `txt`, `cuser`, `dat`, `test`) VALUES
(1, '1.-bazovuе-svеdеniya-o-java', '1. Базовые сведения о Java', '<p style=\"text-align: justify;\"><span style=\"white-space: pre;\"> <span style=\"white-space: pre;\"> </span></span><strong>Java&nbsp;</strong>- кроссплатформенный, объектно-ориентированный, бесплатный язык программирования, разработанный компанией <strong>Sun Microsystems</strong> (в последующем приобретённой компанией <strong>Oracle</strong>). Программы на <strong>Java </strong>транслируются в байт-код, выполняемый виртуальной машиной <strong>Java (Java VM, JVM)</strong> - программой, обрабатывающей байт-код и передающей инструкции оборудованию как интерпретатор. Основное достоинство языка Java - именно в его кросс- платформенности. Байт-код не зависит от оборудования и легко переносим. Главным недостатком Java является то, что, в отличие от C++ или Delphi, это все же не компилятор, а интерпретатор. Программа на Java работает в среднем в 2-5 раз медленнее, чем программа на C++ и потребляет в среднем в 10 раз больше памяти. Java является базовым языком программирования для операционной системы <strong>Android</strong>. Однако, прежде, чем приступить к изучению программирования на <strong>Java </strong>для Android, несколько лекций мы посвятим изучению основ <strong>Java </strong>без привязки к какой-либо операционной системе.&nbsp;</p>\r\n<p style=\"text-align: justify;\"><span style=\"white-space: pre;\"> <span style=\"white-space: pre;\"> </span></span>Исходный текст Java-программы должен быть файлом с расширением .java. Для компиляции программы в байт-код используется программа javac из JDK6, который мы научились устанавливать на компьютер в ходе лабораторной работы №1. Чтобы откомпилировать программу MyProg.java нужно в командной строке набрать javac MyProg.java. Если текст программы не содержит ошибок, компилятор создаст файл с таким же именем, но с расширением .class (байт-код программы). Теперь эту программу можно запустить с помощью <strong>Java VM </strong>(файл java.exe). Для этого нужно в командной строке набрать java MyProg (расширение файла не указывается). Специальными компановщиками из файлов байткода и файлов ресурсов могут формироваться, например, файлы приложений для мобильных телефонов (расширение .jar) или установочные файлы приложений для операционной системы Android (с расширением <strong>.apk</strong>). Файлы байткода исполняются виртуальной машиной <strong>Java </strong>(Java VM).</p>\r\n<p style=\"text-align: justify;\"><span style=\"white-space: pre;\"> <span style=\"white-space: pre;\"> </span></span>Для каждой операционной системы или устройства разрабатывается своя Java VM, в то время как байт-код программы остается неизменным В отличии от других языков программирования, например C++, PHP, где объектно-ориентированное программирование можно использовать, если есть желание, в языке &nbsp;программирования Java каждая программа &ndash; объектно-ориентированная. Основная конструкция языка программирования Java, основной объект, с которым можно что-то делать &ndash; это класс. У каждого класса есть какие-то характеристики, называемые полями (другими словами &ndash; переменные) и умения что-то делать, называемые методами (другими словами - функции). На рис. 1.3 приведен пример текста простой программы, где есть метод и переменная.</p>\r\n<p style=\"text-align: justify;\">&nbsp;</p>', 1, '2018-09-28 10:54:42', 'тест по теме 1. Базовые сведения о Java'),
(2, '2.java-i-obaеktno-oriеntirovannoе-programmirovaniе', '2. Java и объектно-ориентированное программирование', '<p style=\"text-align: justify;\">&nbsp; &nbsp; В отличии от других языков программирования, например C++, PHP, где объектно-ориентированное программирование можно использовать, если есть желание, в языке программирования Java каждая программа &ndash; объектно-ориентированная.&nbsp;</p>\n<p style=\"text-align: justify;\">&nbsp; &nbsp; Основная конструкция языка программирования Java, основной объект, с которым можно что-то делать &ndash; это класс. У каждого класса есть какие-то характеристики, называемые полями (другими словами &ndash; переменные) и умения что-то делать, называемые методами (другими словами - функции). На рис. 1.3 приведен пример текста простой программы, где есть метод и переменная.</p>', 1, '2018-09-28 12:37:23', 'тест по теме 2'),
(3, '3.modifikatoru-public,-private,-protected', '3. Модификаторы public, private, protected', '<p style=\"text-align: justify;\">Как мы уже заметили, перед именами классов, методов и переменных у нас часто стоит служебное слово public. Так вот, это служебное слово сообщает компилятору Java, что помеченные им метод или поле можно без ограничений использовать в других классах (в других программах). Кроме служебного слова <strong>public</strong>, есть еще другие служебные слова, в частности <strong>private</strong> и <strong>protected</strong>. Вот, что означают эти слова:</p>\r\n<p style=\"text-align: justify;\"><strong>public </strong>&ndash; методы и поля видно и можно использовать где угодно;</p>\r\n<p style=\"text-align: justify;\"><strong>private </strong>&ndash; методы и поля видно и можно использовать только в этом классе;</p>\r\n<p style=\"text-align: justify;\"><strong>protected </strong>&ndash; методы и поля видно и можно использовать только в этом классе или в классах, наследующих его с помощью &nbsp; extends.</p>\r\n<p style=\"text-align: justify;\">&nbsp; &nbsp; &nbsp;Для чего это все нужно? Модификаторы <strong>private </strong>и <strong>protected </strong>нужны, чтобы защитить поля от случайного изменения из других программ, которые используют класс.&nbsp;</p>\r\n<p style=\"text-align: justify;\">&nbsp; &nbsp;&nbsp;Когда это нужно? Если речь идет о написании небольшой программы одним человеком, то все поля и методы спокойно можно помечать как <strong>public</strong>. Скорее всего этот один человек не запутается в своем коде программы.</p>\r\n<p style=\"text-align: justify;\">&nbsp; &nbsp;&nbsp;Теперь представим, если речь идет о создании большого проекта, где десятки программистов совместно трудятся над созданием программного кода, причем каждый из них пишет свои классы, но приходится вызывать методы и из классов, написанных кем-то другим. Вэтом случае запросто может возникнуть ситуация, когда в тексте своего класса программист Вася дал какому-то полю название Value, и, одновременно, программист Петя дал названия Value одному из полей своего класса. В этом случае при присвоении полю Value какого-то значения вполне может возникнуть путаница, в результате чего весь сложный проект будет работать неправильно и потребуются значительные усилия для его отладки и выявления ошибки. Использование же в таких больших проектах модификаторов private или protected позволяет защитить поля и методы от случайного изменения из другого класса.</p>\r\n<p style=\"text-align: justify;\">&nbsp; &nbsp;&nbsp;Крайне рекомендуется защищать все поля классов модификатором private, а также защищать этим модификатором большинство методов, которые не предполагается в дальнейшем использовать из других классов. Причем даже начинающий программист на Java, который пишет небольшие программы просто для тренировки, с самого начала должен приучать себя к этому правилу. Тогда при поступлении на работу в серьезную фирму ему будет легко и привычно выполнять требования по написанию грамотного (с точки зрения надежности) кода.</p>\r\n<p style=\"text-align: justify;\">&nbsp; &nbsp; &nbsp;Рассмотрим на примере использование модификатора private. На рис. 1.12 приведе текст класса factorial, а на рис. 1.13 - класса test, который его использует.</p>', 1, '2018-09-22 13:43:48', '');

-- --------------------------------------------------------

--
-- Структура таблицы `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `test` int(11) NOT NULL,
  `question` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `answt` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `answf1` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `answf2` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `answf3` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `questions`
--

INSERT INTO `questions` (`id`, `test`, `question`, `answt`, `answf1`, `answf2`, `answf3`) VALUES
(2, 1, 'Что делает данный код: Khai k=new Khai(); ?', 'Создает экземпляр класса Khai', 'Выводит строку Khai', 'Пишет привет', 'Вызывает метод Khai()'),
(3, 1, 'Что делает данный код: k.reklama(\"Телекоммуникации\",30); ?', 'Вызывает метод reklama', 'смотрит рекламу', 'смотрит телевизор', 'включает телевизор'),
(4, 1, 'методы и поля видно и можно использовать где угодно', 'public ', 'private ', 'protected ', 'google'),
(5, 1, 'методы и поля видно и можно использовать только в этом классе', 'private ', 'public ', 'protected', 'java'),
(6, 1, 'скелет (заготовка) класса с перечислением необходимых методов, но без их кода', 'Интерфейс ', 'Java', 'Class', 'Инкапсуляция'),
(7, 1, 'иерархия пакетов для платформенной независимости GUI компонентов', 'javax.swing', 'java.awt', 'java.sql', 'java.security'),
(8, 1, 'Java Database Connectivity (JDBC) для доступа к базам данных', 'java.sql', 'java.security ', 'java.math', 'java.io'),
(9, 1, '22221', '2', '0', '0', '0');

-- --------------------------------------------------------

--
-- Структура таблицы `stat`
--

CREATE TABLE `stat` (
  `id` int(11) NOT NULL,
  `cuser` int(11) NOT NULL,
  `dat` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `lecture` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `stat`
--

INSERT INTO `stat` (`id`, `cuser`, `dat`, `lecture`) VALUES
(9, 1, '2018-09-29 17:56:41', 1),
(10, 1, '2018-09-29 17:56:46', 1),
(11, 1, '2018-09-29 17:56:48', 1),
(12, 1, '2018-09-29 17:56:49', 1),
(13, 1, '2018-09-29 17:56:51', 1),
(14, 1, '2018-09-29 17:56:52', 1),
(15, 1, '2018-09-29 17:57:00', 2),
(16, 1, '2018-09-29 17:57:02', 2),
(17, 1, '2018-09-29 17:57:03', 2),
(18, 1, '2018-09-29 17:57:04', 2),
(19, 1, '2018-09-29 17:57:05', 2),
(20, 1, '2018-09-29 17:57:06', 2),
(21, 1, '2018-09-29 17:57:08', 2),
(22, 1, '2018-09-29 17:57:09', 2),
(23, 1, '2018-09-29 17:57:18', 3),
(24, 1, '2018-09-29 17:57:26', 1),
(25, 1, '2018-09-29 17:59:47', 1),
(26, 1, '2018-09-29 18:02:39', 1),
(27, 2, '2018-09-29 18:05:34', 1),
(28, 2, '2018-09-29 18:07:11', 1),
(29, 2, '2018-09-29 18:08:06', 1),
(30, 2, '2018-09-29 18:08:18', 1),
(31, 2, '2018-09-29 18:08:21', 1),
(32, 2, '2018-09-29 18:09:13', 1),
(33, 2, '2018-09-29 18:09:25', 1),
(34, 2, '2018-09-29 18:09:30', 1),
(35, 2, '2018-09-29 18:09:40', 1),
(36, 2, '2018-09-29 18:09:50', 1),
(37, 2, '2018-09-29 18:11:13', 1),
(38, 2, '2018-09-29 18:11:33', 1),
(39, 2, '2018-09-29 18:35:50', 1),
(40, 2, '2018-09-30 11:01:53', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `testresult`
--

CREATE TABLE `testresult` (
  `id` int(11) NOT NULL,
  `cuser` int(11) NOT NULL,
  `test` int(11) NOT NULL,
  `result` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `testresult`
--

INSERT INTO `testresult` (`id`, `cuser`, `test`, `result`, `date`) VALUES
(1, 2, 1, 38, '2018-09-28 17:39:05'),
(2, 2, 1, 0, '2018-09-28 17:40:37'),
(3, 2, 1, 13, '2018-09-28 17:41:20'),
(4, 2, 1, 38, '2018-09-28 17:42:46');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `u_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `fname` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `lname` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `mname` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `is_admin` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `u_name`, `password`, `fname`, `lname`, `mname`, `is_admin`) VALUES
(1, 'anar', '202cb962ac59075b964b07152d234b70', 'Анар', 'Туашева', 'Алтынғазыевна', 1),
(2, 'abzal', '202cb962ac59075b964b07152d234b70', 'Абзал', 'Аманжол\n', 'Канатулы\n', 0),
(4, 'asd', '202cb962ac59075b964b07152d234b70', 'asd', 'asd', 'asd', 0),
(5, 'root', '5f4dcc3b5aa765d61d8327deb882cf99', 'asd', 'asd', 'root', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `lecture`
--
ALTER TABLE `lecture`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `stat`
--
ALTER TABLE `stat`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `testresult`
--
ALTER TABLE `testresult`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT для таблицы `lecture`
--
ALTER TABLE `lecture`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT для таблицы `stat`
--
ALTER TABLE `stat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT для таблицы `testresult`
--
ALTER TABLE `testresult`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
