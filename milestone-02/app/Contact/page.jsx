export default function ContactPage() {
  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen flex items-center justify-center">
      <section className="container mx-auto px-6 py-20">
        {/* Page Header */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">
          Contact Me
        </h1>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* Left Section: Contact Details */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-lg leading-relaxed mb-6">
              Feel free to reach out to me for collaborations, opportunities,
              or just to say hi! You can also reach me via email or phone.
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:your-email@example.com"
                  className="text-blue-500 hover:underline"
                >
                  your-email@example.com
                </a>
              </li>
              <li>
                <span className="font-bold">Phone:</span>{" "}
                <a
                  href="tel:+1234567890"
                  className="text-blue-500 hover:underline"
                >
                  +123-456-7890
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section: Contact Form */}
          <div className="md:w-1/2 bg-white p-8 shadow-md rounded-lg">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
