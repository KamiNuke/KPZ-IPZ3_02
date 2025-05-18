# Практично-лабораторне заняття №8
## Тема Неперервна интеграція
## Мета Ознайомитися з принципами і практиками неперервної інтеграції, сформувати навички автоматизації CI/CD процесів в GitHub Actions

### Завдання

1. Пройти цей гайд [Hello GitHub Actions](https://github.com/skills/hello-github-actions?tab=readme-ov-file)

[Посилання на мою копію репозиторія](https://github.com/KamiNuke/skills-hello-github-actions)

Нажав на кнопку почати курс та перенес себе на сторінку створення форку репозитоія
![1](./screenshots/new_repo.png)

Створив новий pull request по гайду з README.md
![skills](./screenshots/skill_actions1.png)

Створив новий файл welcome.yml
```
name: Post welcome comment
on:
  pull_request:
    types: [opened]
permissions:
  pull-requests: write
```

Оновив цей файл
```
name: Post welcome comment
on:
  pull_request:
    types: [opened]
permissions:
  pull-requests: write
jobs:
  build:
    name: Post welcome comment
    runs-on: ubuntu-latest
```

Оновив знову файл на
```
name: Post welcome comment
on:
  pull_request:
    types: [opened]
permissions:
  pull-requests: write
jobs:
  build:
    name: Post welcome comment
    runs-on: ubuntu-latest
    steps:
      - run: gh pr comment $PR_URL --body "Welcome to the repository!"
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          PR_URL: ${{ github.event.pull_request.html_url }}
```

Зробив merge request pull request який створили на початку до main бранча

Створив новий бранч test-workflow

Додав зміни до README.md

Створив pull request та merge into main бранч

Гайд закінчився

[Посилання на мою копію репозиторія](https://github.com/KamiNuke/skills-hello-github-actions)

2. [Publish Package](https://github.com/skills/publish-packages)

[Посилання на мій форк Publish Package](https://github.com/KamiNuke/skills-publish-packages)

Нажав на кнопку почати курс та створив копію репозиторію

Змінити бранч на cd

Створив новий файл в .github/workflows під назвою publish.yml з наступним вмістом:
```
name: Publish to Docker
on:
  push:
    branches:
      - main
permissions:
  packages: write
  contents: read
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      # Add your test steps here if needed...
      - name: Docker meta
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ghcr.io/KamiNuke/publish-packages/game
          tags: type=sha
      - name: Login to GHCR
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.repository_owner }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - name: Build container
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
```

Зробив pull request та створив новий файл Dockerfile з вмістом:
```
FROM nginx:1.24-alpine
COPY . /usr/share/nginx/html
```

Зробив merge request та видалив cd branch

створив новий токен(класичний) з необхідними правами на 7 днів

![token](./screenshots/token.png)

Аунтефіцировав пакет

![docker_login](./screenshots/docker_login.png)

Встановив docker image з репозиторія

![docker_pull](./screenshots/docker_pull.png)

Запустив docker image через термінал docker run -dp 8080:80 --rm image_id

Гайд закінчився на цьому місті...

2. Створити власний GitHub Workflow для збірки докер-образу front-end
репозиторію та завантаження його у GitHub container registry

Створив репозиторій фронтенду [frontend](https://github.com/KamiNuke/kpz-front) та запушив зміни

![com1](./screenshots/firstcommit.png)

![com2](./screenshots/firstcommit1.png)


