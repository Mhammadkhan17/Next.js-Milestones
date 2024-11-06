import Typewriter from './components/TypeWriter';

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Typewriter 
        lines={[
          "Hello there, User!",
          "Created by Hammad"
        ]}
        speed={100}
        delay={2000} // Delay between line changes
      />
    </div>
  );
}
