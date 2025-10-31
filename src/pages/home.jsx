import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* 🔲 Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ✨ Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          Community Issue Tracker
        </h1>

        <h2 className="text-2xl font-semibold text-gray-100 mb-4">
          Welcome to Community Issue Tracker
        </h2>

        <p className="text-gray-200 max-w-2xl text-lg leading-relaxed mx-auto mb-8">
          Report, track, and resolve community issues efficiently. Empowering
          citizens to collaborate for better neighborhoods and smarter cities.
        </p>

        <Link
          to="/report"
          className="inline-block px-6 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-full shadow-md hover:bg-yellow-300 transition-all duration-300"
        >
          Report an Issue
        </Link>
      </div>
    </div>
  );
}