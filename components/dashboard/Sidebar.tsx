"use client"

const Sidebar = () => {
    const navLinks = [
      { name: 'Overview', href: '/dashboard' },
      { name: 'Customers', href: '/customers' },
      { name: 'Products', href: '/products' },
      { name: 'Settings', href: '/settings' },
    ];
  
    return (
      <div className="w-64 bg-white p-4 shadow-md">
        <nav className="space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    );
  };
  
  export default Sidebar;
  