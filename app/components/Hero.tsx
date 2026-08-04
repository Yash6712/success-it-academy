export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#0B1F3A] to-[#163B72] text-white min-h-[85vh] flex items-center">

      <div className="max-w-7xl mx-auto px-6">

        <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
          Packages Starting From 5+ LPA
        </span>

        <h1 className="text-6xl font-extrabold mt-8 leading-tight">
          Become Job Ready
          <br />
          in Just 45 Days
        </h1>

        <p className="mt-8 text-xl max-w-2xl text-gray-300">
          Learn real-time industry skills with practical training and placement support.
        </p>

        <div className="flex gap-5 mt-10">

          <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold">
            Book Free Demo
          </button>

          <button className="border border-white px-8 py-4 rounded-lg">
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
}