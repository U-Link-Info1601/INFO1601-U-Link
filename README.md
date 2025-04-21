# U-Link Social Media Platform

U-Link is a social media application built for nature enthusiasts and university students, designed to connect people with shared interests in sustainability and environmental awareness. The project uses Firebase for hosting, authentication, and database management.

## Overview

U-Link features a Twitter-like interface where users can browse tweets, create posts, and interact with other users. The platform aims to foster community engagement around environmental conservation and sustainable practices.

## Technologies Used

- HTML, CSS, JavaScript
- Firebase (Authentication, Hosting, Firestore)
- Twitter API integration (via twitter-api-v2)

## Project Structure

- `/public` - Contains all frontend assets and code
  - HTML files (index.html, login.html, register.html)
  - CSS styles (home.css, style.css, twitter-components.css)
  - JavaScript modules (auth.js, data.js, sampleTweets.js)
  - Images and media assets
- `/functions` - Contains Firebase Cloud Functions (getTweets, postTweet)

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- Firebase CLI installed
- A Firebase project created at [Firebase Console](https://console.firebase.google.com)

### Installation

1. Clone this repository to your local machine
   ```bash
   git clone <repository-url>
   cd u-link
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Login to Firebase (if not already logged in)
   ```bash
   npm run login
   # or directly:
   firebase login
   ```

4. Initialize Firebase with your project (if not already configured)
   ```bash
   firebase init
   ```

5. Start the local development server
   ```bash
   npm start
   # or directly:
   firebase serve
   ```

### Configuration

- Firebase configuration is stored in `public/firebaseConfig.js`
- Twitter API keys are needed for the Twitter integration to work properly

## Features

### Authentication
- User registration with email and password
- Login/logout functionality
- Special "Bob" account for demonstration purposes

### Home Feed
- View tweets from followed Twitter accounts
- Create and publish your own posts with text and images
- Interact with posts (like, comment, etc.)

### Twitter Integration
- Display tweets from specified Twitter accounts
- Real-time updates
- Interactive engagement with tweets

## Project Commands

The following npm scripts are available:

- `npm run login` - Login to Firebase
- `npm start` - Start the local development server
- `firebase deploy` - Deploy the application to Firebase Hosting

## Directory Structure

```
├── firebase.json          # Firebase configuration
├── firestore.rules        # Firestore security rules
├── firestore.indexes.json # Firestore indexes configuration
├── package.json           # Project dependencies and scripts
├── public/                # Web assets
│   ├── index.html         # Main application HTML
│   ├── login.html         # Login page
│   ├── register.html      # Registration page
│   ├── auth.js            # Authentication logic
│   ├── data.js            # Data manipulation and Twitter integration
│   ├── sampleTweets.js    # Mock Twitter data
│   ├── home.css           # Main application styles
│   ├── style.css          # Login/Register page styles
│   ├── twitter-components.css # Twitter integration styles
│   ├── images/            # Image assets
└── functions/             # Firebase Cloud Functions
```

## Creating Cloud Functions

This project uses Firebase Cloud Functions for Twitter API integration. If you're setting up the project for the first time:

1. Create a Firebase functions directory:
   ```bash
   mkdir -p functions
   cd functions
   ```

2. Initialize functions:
   ```bash
   firebase init functions
   ```

3. Implement the functions for Twitter integration as described in the database.

## Troubleshooting

- If Firebase functions aren't loading, ensure that the `functions` directory exists and is properly initialized
- Check the Firebase debug logs for detailed error information
- Make sure all required environment variables are set for Twitter API access

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License - see the LICENSE file for details.
