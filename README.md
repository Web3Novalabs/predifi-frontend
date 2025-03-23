# Predifi Frontend

## Overview

This repository contains the frontend for the Predifi project. Follow the steps below to set up and run the project locally.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com/) (or use npm if preferred)

### Clone the Repository

To get started, clone this repository using Git:

```sh
git clone https://github.com/your-org/predifi-frontend.git
cd predifi-frontend
```

### Install Dependencies

Install the necessary packages using Yarn or npm:

```sh
yarn install
# or
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory and configure the required environment variables.
Example:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_APP_ENV=development
```

### Running the Project

Start the development server:

```sh
yarn dev
# or
npm run dev
```

The app will be available at `http://localhost:3000/`.

### Building for Production

To create an optimized production build:

```sh
yarn build
# or
npm run build
```

To preview the production build:

```sh
yarn start
# or
npm start
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```sh
   git push origin feature-name
   ```
5. Create a pull request for review.

## License

This project is licensed under [MIT License](LICENSE).
