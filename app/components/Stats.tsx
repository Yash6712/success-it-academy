export default function Stats() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Added explicit dark text color to heading */}
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
          Our Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-4xl font-bold text-yellow-500">100+</h3>
            {/* Added dark slate color for high contrast */}
            <p className="mt-2 font-medium text-slate-700">Students Trained</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-4xl font-bold text-yellow-500">5+ LPA</h3>
            <p className="mt-2 font-medium text-slate-700">Starting Package</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-4xl font-bold text-yellow-500">24×7</h3>
            <p className="mt-2 font-medium text-slate-700">Mentorship</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-4xl font-bold text-yellow-500">100%</h3>
            <p className="mt-2 font-medium text-slate-700">Practical Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}