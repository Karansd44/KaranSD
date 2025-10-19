# 🤖 Chatbot Quick Start

## What You Got

A beautiful, intelligent chatbot for your portfolio that:
- ✅ Looks professional with gradient designs
- ✅ Provides instant answers about you
- ✅ Works in light and dark mode
- ✅ Includes a **Summarize** feature (as requested!)
- ✅ Links to your LinkedIn and GitHub

## How to Use

### Start the Server
```bash
npm run dev
```

Visit: **http://localhost:3000**

### What Visitors See
1. **Floating gradient button** (bottom-right corner) 💬
2. Click to open chat
3. Get instant info about your skills, projects, and more
4. Click "📝 Summarize" for a complete overview

## Quick Customization

### Update Your Info
Edit: `assets/chatbot-data.js`

```javascript
export const personalInfo = {
  name: "Your Name",          // ← Change this
  title: "Your Title",        // ← Change this
  // ... update other fields
};
```

### Change Colors
Edit: `app/components/Chatbot/config.js`

Look for gradient colors like:
- `#3B82F6` (Blue)
- `#8B5CF6` (Purple)

### Modify Responses
Edit: `assets/chatbot-data.js`

Update the `chatbotMessages` object with your custom text.

## Features

| Feature | Description |
|---------|-------------|
| 📝 Summarize | Complete professional overview (NEW!) |
| 💼 Skills | Technical abilities & tools |
| 🏢 Experience | Work history & internships |
| 🎓 Education | Academic background |
| 🚀 Projects | Portfolio showcase with GitHub links |
| 📧 Contact | LinkedIn & social media links |

## Documentation

- **CHATBOT_GUIDE.md** - Complete usage instructions
- **CHATBOT_DESIGN.md** - UI/UX specifications
- **EXAMPLE_CONVERSATIONS.md** - Sample interactions
- **IMPLEMENTATION_SUMMARY.md** - Technical details

## Tech Stack

- React 19
- Next.js 15
- react-chatbot-kit
- Tailwind CSS
- Custom animations

## Browser Support

✅ Chrome, Firefox, Safari, Edge (latest)  
✅ Mobile devices  
✅ Touch-friendly interface

## Need Help?

All chatbot code is in:
- `app/components/Chatbot/` folder
- `assets/chatbot-data.js` for content

---

**Your chatbot is live! 🎉**

Open http://localhost:3000 and click the chat button in the bottom-right corner!
