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

- `/` - Home page which is an ALL Formatters page with tabs selection
- `/HTMLFormatterPage` - HTML formatter page
- `/CSSFormatterPage` - CSS formatter page
- `/JSFormatterPage` - JS formatter page
- `/HTMLJSXConverterPage` - JSON formatter page
- `/JSONFormatterPage` - JSON formatter page
- `/JSONYAMLConverterPage` - JSON to YAML converter page
- `/YAMLJSONConverterPage` - YAML to JSON converter page

These pages render the appropriate formatter component based on the route.

# Devloom Activation and Logout Features

## Overview

The Devloom app incorporates an activation mechanism that allows users to input an activation code, which when validated, activates a device. Once activated, users can also logout, deactivating the device in the process.

## Features

### 1. Activation

- **Purpose:** To validate and activate a device using a unique activation code.
- **Implementation:** The activation feature is implemented in `Activation.js`. The activation mechanism uses Firebase Firestore to validate the activation code entered by the user.

**Flow:**

1. User enters the activation code in the input field.
2. On submission, the app queries the Firestore database to validate the provided activation code.
3. If the activation code is valid and not already used, the device gets activated. An activation message is displayed, and the activation code and activation status are stored in the local storage.
4. If the code is invalid or already used, an error message is shown.

### 2. Logout

- **Purpose:** To deactivate an already activated device and log the user out.
- **Implementation:** The logout feature is implemented in `DevloomLogout.js`. When the user clicks the logout button, the app checks the device's activation status and, if activated, deactivates it.

**Flow:**

1. On clicking the logout button, the app checks if the device is activated.
2. If the device is not activated, a message indicating the same is shown.
3. If activated, the app fetches the activation code from local storage.
4. The app then queries the Firestore database using the fetched activation code.
5. If the code matches a document in the database, the `isActivated` field of that document is set to false, effectively deactivating the device.
6. The activation status in local storage is removed, and the app displays a successful logout message.

## Dependencies

- Firebase Firestore: For storing and validating activation codes.
- React and useState: For managing component states.
- ActivationContext: A React context that provides the `isActivated` state to various components in the app.

## Future Enhancements

- Implementing a more secure mechanism for possibly using encrypted tokens.
- Adding a mechanism to prevent multiple activations using the same code across different devices simultaneously.
- Incorporating session management to auto-logout users after a specified period of inactivity.
- Enhancing the user interface with intuitive notifications and prompts, guiding users through the activation and logout processes.
- Implementing multi-factor authentication for an added layer of security during the activation process.
- Periodic checks to ensure the device's activation status aligns with the server-side status, ensuring synchronization.
- Expanding the activation feature to support different levels or types of activations, such as temporary, guest, or premium access.

## Known Issues

- There was an issue with case sensitivity in storing the `Codekey` in local storage, which has been resolved.

## Conclusions

The activation and logout features of the Devloom app offer a foundational layer of security, ensuring that only authenticated devices have access. The implementation leverages Firebase Firestore for validation and React for a dynamic user experience. As with any application, continuous enhancements and refinements are essential for maintaining robustness and user satisfaction.

## Assumptions

- Node.js and npm are installed
- Familiarity with Next.js, React, and Electron
