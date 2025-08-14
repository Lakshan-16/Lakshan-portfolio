export default function Projects() {
  const projects = [
    {
      title: "AI-Driven IC Validator",
      description:
        "Designed and implemented a system for IC detection and explanation using high-resolution cameras and Python on Raspberry Pi 4. Achieved successful validation of ICs through AI-driven image processing.",
      link: "https://github.com/Lakshan-16"
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "This is a simple funny game built using React.js and Vanilla CSS for understanding the concepts ",
      link: "https://github.com/Lakshan-16"
    },
    {
      title: "To-do List",
      description:
        "This is a mini project in React.js to understand the map() method for dynamic rendering of UI ",
      link: "https://github.com/Lakshan-16"
    }
  ];

  return (
    <section id="projects" className="bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
