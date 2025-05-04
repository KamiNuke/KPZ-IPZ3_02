Лаболаторна робота 1

1. Типізація змінних
1.1	Оголосіть змінні наступних типів: string, number, boolean, array, object.
![1](./screenshots/1_1.png)
![1_1](./screenshots/1_1_1.png)

1.2	Створіть функцію, яка приймає як аргумент об'єкт із полями name (тип string) та age (тип number) і повертає рядок виду: "Name: John, Age: 30".
![1_2](./screenshots/1_2.png)
![1_2_1](./screenshots/1_2_1.png)
![1_2_2](./screenshots/1_2_2.png)

2. Інтерфейси
2.1	Оголосіть інтерфейс Person, який містить поля:
a.	name: string
b.	age: number
c.	address?: string (опціональне поле)
![2_1](./screenshots/2_1.png)

2.2	Реалізуйте функцію printPerson, яка приймає об'єкт типу Person та виводить його дані у консоль.
![2_2](./screenshots/2_2.png)
![2_2_1](./screenshots/2_2_1.png)
![2_2_2](./screenshots/2_2_2.png)


3. Композитні типи
3.1.	Оголосіть об'єднаний тип (union type)
type Status = 'success' | 'error' | 'loading';
3.2.	Реалізуйте конструкцію (наприклад, функцію або умову), яка виводить повідомлення відповідно до значення Status.
![3_1](./screenshots/3_1.png)
![3_2](./screenshots/3_2.png)

4. Дженерики
4.1.	Реалізуйте функцію identity<T>(value: T): T, яка повертає передане їй значення.
4.2.	Використайте її для типів number, string та boolean.
![4_1](./screenshots/4_1.png)
![4_2](./screenshots/4_2.png)

5. Класи
5.1.	Реалізуйте клас Car, який містить поля:
a.	model: string
b.	year: number
5.2.	Додайте метод getCarInfo(), який повертає рядок виду: "Model: Toyota, Year: 2020".
![5_1](./screenshots/5_1.png)
![5_2](./screenshots/5_2.png)

