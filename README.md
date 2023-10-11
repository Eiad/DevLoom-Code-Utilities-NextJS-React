# DevLoom - Code Formatter

DevLoom is a code formatter app built with [Next.js](nextjs.org) and [Electron](https://electronjs.org/). It allows you to format HTML, CSS, JavaScript, and JSON code.

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

## Pages

The main pages are:

- `/` - Home page with buttons to select a formatter
- `/html-formatter` - HTML formatter page
- `/css-formatter` - CSS formatter page
- `/js-formatter` - JS formatter page
- `/json-formatter` - JSON formatter page

These pages render the appropriate formatter component based on the route.

## Assumptions

- Node.js and npm are installed
- Familiarity with Next.js, React, and Electron

Let me know if you have any other questions!
