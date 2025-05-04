import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// This is a replit script which adds a banner on the top of the page when 
// opened in development mode outside the replit environment
document.addEventListener('DOMContentLoaded', () => {
  const script = document.createElement('script');
  script.src = 'https://replit.com/public/js/replit-dev-banner.js';
  script.type = 'text/javascript';
  document.body.appendChild(script);
});

createRoot(document.getElementById("root")!).render(<App />);
