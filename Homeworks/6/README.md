# Практично-лабораторне заняття №6
## Тема Розробка UI для реалізації CRUD-операцій
## Мета Створити користувацький інтерфейс для взаємодії з реалізованим RESTful API, що надає можливість перегляду, створення, редагування та видалення екземплярів певної сутності. Розробка ведеться на базі React з використанням TanStack Router для реалізації маршрутизації.

### Завдання
Використовуючи boilerplate-проєкт vite-react-boilerplate, для сутності Post, яка була створена в роботі “Реалізація нової сутності, створення CRUD-операцій та відповідного RESTful API”, необхідно:

1.	Сторінка колекції екземплярів сутності (/posts)
-	Реалізувати рендеринг списку всіх доступних екземплярів сутності.
-	Для кожного елемента відображати основну інформацію (ключові поля).
-	Передбачити можливість переходу на сторінку конкретного екземпляра (/posts/:id).
-	Додати кнопку "Створити новий екземпляр", яка веде на маршрут /posts/new.
-	Реалізувати можливість видалення елемента з колекції (з підтвердженням дії).

2.	Сторінка окремого екземпляра сутності (/posts/:id або /posts/new)
-	У режимі перегляду (/posts/:id) реалізувати:
-	відображення повної інформації про екземпляр;
-	можливість редагування (форма з полями);
-	кнопку для збереження змін (Update).
-	У режимі створення (/posts/new) реалізувати:
-	форму з порожніми полями для введення нових даних;
-	кнопку для збереження нового екземпляра (Create).


Спочатку перевірю чи працює проект
![1](./screenshots/1.png)

![2](./screenshots/2.png)

![3](./screenshots/3.png)

Усе працює, можна приступати к роботі

Реалізація кратко:
Розроблена сторінка колекції постів зі сторінкой окремого поста та функціональностю редактування та створення нового поста і усе це з використанням мок-сервіса для емуляціїї API запитів, await delay в майбутньому будуть замінені на Http запити, тому і використовуються для емуляції запитів щоб показати на екрані загрузку

types/Post.ts
![types](./screenshots/types.png)

Zustand-стор для управління станом постів
store/posts/index.ts
![store1](./screenshots/store1.png)

![store2](./screenshots/store2.png)

Сервіс для роботи з API з локальним сховищем та симуляції мереживих запитів
services/posts.service.ts
![service1](./screenshots/service1.png)

![service2](./screenshots/service2.png)

Маршрути поста
routes/posts/$id.ts
![routes1](./screenshots/routes1.png)

routes/posts/index.ts
![routes2](./screenshots/routes2.png)

routes/posts/new.ts
![routes3](./screenshots/routes3.png)

React компонент для відображеня списску постів
pages/Posts.tsx
![pagesPost1](./screenshots/pagesPost1.png)

![pagesPost2](./screenshots/pagesPost2.png)

React компонент для перегляду редагування поста
pages/PostsContent.tsx
![pagesContent1](./screenshots/pagesContent1.png)

![pagesContent2](./screenshots/pagesContent2.png)

![pagesContent3](./screenshots/pagesContent3.png)

![pagesContent4](./screenshots/pagesContent4.png)

![pagesContent5](./screenshots/pagesContent5.png)

React компонент для створення нового поста
pages/PostsNew.tsx
![pagesNew1](./screenshots/pagesNew1.png)

![pagesNew2](./screenshots/pagesNew2.png)

![pagesNew3](./screenshots/pagesNew3.png)

UI компоненти 
components/ui/Modal/index.ts
![modalIndex](./screenshots/modalIndex.png)

components/ui/Modal/Modal.tsx
![modal](./screenshots/modal.png)

components/ui/PostsCard/index.ts
![cardIndex](./screenshots/cardIndex.png)

components/ui/PostsCard/PostsCard.tsx
![postcard](./screenshots/postcard.png)

Результати роботи:
![res1](./screenshots/res1.png)

![res2](./screenshots/res2.png)

![res3](./screenshots/res3.png)

![res4](./screenshots/res4.png)

![res5](./screenshots/res5.png)

![res6](./screenshots/res6.png)

![res7](./screenshots/res7.png)

![res8](./screenshots/res8.png)

![res9](./screenshots/res9.png)

Висновок
Під час роботи навчився створювати інтерфейс для роботи з CRUD-операціями використовуючи Rest API та тайпскріпт у проекті vite-react-boilerplate, усі компоненти реалізовані зі стейстами завантеження і обробками помилок. Реалізована валідація обов'язкових полів форми та використання модального вікна для підтвердження видалення поста, яке забезпечує додатковий рівень безпеки для користувачів. Реалізован мок-сервіс який потім можна замінити на реальні API-запити без необхідності зміни логіки компонентів.
