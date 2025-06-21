import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="flex items-center mb-4 md:mb-0">
          <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <h1 className="text-2xl font-bold text-blue-100">Donaid</h1>
        </Link>
        
        <div className="flex space-x-1 md:space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/campaigns" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
            Our campaigns
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink component for consistent styling
const NavLink = ({ to, children, className = "" }) => {
  return (
    <Link 
      to={to} 
      className={`text-blue-200 hover:text-white font-medium transition duration-200 ${className}`}
    >
      {children}
    </Link>
  );
};

export default Navbar;