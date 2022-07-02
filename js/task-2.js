/*

Задание 2. Выбрать любую реализованную функцию из тренажера JavaScript, раздел «Функции»

добавить ее в репозиторий;
продумать тест-кейсы (успешное/неуспешное выполнение функции);
продумать корнер-кейсы; 
написать unit-тесты (минимум 3).

4. Функции | Задание 5

Напишите функцию getMonth(n), которая принимает номер месяца и 
возвращает его название. Например, getMonth(12) ⇒ 'декабрь'. 
Используйте if/else.
*/

export function getMonth(n) {
  let result = "";

  if (n === 1) result = "январь";
  else if (n === 2) result = "февраль";
  else if (n === 3) result = "март";
  else if (n === 4) result = "апрель";
  else if (n === 5) result = "май";
  else if (n === 6) result = "июнь";
  else if (n === 7) result = "июль";
  else if (n === 8) result = "август";
  else if (n === 9) result = "сентябрь";
  else if (n === 10) result = "октябрь";
  else if (n === 11) result = "ноябрь";
  else if (n === 12) result = "декабрь";
  else result = "нет месяца с таким номером";

  return result;
}

// getMonth(2);
