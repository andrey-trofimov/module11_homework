/*
Задание 11.6.3
Реализовать и протестировать функцию (хотя бы 1 тест).

Напишите функцию, которая принимает строку 
и возвращает перевернутую строку.
*/

export function reversString(userStr) {
  let result = "";

  if (typeof userStr !== "string") {
    result = "Введен не строковый тип данных";
    return result;
  }

  for (let i = userStr.length; i > 0; i--) {
    result += userStr[i - 1];
  }
  console.log(result);
  return result;
}

reversString(true);
