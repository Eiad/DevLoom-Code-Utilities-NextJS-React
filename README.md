# DevLoom - The All-in-One Code Formatter, Converter and Previewer

DevLoom is your hub for multi-language code formatting, conversion, and previewing. Perfect and convert code from HTML, CSS, JavaScript, JSON, YAML, and more. Elevate your coding experience with our powerful yet simple tool.

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

The formatter components are:

- `HTMLFormatter.js` - Formats HTML code
- `CSSFormatter.js` - Formats CSS code
- `JSFormatter.js` - Formats JavaScript code
- `JSONFormatter.js` - Formats JSON code
- `LESSFormatter.js` - Formats LESS code
- `XMLFormatter.js` - Formats XML code
- `TypeScriptFormatter.js` - Formats TypeScript code
- `GraphQLFormatter.js` - Formats GraphQL code

  > These components use the `prettier` library to format the code. They take in user input, call the appropriate `prettier` formatting function based on the code type, and display the formatted output. The `FormatterContent.js` component is a reusable component that contains the input, output, and copy functionality shared between the formatters.

## Converter Components

DevLoom also introduces code conversion components:

- `HTMLJSXConverter.js` - Converts HTML code to JSX.
- `JSONYAMLConverter.js` - Transforms JSON data to YAML.
- `YAMLJSONConverter.js` - Converts YAML data back to JSON.
- `Base64Encoder.js` - Encodes text to Base64
- `HTMLEntityEncoder.js` - Encodes text to HTML entities
  These modules facilitate seamless code conversion, enriching the DevLoom experience.

## Previewer Components

- `HTMLPreviewer.js` - Provides live previews of HTML code.
- `MARKDOWNPreviewer.js` - Provides live previews of Markdown content.

## Pages

The main pages are:

- `/` - Home page which is an ALL Formatters page with tabs selection
- `/HTMLFormatterPage` - HTML formatter page
- `/CSSFormatterPage` - CSS formatter page
- `/JSFormatterPage` - JS formatter page
- `/JSONFormatterPage` - JSON formatter page
- `/LESSFormatterPage` - LESS formatter page
- `/XMLFormatterPage` - XML formatter page
- `/TypeScriptFormatterPage` - TypeScript formatter page
- `/GraphQLFormatterPage` - GraphQL formatter page
- `/HTMLJSXConverterPage` - HTML to JSX converter page
- `/JSONYAMLConverterPage` - JSON to YAML converter page
- `/YAMLJSONConverterPage` - YAML to JSON converter page
- `/Base64EncoderPage` - Base64 Encoder page
- `/HTMLEntityEncoderPage` - HTML Entity Encoder page
- `/HTMLPreviewer` - HTML previewer page
- `/MARKDOWNPreviewer` - Markdown previewer page
  These pages render the appropriate formatter, converter, or previewer component based on the route.

## Assumptions

- Node.js and npm are installed
- Familiarity with Next.js, React, and Electron

## Developed by [Ash](https://i-ash.com)
