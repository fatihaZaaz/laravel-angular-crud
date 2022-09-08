# laravel-angular-logistics-company

Laravel/Angular (Logistics Company)

Backend: Laravel

Frontend: Angular

Data Base: MySql


## Instructions for installation and execution

Clone your project the proyect: git clone https://github.com/trejoscr/laravel-angular-logistics-company.git

### Backend

Go to the folder application, enter to 'backend' folder using cd command on your cmd or terminal

Run **composer install** on your cmd or terminal

Copy .env.example file to .env on the root folder.

Open your .env file and change the database name (DB_DATABASE) to whatever you have, username (DB_USERNAME) and password (DB_PASSWORD) field correspond to your configuration.

Run **php artisan key:generate**

Run **php artisan migrate**

Optional: run **php artisan db:seed**

Run **php artisan serve**

### Frontend

Go to the folder application, enter to 'frontend' folder using cd command on your cmd or terminal

Run **npm install** and **npm update** on your cmd or terminal

Run **ng serve**

Enter in your browser: http://localhost:4200/
