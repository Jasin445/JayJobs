interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    description: string;
    salary: string;
    postedDate: string; // Or Date if you are using actual date objects.
    requirements: string[];
    benefits: string[];
  }
  
  const jobs: Job[] = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'TechCorp',
      location: 'New York, NY',
      description: 'Develop and maintain software applications...',
      salary: '$100,000 - $120,000',
      postedDate: '2023-10-26',
      requirements: ['JavaScript', 'React', 'Node.js'],
      benefits: ['Health insurance', 'Paid time off', 'Remote work'],
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'WebSolutions',
      location: 'San Francisco, CA',
      description: 'Design and implement user interfaces...',
      salary: '$90,000 - $110,000',
      postedDate: '2023-10-27',
      requirements: ['HTML', 'CSS', 'React'],
      benefits: ['401k', 'Flexible hours', 'Snacks'],
    },
    {
      id: 3,
      title: 'Backend Developer',
      company: 'Cloud Innovators',
      location: 'Austin, TX',
      description: 'Build and maintain server-side logic...',
      salary: '$110,000 - $130,000',
      postedDate: '2023-10-28',
      requirements: ['Python', 'Django', 'PostgreSQL'],
      benefits: ['Unlimited PTO', 'Equity', 'Team events'],
    },
    // ... more jobs
  ];
  
  // Example usage within your component:
  
  const JobsList = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600">Company: {job.company}</p>
            <p className="text-gray-600">Location: {job.location}</p>
            <p className="text-gray-700">{job.description.substring(0, 100)}...</p>
            <p className="text-gray-700">Salary: {job.salary}</p>
            <p className="text-gray-700">Posted: {job.postedDate}</p>
            <div className="mt-2">
              <strong>Requirements:</strong>
              <ul className="list-disc list-inside">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <strong>Benefits:</strong>
              <ul className="list-disc list-inside">
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default JobsList;