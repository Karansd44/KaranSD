# 🤖 Interactive Chatbot Guide

## Overview
Your portfolio now includes an intelligent chatbot that provides visitors with information about your skills, experience, education, projects, and contact details. The chatbot is designed with a modern UI that adapts to both light and dark modes.

## Features

### 1. **Summarize Option** 📝
- Get a comprehensive overview of your background
- Includes all key information in one response
- Perfect for visitors who want quick insights

### 2. **Skills Query** 💼
- Lists all programming languages (HTML, CSS, JavaScript, Python, C, Java)
- Shows database expertise (MySQL, MongoDB)
- Displays frameworks (React, Next.js)
- Highlights development tools (VS Code, Git)

### 3. **Experience Query** 🏢
- Details about your Full Stack Intern role at EasyByte
- Mentions your 10+ personal projects
- Showcases hands-on development experience

### 4. **Education Query** 🎓
- Current academic status
- Institution details (Cambridge Institute of Technology)
- Degree information (B.Tech in Computer Science, 2022-2026)

### 5. **Projects Query** 🚀
- Lists all major projects with descriptions
- Provides GitHub links
- Includes featured projects like MedMind ASK, Uber Clone, E-Commerce site, etc.

### 6. **Contact Query** 📧
- LinkedIn profile link with interactive button
- Website information
- Social media connections

## UI Features

### Visual Design
- **Gradient Button**: Eye-catching blue-to-purple gradient on the chat toggle button
- **Smooth Animations**: Slide-in animations for messages
- **Rounded Corners**: Modern 16px border radius for a polished look
- **Shadow Effects**: 2xl shadows for depth
- **Responsive Icons**: X icon when chat is open, message icon when closed

### Color Schemes
- **Light Mode**: 
  - Blue and purple gradients
  - White background with light gray inputs
  - High contrast for readability

- **Dark Mode**:
  - Deep blue and purple gradients
  - Dark gray backgrounds (#111827, #1F2937)
  - Adjusted contrast for comfortable viewing

### Interactive Elements
- **Quick Option Buttons**: 
  - Grid layout (2 columns)
  - Emoji icons for visual appeal
  - Hover effects with scale transformation
  - Gradient backgrounds

- **Link Buttons**:
  - LinkedIn button with LinkedIn icon
  - GitHub button with GitHub icon
  - Smooth hover effects
  - External link indicators

### Animations
- Message slide-in from left (bot messages)
- Message slide-in from right (user messages)
- Button scale on hover (1.05x)
- Button scale on click (0.95x)

## How to Use

### For Visitors
1. Click the floating chat button in the bottom-right corner
2. Choose from quick options or type your question
3. Get instant responses about your background
4. Click "Summarize" for a complete overview

### Natural Language Support
The chatbot understands various phrasings:
- "Tell me about yourself" → Summary
- "What skills do you have?" → Skills
- "Where did you study?" → Education
- "Show me your projects" → Projects
- "How can I contact you?" → Contact info

## Customization Guide

### Update Personal Information
Edit `assets/chatbot-data.js`:
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  // ... update other fields
};
```

### Modify Responses
Edit `assets/chatbot-data.js`:
```javascript
export const chatbotMessages = {
  summary: "Your custom summary...",
  skills: "Your custom skills description...",
  // ... update other responses
};
```

### Change Colors
Edit `app/globals.css`:
- Modify gradient colors in `.react-chatbot-kit-chat-header`
- Update button gradients in config.js
- Adjust dark mode colors in `.dark` selectors

### Add New Queries
1. Add new message in `chatbot-data.js`
2. Create handler in `ActionProvider.js`
3. Add parsing logic in `MessageParser.js`
4. Optionally add quick button in `config.js`

## Technical Details

### Components
- **Chatbot.jsx**: Main chatbot wrapper with toggle functionality
- **config.js**: Configuration, widgets, and styling
- **ActionProvider.js**: Handles all chatbot responses
- **MessageParser.js**: Parses user input and determines intent

### Dependencies
- `react-chatbot-kit`: Core chatbot functionality
- `next/dynamic`: Dynamic import for SSR handling
- Custom CSS: Enhanced styling in globals.css

### Performance
- Dynamically loaded (SSR disabled)
- Lightweight and fast
- No external API calls
- All data stored locally

## Browser Compatibility
✅ Chrome, Firefox, Safari, Edge (latest versions)
✅ Mobile responsive
✅ Touch-friendly interface

## Troubleshooting

### Chatbot doesn't appear
- Check browser console for errors
- Verify all chatbot files are present
- Ensure Next.js server is running

### Styling issues
- Clear browser cache
- Check if dark mode toggle is working
- Verify Tailwind CSS is loading

### Messages not working
- Check MessageParser.js for keyword matching
- Verify ActionProvider.js handlers are defined
- Ensure chatbot-data.js is properly imported

## Future Enhancements
- [ ] Add typing indicator
- [ ] Include project images in responses
- [ ] Add download resume option
- [ ] Integrate with email service
- [ ] Add language selection
- [ ] Include testimonials section

---

**Need help?** The chatbot code is well-documented and easy to modify. Start with `chatbot-data.js` for content changes!
