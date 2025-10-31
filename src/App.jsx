import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"; 
import Footer from "./components/Footer.jsx"; 
import Home from "./pages/home.jsx";
import ReportIssue from "./pages/reportissue.jsx";
import ViewIssues from "./pages/ViewIssues.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Search from "./pages/search.jsx"; 
//  CSS IMPORT
import './App.css'; 

const NotFound = () => (
  <div className="text-center mt-20">
    <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
    <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      {/* Ensures full-height layout with fixed header/footer */}
      <div className="flex flex-col min-h-screen"> 
        <Navbar /> 
        
        <main className="flex-grow pb-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<ReportIssue />} />
            
            <Route 
              path="/view" 
              element={
                <div className="max-w-6xl mx-auto p-4 pt-10">
                  <div className="mb-8">
                    <Search />
                  </div>
                  <ViewIssues />
                </div>
              } 
            />
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}