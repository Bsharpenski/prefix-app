# prefix-app

   0. Install all dependencies!

# run docker container
   1. docker run -e POSTGRES_PASSWORD=docker -d -p 5432:5432 postgres

   2. docker exec -it <PSQL-Container-ID> bash

   3. psql -U postgres

   4. CREATE DATABASE zdb;

   5. \c zdb


# in backend
  6.  knex migrate:latest

   7. knex seed:run

   8. npm start

# in ui
  9.  npm run dev

# My App
    my app is a game store as a visitor on the website you can browse any of the inventory as well as search for any product by name!

    As a manager you can create an account and start making your own inventory or editing it and of course you can go to the all inventory page to see all managers inventory.