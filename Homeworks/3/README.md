### Лабораторна робота 3

1. склонувати [repo_link](https://github.com/mkosir/typeorm-express-typescript)
2. відкрити у webstorm
3. змінити порт постгреса у docker-compose.dev.yml з 5432 на 8432

![1](./screenshots/1.png)

4. Запустити docker:dev в файлі package.json

![2](./screenshots/2.png)

В консолі можна побачити, якщо докер працює

![3](./screenshots/3.png)

Та за допомогою команди docker ps, що докер працює

![4](./screenshots/4.png)

5. Додати бд до data source у webstorm та використовувати 

Беремо логін та пароль з .env файлу

![5](./screenshots/5.png)

Додаємо data source у webstrorm, змінюємо порт на 8432 та пробуємо пієднатися, і як можна побачити - успіх.

![6](./screenshots/6.png)

![7](./screenshots/7.png)

![8](./screenshots/8.png)

Перевіряємо у папці src/orm/seeds що дійсно ці юзери були створені.

![9](./screenshots/9.png)

6. Перевірити запити у postman

Поперше імпортуємо запити з папці репозиторію postman до постмена

![10](./screenshots/10.png)

Пробуємо зробити GET запит для усіх юзерів та отримаємо помилку

![11](./screenshots/11.png)

В environments ставимо set active для нашого boirelplate

![12](./screenshots/12.png)

Знову отримаємо помілку, але вже 404 і дійсно, якщо дивитися в папці src/routes проекту директорія буде localhost:4000/users/v1/

![13](./screenshots/13.png)

Додали в environments путь, та вже бачимо іншу помилку, але вже з авторизацією

![14](./screenshots/14.png)

Переходимо до login та додаємо в путь /auth перед /login, перевіряємо і усе працює

![15](./screenshots/15.png)

![16](./screenshots/16.png)

Тепер у файлі .env змінюємо порт 4000 на 4001 і 5432 на 8432

![17](./screenshots/17.png)

Перевіряємо і усе правцює

Висновок: В цій лабораторній роботі ми навчилися розгортати проект та налаштовувати docker контейнер та навчилися налаштовувати запити у postman.
