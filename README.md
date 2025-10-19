# KaranSD Portfolio with Interactive Chatbot

This is a personal portfolio website built with [Next.js](https://nextjs.org) that includes an interactive chatbot feature to provide information about my skills, experience, projects, and more.

## Features

- **Responsive Portfolio Website**: Showcasing projects, skills, and experience
- **Dark/Light Mode**: Toggle between dark and light themes
- **Interactive Chatbot**: AI assistant that answers questions about my background, skills, and projects based on LinkedIn and website information
- **Contact Form**: Easy way for visitors to get in touch
- **Project Showcase**: Visual display of completed projects with links

## Chatbot Functionality

The chatbot can provide information about:
- My technical skills and programming languages
- Educational background
- Work experience
- Projects I've built
- How to contact me
- Links to my LinkedIn profile and other social media

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
# or
# Use the convenience script
start.bat
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation
- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **react-chatbot-kit**: For building the interactive chatbot feature

## Customizing the Chatbot

The chatbot is configured to provide information about my background, skills, and experience. You can customize the chatbot by updating the following files:

- `assets/chatbot-data.js`: Contains personal information and chatbot responses
- `app/components/Chatbot/config.js`: Chatbot configuration and styling
- `app/components/Chatbot/ActionProvider.js`: Handles chatbot actions and responses
- `app/components/Chatbot/MessageParser.js`: Parses user messages to determine intent

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
