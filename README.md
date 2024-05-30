# Notebook

Notebook is a simple web application designed for personal note-taking. This project allows users to create, edit, and delete notes, as well as track the time spent on various tasks. The project start date is May 18, 2024.

## Installation

To install and run the Notebook project on your local machine, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/RaminTuzelis/notebook.git
    cd notebook
    ```

# Run back-end steps:

1. **Clone Laradock inside your PHP project:**

    ```bash
    git clone https://github.com/Laradock/laradock.git
    ```

1. **Enter the laradock folder and rename `.env.example` to `.env`**

    ```bash
    cp laradock/.env.example laradock/.env
    ```

2. **Update the Laradock `.env` file:**

    ```plaintext
    APP_CODE_PATH_CONTAINER=/var/www/public
    MYSQL_VERSION=5.7
    ```

3. **Update the Laradock `ngnix/sites/` folder:**
    
    ```plaintext
    rename laravel.conf.example to laravel.conf
    ```
    `server_name notebook.local;
    root /var/www/public/public;`

4. **Update the Laravel `.env` file:**
    ```plaintext
    APP_URL=http://notebook.local
    DB_CONNECTION=mysql
    DB_HOST=mysql
    ```

5. **Run the containers:**

    ```bash
    make up-build
    ```
6. **Run migrations:**

    ```bash
    make up-build
    ```
   
6. **Generate the application key:**

    ```bash
    php artisan key:generate
    ```
## Usage

- Visit `http://notebook.local` to see the application running.
- Register or log in with an existing account.
- Start creating, editing, and deleting notes.

# Run front-end steps:

**Run front-end:**

    ```bash
    cd nfe/
    npm run dev
    ```

#### Visit `http://localhost:3000/` to see the front-end application running

## Contributors

<ul>
    <li>RaminTuzelis</li>
    <li>Aurimas12</li>
    <li>Jurij Takun</li>
</ul>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
