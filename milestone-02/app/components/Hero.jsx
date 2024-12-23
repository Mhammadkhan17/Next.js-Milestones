export default function Hero() {
    return (
      <section
        id="hero"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I&apos;m <span className="text-yellow-300">Hammad</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          A passionate developer building modern web experiences.
        </p>
        <a
          href="../About"
          className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300"
        >
          Learn More About Me
        </a>
      </section>
    );
  }
  