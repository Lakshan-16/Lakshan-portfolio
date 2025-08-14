export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Engineering - Electronics and Communication Engineering",
      institution: "Alva's Institute of Engineering and Technology, Mijar",
      year: "2021 - 2025",
      details: "CGPA: 9.29"
    },
    {
      degree: "12th Grade (PUC)",
      institution: "ST. Raymond's PU College, Vamanjoor, Mangalore",
      year: "2019 - 2021",
      details: "Percentage: 85.33%"
    },
    {
      degree: "10th Grade (SSLC)",
      institution: "ST. Raymond's English Medium High School, Vamanjoor, Mangalore",
      year: "2018 - 2019",
      details: "Percentage: 83.36%"
    }
  ];

  const internship = {
    title: "VLSI Design Engineer Intern",
    company: "Rooman Technologies (Trained at Alva's Institute of Engineering and Technology)",
    duration: "3 months (Online, 2024-25)"
  };

  return (
    <section id="education" className="bg-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Education & Internship</h2>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-700">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
              <p className="text-sm text-gray-500">{edu.details}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-white rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold">{internship.title}</h3>
          <p className="text-gray-700">{internship.company}</p>
          <p className="text-sm text-gray-500">{internship.duration}</p>
        </div>
      </div>
    </section>
  );
}
