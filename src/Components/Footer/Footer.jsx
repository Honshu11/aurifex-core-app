import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4">
      <div className="container mx-auto px-2">
        <div className="flex flex-wrap items-center justify-between">
          <p className="text-sm">© 2023 Aurifex Labs. All rights reserved.</p>
          <div className="flex items-center text-sm">
            <a href="#" className="text-gray-300 hover:text-gray-400 px-3 py-2">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-400 px-3 py-2">
              Contact
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-400 px-3 py-2">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
