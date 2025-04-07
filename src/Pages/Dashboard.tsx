import { useState } from "react";
import { useSelector } from "react-redux"

  function Dashboard(){
    const email = useSelector((state: any) => state.error.email);
    console.log(email)

      const [menuOpen, setMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
    
      return (
        <div className="flex h-screen bg-gray-100">
         
    
          {/* Main Content */}
          <main className="flex-1 p-4">
            {/* Mobile Menu Button */}
            <div className="md:hidden mb-4">
              <button onClick={toggleMenu} className="text-gray-600">
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                  />
                </svg>
              </button>
            </div>
    
            <h1 className="text-2xl font-semibold mb-4">Hi {email}, Welcome to your Dashboard</h1>
    
            {/* Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Example Cards */}
              <div className="bg-white rounded shadow p-4">
                <h2 className="text-lg font-semibold mb-2">Total Users</h2>
                <p className="text-3xl">1,234</p>
              </div>
              <div className="bg-white rounded shadow p-4">
                <h2 className="text-lg font-semibold mb-2">New Orders</h2>
                <p className="text-3xl">567</p>
              </div>
              <div className="bg-white rounded shadow p-4">
                <h2 className="text-lg font-semibold mb-2">Revenue</h2>
                <p className="text-3xl">$8,901</p>
              </div>
              {/* Add more cards and content here */}
            </div>
          </main>
        </div>
      );
    };
    

export default Dashboard;