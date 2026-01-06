import React from "react";

const Footer = () => {
     return (
          <footer className="bg-slate-900 text-gray-300 mt-20">
               <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand */}
                    <div>
                         <h2 className="text-xl font-bold text-white tracking-wide">
                              InstantConnect
                         </h2>
                         <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                              A modern platform built to connect people instantly with speed,
                              security, and simplicity.
                         </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                         <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                         <ul className="space-y-2 text-sm">
                              <li className="hover:text-indigo-400 transition">Home</li>
                              <li className="hover:text-indigo-400 transition">About</li>
                              <li className="hover:text-indigo-400 transition">Features</li>
                              <li className="hover:text-indigo-400 transition">Contact</li>
                         </ul>
                    </div>

                    {/* Contact */}
                    <div>
                         <h3 className="text-white font-semibold mb-3">Contact</h3>
                         <ul className="space-y-2 text-sm">
                              <li>Email: support@instantconnect.com</li>
                              <li>Phone: +91 98765 43210</li>
                              <li>India</li>
                         </ul>
                    </div>
               </div>

               {/* Bottom bar */}
               <div className="border-t border-slate-800 py-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} InstantConnect. All rights reserved.
               </div>
          </footer>
     );
};

export default Footer;
