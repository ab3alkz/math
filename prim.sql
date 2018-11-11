
-- Структура таблицы `prim`
--

CREATE TABLE `prim` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fnc` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `form` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `prim`
--

INSERT INTO `prim` (`id`, `name`, `fnc`, `form`) VALUES
  (1, 'Есеп 1', 'calcPrim1()', '<p>1 коэфицент: <input type=\"number\" id=\"n1\" value=\"2\"></p><p>2 коэфицент: <input type=\"number\" id=\"n2\" value=\"-3\"></p>'),
  (2, 'Есеп 2', 'calcPrim2()', '<p>1 коэфицент: <input type=\"number\" id=\"n1\" value=\"2\"></p><p>2 коэфицент: <input type=\"number\" id=\"n2\" value=\"-3\"></p><p>Функция:<textarea style=\"width: 100%; height: 60px\" class=\"mceEditor\" id=\"functionArea\" > </textarea></p>');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `prim`
--
ALTER TABLE `prim`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `prim`
--
ALTER TABLE `prim`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

ALTER TABLE `lecture` ADD `prim` INT NOT NULL AFTER `test`;