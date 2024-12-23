import Image from "next/image";
export default function AboutContent() {
  return (
    <section
      id="about"
      className="container mx-auto px-6 py-20 text-gray-800"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row md:items-center md:space-x-10">
        {/* Left Section: Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/portrait.png"
            alt="AI-generated-portrait"
            width={288}
            height={288}
            className="rounded-lg shadow-lg shadow-black w-72 h-72 object-cover md:w-96 md:h-96"
          />
        </div>

        {/* Right Section: About Text */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h2 className="text-3xl font-semibold mb-4">
            Hi, I&apos;m <span className="text-blue-500">Hammad</span>
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            I&apos;m a passionate developer with expertise in creating modern web
            applications. I specialize in technologies like React, Next.js, and
            Tailwind CSS to build responsive, user-friendly, and performant
            solutions.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            With a strong focus on design and functionality, I aim to deliver
            seamless experiences that solve real-world problems. My goal is to
            keep learning, growing, and contributing to the tech community.
          </p>
          <a
            href="/Contact"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
