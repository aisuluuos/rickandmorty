const API = "http://localhost:8000/characters";
const API1 = "https://rickandmortyapi.com/api/character";
const list = document.querySelector(".list");
const list2 = document.querySelector(".list2");
/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch или ajax. Отобразите на странице имена персонажей из 
Рика и Морти в list. 
let block1 = $('.block1');
let list = $('.list');
(Вы можете стилизовать страницу по желанию.)
*/

// const list = document.querySelector('list');

async function rickmorty() {
  const res = await fetch(API1);
  const data = await res.json();
  data.results.forEach((elem) => {
    const listItem = document.createElement("li");
    listItem.classList.toggle("list-item");
    listItem.innerHTML = `
    <img src="${elem.image}" alt="${elem.name}">
    <span>${elem.name}</span>
    `;
    list.append(listItem);
  });
}
rickmorty();
/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/
//!done
/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.*/

async function rickmorty2() {
  const res = await fetch(API);
  const data = await res.json();
  data.forEach((elem) => {
    const listItem = document.createElement("li");
    listItem.classList.toggle("list-item");
    listItem.innerHTML = `
    <img src="${elem.image}" alt="${elem.name}">
    <span>${elem.name}</span>
    `;
    list2.appendChild(listItem);
  });
}
rickmorty2();

/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/
