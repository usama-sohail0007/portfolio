export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-2">Project {i}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Project description here
              </p>
            </div>
          ))}

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-center">and 4+ more</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
