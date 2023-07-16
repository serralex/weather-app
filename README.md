# Your Weather App

This is a weather app that displays the weather information for the user's location by default. It also allows users to search for cities and retrieve weather information. Additionally, the app provides a list of the user's current searches


https://github.com/serralex/weather-app/assets/19570597/1a71c454-50f5-45a6-9360-6b71fc426581


## Features

- By default, the app will display the weather of the city you are located in. The user's location is retrieved from cookies. If the user's location is not found in the cookies, the app will retrieve the location from the browser and store it in the cookies for future use.

- The app allows searching for custom cities.

- The app shows you a list of your recent searches.

## Tech Stack

The project uses the following technologies:

- [React](https://reactjs.org/) React
- [Typescript](https://www.typescriptlang.org) Typescript
- [Tailwind CSS](https://tailwindcss.com) Tailwind CSS
- [Material UI](https://material-ui.com) Material UI

## API Libraries

The project relies on the following API libraries:

- [Mapbox](https://www.mapbox.com/) - Used for retrieving cities.
- [Weatherapi](https://www.weatherapi.com/) - Used for fetching weather data.

## Getting Started

To run the project locally, please follow these steps:

1. Ensure that you have populated the necessary environment file fields. Create a `.env` file in the project root directory and provide the required values. Refer to the `.env.example` file for the required environment variables.

2. Install the project dependencies by running the following command:

### `npm install`

3. Start the development server by running the following command:

### `npm run start`

This will launch the app and make it accessible at `http://localhost:3000` in your browser.

## Running Tests

To run tests for the project, use the following command:

### `npm run test`
