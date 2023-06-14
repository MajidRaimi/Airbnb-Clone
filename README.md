# 🏠 Airbnb Clone with Next.js

This is a clone of Airbnb built using Next.js, a popular React framework for server-side rendering and static site generation. This README file provides an overview of the project and its dependencies.

## ✨ Features

- User authentication and authorization using [NextAuth.js](https://next-auth.js.org/) - A complete authentication solution for Next.js applications.
- Integration with [Prisma ORM](https://www.prisma.io/) for database operations - Prisma is a modern database toolkit that provides an Object-Relational Mapping (ORM) layer for working with databases in a type-safe and efficient way.
- Server-side rendering and static site generation - Next.js provides built-in support for server-side rendering and static site generation, allowing for improved performance and SEO.
- [Leaflet](https://leafletjs.com/) integration - A JavaScript library for interactive maps. It enables the display of maps and provides various features such as markers, overlays, and more.
- [Cloudinary](https://cloudinary.com/) integration - Cloudinary is a cloud-based media management platform that allows you to store, manipulate, optimize, and deliver images and videos for your applications.
- Integration with various React libraries such as:
  - [react-date-range](https://www.npmjs.com/package/react-date-range) - A date range picker component for React.
  - [react-select](https://react-select.com/) - A flexible and customizable select component for React.
  - [react-hook-form](https://react-hook-form.com/) - A library for building forms in React with easy form validation and handling.
  - [react-spinners](https://www.npmjs.com/package/react-spinners) - A collection of loading spinners for React applications.
  - [react-icons](https://react-icons.github.io/react-icons/) - A collection of popular icons as React components.
  - [react-leaflet](https://react-leaflet.js.org/) - A React wrapper for Leaflet, providing components and hooks for building map-based applications.
  - [react-hot-toast](https://react-hot-toast.com/) - A customizable toast library for React.
- [axios](https://axios-http.com/) - A popular promise-based HTTP client for making API requests from the browser or Node.js.
- [bcrypt](https://www.npmjs.com/package/bcrypt) - A library for hashing and salting passwords to securely store user credentials.
- [date-fns](https://date-fns.org/) - A modern JavaScript date utility library for parsing, manipulating, and formatting dates.
- [eslint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting JavaScript code quality issues.
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next) - An ESLint configuration preset specifically for Next.js projects.
- [@types/node](https://www.npmjs.com/package/@types/node) - TypeScript definitions for Node.js.
- [@types/react](https://www.npmjs.com/package/@types/react) - TypeScript definitions for React.
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) - TypeScript definitions for ReactDOM.
- [query-string](https://www.npmjs.com/package/query-string) - A library for parsing and stringifying URL query strings.
- [swr](https://swr.vercel.app/) - A React hooks library for remote data fetching, caching, and synchronization.
- [typescript](https://www.typescriptlang.org/) - A strongly typed superset of JavaScript that compiles to plain JavaScript.
- [world-countries](https://www.npmjs.com/package/world-countries) - A package that provides data about countries, including names, ISO codes, and more.
- [zustand](https://www.npmjs.com/package/zustand) - A small, fast, and scalable state management library for React.

## ⚙️ Prerequisites

Before running the project, ensure you have the following software installed on your machine:

- Node.js (version 14 or higher)
- npm (Node Package Manager) or Yarn

## 🚀 Installation

1. Clone the repository:

```bash
git clone git remote add origin https://github.com/MajidRaimi/Airbnb-Clone
```

2. Navigate to the project directory:

```bash
cd Airbnb-Clone
```

3. Install the project dependencies:

```bash
npm install
```

4. Create a `.env.local` file in the root directory of the project and provide the necessary environment variables:
```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
MONGO_URI=<your-mongodb-uri>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
```

5. Run the development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

## ▶️ Usage

Once the development server is running, you can access the Airbnb clone in your browser at `http://localhost:3000`.

## 🌐 Deployment

To deploy the application to a production environment, follow the deployment instructions for Next.js. This typically involves building the project and deploying the generated files to a hosting provider or a server.

## 🤝 Contributing

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvement, please submit an issue or a pull request.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

