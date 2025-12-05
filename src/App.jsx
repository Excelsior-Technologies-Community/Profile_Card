import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  const user = {
    name: "John Doe",
    title: "Frontend Developer",
    email: "john.doe@example.com",
    phone: "+1234567890",
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "GitHub", url: "https://github.com" },
      { platform: "Twitter", url: "https://twitter.com" },
    ],
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Product Card</h1>
        <p>Check out this user profile</p>
      </header>
      <ProfileCard {...user} />
    </div>
  );
}

export default App;
