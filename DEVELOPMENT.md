Here is the content as a single `DEVELOPMENT.md` file:

# 🛠️ DEVELOPMENT GUIDE

## Description

This project is an ecommerce platform built with **Next.js 14** and **PostgreSQL** as the primary database. It is designed to serve as a highly performant, scalable, and modern web application, utilizing cutting-edge technologies such as **NextUI** for UI components and **Drizzle ORM** for efficient database interaction.

The main goal of this ecommerce platform is to provide an optimal user experience with lightning-fast performance and fully **SEO-friendly** architecture. Every aspect of the site has been developed to meet the latest web standards, making it easy to crawl and index by search engines, thus boosting search rankings and visibility.

In addition to performance and SEO, the platform is also built with a strong focus on compliance with **GDPR (General Data Protection Regulation)**, ensuring that user data is handled securely and transparently. By minimizing unnecessary cookies and integrating proper consent management practices, the platform meets European regulations for privacy.

This guide will walk you through the steps needed to set up the development environment, initialize the database, and run the application. Additionally, you'll find links to key documentation to help you navigate and customize the project as needed.

## 🗒️ Index

- [Initialization](#initialization)
- [Running the Project](#running-the-project)
  - [Without Docker](#without-docker)
  - [With Docker](#with-docker-optional)
- [Useful Documentation](#useful-documentation)

## 🔨 Initialization

To set up the development environment, follow these steps:

1. Setup environment variables:
   Create a `.env` file with the contents of the `example.env` file.

   ```bash
   cp example.env .env
   ```

   Then, fill required configurations of the `.env` file.

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Run the database migrations:

   ```bash
   npm run db:migrate
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### 🐳 With Docker (Optional)

If you prefer to use Docker, you can initialize and run the application with Docker Compose:

1. Build and start the containers:

   ```bash
   docker-compose up --build
   ```

The app should now be running at `http://localhost:3000`.

## 📚 Useful Documentation

Here are some links to the key technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [NextUI Documentation](https://nextui.org/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
