# Laravel + Vue Project

## Setup Instructions

### Prerequisites

- PHP >= 8.0
- Composer
- Node.js & NPM
- MySQL or any other supported database

### Installation

1. **Clone the repository**:
    ```bash
    git clone

2. **Install Composer dependencies**:
    ```bash
    composer install
    ```

3. **Set up environment variables**:
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

4. **Configure your database**: Update the `.env` file with your database credentials.
    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=notebook
    DB_USERNAME=your_database_user
    DB_PASSWOR=your_database_password
    ```

5. **Run database migrations**:
    ```bash
    php artisan migrate
    ```

6. **Install NPM dependencies**:
    ```bash
    npm install
    ```

7. **Compile assets**:
    ```bash
    npm run dev
    ```

8. **Run the development server**:
    ```bash
    php artisan serve
    ```
