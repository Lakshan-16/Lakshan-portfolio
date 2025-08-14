export default function Skills() {
  const techSkills = [
    "Java",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwindcss v4",
    "React.js",
    "Eclipse",
    "VS Code",
    "Cadence"
  ];

  const softSkills = [
    "Leadership",
    "Logical Reasoning",
    "Effective Communication"
  ];

  return (
    <section id="skills" className="bg-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Skills</h2>

        <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
        <div className="flex flex-wrap gap-3 mb-8">
          {techSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
