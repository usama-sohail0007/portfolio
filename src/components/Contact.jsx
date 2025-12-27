export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-12"><span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get In Touch</span></h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900" />
            <textarea placeholder="Message" rows="6" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900"></textarea>
            <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
