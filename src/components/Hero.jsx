export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="container-custom text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Hi, I'm John Doe</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Full Stack Developer</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">I build beautiful, responsive web applications with modern technologies.</p>
      </div>
    </section>
  )
}
