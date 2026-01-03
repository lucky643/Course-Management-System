import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
     return (
          <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">

               {/* Navbar */}
               <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur">
                    <Navbar />
               </header>

               {/* Main Content */}
               <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6">
                    <Outlet />
               </main>

               {/* Footer */}
               <footer className="border-t border-gray-800 bg-gray-900">
                    <Footer />
               </footer>

          </div>
     );
};

export default Layout;
