# DevLoom - Code Formatter and Converter

DevLoom is a comprehensive tool built with Next.js and Electron. It provides functionalities to format HTML, CSS, JavaScript, and JSON code, as well as conversion tools for a number of code types.

## See it in action at [devloom.net](https://devloom.net)

## Getting Started

First, install dependencies:
npm install
Then, run the development server:
npm run dev
This will start Next.js in development mode. Open http://localhost:3000 to view it in the browser.

You can also run the Electron app in development mode with:
npm run electron-dev
This will start the React app and Electron simultaneously. The React app will run on http://localhost:3000 and the Electron app will load that URL.

## Building and Packaging for Production

To build the Next.js app for production, run:
npm run build
Then, to package the app for the platforms you want to distribute to (Windows, Mac, Linux), run:
npm run electron-pack
This will generate installers for your app in the `release` folder.

## Project Structure

- `/src` - Contains the Next.js app source code
- `/pages` - Routes in the app mapped to pages
- `/components` - Reusable components
- `/app` - Global styles and layout
- `/electron` - Electron main process file
- `/public` - Static files for the Next.js app
- `next.config.js` - Next.js configuration
- `package.json` - Node dependencies and scripts
- `jsconfig.json` - JavaScript configuration

## Formatter Components

The main formatter components are:

- `HTMLFormatter.js` - Formats HTML code
- `CSSFormatter.js` - Formats CSS code
- `JSFormatter.js` - Formats JavaScript code
- `JSONFormatter.js` - Formats JSON code

These components use the `prettier` library to format the code. They take in user input, call the appropriate `prettier` formatting function based on the code type, and display the formatted output.

The `FormatterContent.js` component is a reusable component that contains the input, output, and copy functionality shared between the formatters.

## Converter Components

DevLoom also introduces code conversion components:

- `HTMLJSXConverter.js` - Converts HTML code to JSX.
- `JSONYAMLConverter.js` - Transforms JSON data to YAML.
- `YAMLJSONConverter.js` - Converts YAML data back to JSON.

These modules facilitate seamless code conversion, enriching the DevLoom experience.

## Pages

The main pages are:

- `/` - Home page with buttons to select a formatter
- `/HTMLFormatterPage` - HTML formatter page
- `/CSSFormatterPage` - CSS formatter page
- `/JSFormatterPage` - JS formatter page
- `/HTMLJSXConverterPage` - JSON formatter page
- `/JSONFormatterPage` - JSON formatter page
- `/JSONYAMLConverterPage` - JSON to YAML converter page
- `/YAMLJSONConverterPage` - YAML to JSON converter page

These pages render the appropriate formatter component based on the route.

## Assumptions

- Node.js and npm are installed
- Familiarity with Next.js, React, and Electron

Let me know if you have any other questions!
