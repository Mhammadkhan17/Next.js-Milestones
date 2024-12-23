import Link from "next/link";

export default function CTA() {
    return (
      <section
        id="cta"
        className="py-20 bg-blue-500 text-white text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let's Work Together!
        </h2>
        <p className="text-lg md:text-xl mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out.
        </p>
        <Link
          href="../Contact"
          className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300"
        >
          Contact Me
        </Link>
      </section>
    );
  }
  