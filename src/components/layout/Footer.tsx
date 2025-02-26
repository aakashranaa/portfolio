import { Link } from "react-router-dom";

// src/components/layout/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} - Designed and built with ❤️</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;