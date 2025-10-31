import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Report Issue", path: "/report" },
    { name: "View Issue", path: "/view" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    // 💡 Using the custom CSS class
    <nav className="custom-nav sticky top-0 z-50"> 
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          // NavLink automatically adds an 'active' class when path matches, which is styled in App.css
          className="nav-link" 
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}