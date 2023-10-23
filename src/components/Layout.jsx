import React from 'react';

function Layout({ children }) {
  return (
    <div>
      <header>
        {/* Add your header content here */}
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}

export default Layout;
