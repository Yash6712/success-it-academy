export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0B1F3A] shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-yellow-400">
            Success IT Academy
          </h1>
          <p className="text-xs text-gray-300">
            Skills Today. Success Tomorrow.
          </p>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li className="cursor-pointer hover:text-yellow-400 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition">
            About
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition">
            Courses
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition">
            Placements
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition">
            Contact
          </li>
        </ul>

        {/* Button */}
        <button className="rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-black transition hover:bg-yellow-300">
          Book Free Demo
        </button>
      </div>
    </nav>
  );
}