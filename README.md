# Notebook

Notebook is a simple web application designed for personal note-taking. This project allows users to create, edit, and delete notes, as well as track the time spent on various tasks. The project start date is May 18, 2024.

## Features

<ul>
    <li>Create, edit, and delete notes</li>
    <li>User registration and login</li>
    <li>Individual user notes</li>
    <li>Team notes (coming soon)</li>
    <li>Time tracking for various tasks (coming soon)</li>
    <li>Weekly and monthly time statistics (coming soon)</li>
</ul>

## Future Plans

<ul>
    <li>Team Notes: Allow groups of 3-5 people to share the same notes</li>
    <li>Time Tracking: Track the time spent on different tasks</li>
    <li>Weekly and Monthly Statistics: View time spent on specific tasks over a week or month</li>
</ul>

## Installation

To install and run the Notebook project on your local machine, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/RaminTuzelis/notebook.git
    cd notebook
    ```

2. **Install PHP dependencies:**

    ```bash
    composer install
    ```

3. **Install JavaScript dependencies:**

    ```bash
    npm install
    ```

4. **Create a copy of the `.env` file:**

    ```bash
    cp .env.example .env
    ```

5. **Generate the application key:**

    ```bash
    php artisan key:generate
    ```

6. **Set up your database:**

   Update your `.env` file with your database credentials:

    ```plaintext
    DB_CONNECTION=
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=
    DB_USERNAME=
    DB_PASSWORD=
    ```

7. **Run database migrations:**

    ```bash
    php artisan migrate
    ```

8. **Compile the application assets:**

    ```bash
    npm run dev
    ```
      
9. **Run the application:**

    ```bash
    php artisan serve
    ```

## Usage

- Visit `http://localhost:8000` to see the application running.
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
