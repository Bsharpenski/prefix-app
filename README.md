# prefix-app

# run docker container
    docker run -e POSTGRES_PASSWORD=docker -d -p 5432:5432 postgres

    docker exec -it <PSQL-Container-ID> bash

    psql -U postgres

    CREATE DATABASE zdb;

    \c zdb


# in backend
    knex migrate:latest

    knex seed:run

    npm start

# in ui
    npm run dev