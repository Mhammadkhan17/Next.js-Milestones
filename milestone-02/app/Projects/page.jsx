import Link from "next/link";

const projects = [
    { id: 1, title: "Project One", description: "A cool project.", link: "#" },
    { id: 2, title: "Project Two", description: "Another cool project.", link: "#" },
    { id: 3, title: "Project Three", description: "Yet another cool project.", link: "#" },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  