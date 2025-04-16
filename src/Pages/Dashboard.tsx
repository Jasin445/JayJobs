import { useSelector } from "react-redux"

  function Dashboard(){
    const email = useSelector((state: any) => state.error.email);
    
    
      return (
        <div className="flex">
         
    
          {/* Main Content */}
          <main className="flex-1 p-4">
            {/* Mobile Menu Button */}
           
    
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