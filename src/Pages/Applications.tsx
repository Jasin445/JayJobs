import applications from "../Component/utils"

export default function Application(){
    const application = applications
    return (
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-4">Applications</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded shadow">
              <thead>
                <tr>
                  <th className="p-2 text-left">Job Title</th>
                  <th className="p-2 text-left">Company</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {application.map((app) => (
                  <tr key={app.id}>
                    <td className="p-2">{app.jobTitle}</td>
                    <td className="p-2">{app.company}</td>
                    <td className="p-2">{app.status}</td>
                    <td className="p-2">{app.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };
