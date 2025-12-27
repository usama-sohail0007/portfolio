export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-12"><span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['React', 'Node.js', 'TypeScript', 'Python'].map(skill => (
            <div key={skill} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
