import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null); // Ref for the hamburger button

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside the sidebar and not on the hamburger button
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      {/* Hamburger button */}
      <button
        ref={hamburgerRef}
        className="hamburger"
        onClick={toggleSidebar}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}
      >
        <div className='sidebar__logo'>
          <h2>ToDo</h2>
        </div>

        <nav className='sidebar__nav'>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25v-8.25m4.5-1.5H7.5m8.25-3v8.25m4.5-3v8.25m-4.5-8.25H12m8.25-8.25v8.25m-3-3v3m-4.5-3H7.5M12 6.75h3m0 3h3m0-6H12M8.25 3v8.25m-3-3v3" />
                </svg>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/tasks" onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 8.25h15M4.5 12h15m-15 3.75h15m-15 3.75h15" />
                </svg>
                Tasks
              </Link>
            </li>
            <li>
              <Link to="/upcoming-tasks" onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75H8.25v8.25h7.5V3.75zm3.75 13.5a3.75 3.75 0 11-7.5 0m4.5-7.5H5.25v11.25c0 .621.504 1.125 1.125 1.125h11.25c.621 0 1.125-.504 1.125-1.125V9.75h-4.5" />
                </svg>
                Upcoming Tasks
              </Link>
            </li>
            <li>
              <Link to="/overdue-tasks" onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v7.5m0 3.75v-3.75m0 3.75h3.75m-7.5 0H12m4.5-7.5h3.75m-7.5 0H12M12 4.5h-1.5m0 1.5h1.5M15.75 8.25H12M7.5 4.5H12v3.75M12 8.25h3.75" />
                </svg>
                Overdue Tasks
              </Link>
            </li>
            <li>
              <Link to="/completed-tasks" onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2.25 2.25L15 9M6 18h12M3 9h18m-15 6h1.5M7.5 6h1.5m0 6h1.5m-1.5 3h1.5M16.5 6h1.5m-4.5 6h1.5m1.5 3h1.5" />
                </svg>
                Completed Tasks
              </Link>
            </li>
            <li>
              <Link to="/add-task" onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add Task
              </Link>
            </li>
          </ul>
        </nav>

        <div className='sidebar__profile'>
          <img
            width={50}
            height={50}
            src="https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-103130.jpg" alt="User Profile" />
          <span>User</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
