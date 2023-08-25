# Rails 7 with Rspec and React with Typescript and Jest boilerplate

This is a boilerplate for a Rails API with Rspec and React with Typescript and Jest.

The Rails API is configured to use the following:
- Ruby v3
- PostgreSQL
- Rspec
- Factory Bot
- Rubocop
- Bullet
- Bundler Audit

The React app is configured to use the following:
- Typescript
- Jest
- ESLint

**Bonus: The project also includes gitflows. It has separate flows for `backend` and `frontend` that checks
tests, lints, and vulnerabilities**

Everything is configured to run with Docker and Docker Compose.

## Setup 🛠️

> **Before running any command, make sure to look for `TODO` comments and replace the values with your own.**
> **Otherwise, the app will be created with the default values such as `react-rails-boilerplate`.**

All you need to do is build the images and run the containers.

Build images:
```shell
docker compose build
```

Create databases:
```shell
cd backend
docker compose run --rm backend bin/rails db:create
docker compose run --rm backend bin/rails db:migrate
docker compose run --rm backend bin/rails db:seed
```

Run containers:
```shell
docker compose up
```

## Accessing the app 🌎

The Rails API will be running on `localhost:3000` and the React app will be running on `localhost:3001`.

- Rails API: http://localhost:3000
- React app: http://localhost:3001

## Disclaimer ⚠️

I started this repo to apply and refresh my knowledge of Docker, Docker Compose, Github Workflows, React, and Rails.

Feel free to use this at your own risk.

## Feeling generous? ☕️

<a href="https://www.buymeacoffee.com/rodrigomar6" target="_blank">
  <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png"
    alt="Buy Me A Coffee"
    style="height: 40px !important;width: 180px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" >
</a>
