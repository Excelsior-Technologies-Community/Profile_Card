# Profile Card

A modern, responsive React component for displaying user profile cards with contact information and social media links. Built with React 19 and Vite for optimal performance and developer experience.

## 🚀 Features

- **Responsive Design**: Adapts seamlessly to different screen sizes
- **Contact Integration**: Clickable email and phone links
- **Social Media Links**: Easy integration with multiple social platforms
- **Customizable**: Flexible props for personalization
- **Modern UI**: Clean, professional design with SVG icons
- **Fast Refresh**: Hot module replacement during development

## 🛠️ Tech Stack

- **React** 19.2.0 - Modern JavaScript library for building user interfaces
- **Vite** 7.2.4 - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **CSS Modules** - Scoped styling for components

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd profile-card
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📖 Usage

### Basic Usage

```jsx
import React from 'react';
import ProfileCard from './components/ProfileCard';

function App() {
  const user = {
    name: "John Doe",
    title: "Frontend Developer",
    email: "john.doe@example.com",
    phone: "+1234567890",
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
      { platform: "GitHub", url: "https://github.com/johndoe" },
      { platform: "Twitter", url: "https://twitter.com/johndoe" },
    ],
  };

  return (
    <div className="App">
      <ProfileCard {...user} />
    </div>
  );
}

export default App;
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | Yes | User's full name |
| `title` | string | Yes | User's job title or role |
| `email` | string | Yes | User's email address |
| `phone` | string | Yes | User's phone number |
| `socialLinks` | array | Yes | Array of social media objects |

#### Social Links Object Structure

```javascript
{
  platform: "LinkedIn", // Display name for the link
  url: "https://linkedin.com/in/username" // Full URL to the profile
}
```

## 🏗️ Project Structure

```
profile-card/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── ProfileCard.jsx
│   │   └── ProfileCard.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

The component uses CSS modules for styling. You can customize the appearance by modifying `ProfileCard.css`:

- Change colors, fonts, and spacing
- Adjust layout and responsiveness
- Add animations or transitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and not licensed for public use.

## 🙋 Support

For questions or support, please contact the development team.
