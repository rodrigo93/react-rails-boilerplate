# Rails with Rspec + React with Typescript and Jest boilerplate

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

Everything is configured to run with Docker and Docker Compose.

# Setup

All you need to do is build the images and run the containers.

Build images:
```shell
cd backend
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
cd backend
docker compose up
```