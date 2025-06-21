const ExtraSection2 = () => {
  const destinations = [
    { name: "Cox's Bazar", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
    { name: "Sundarbans", img: "https://images.unsplash.com/photo-1526779259212-4ff40b7a39d3" },
    { name: "Sylhet", img: "https://images.unsplash.com/photo-1500534623283-312aade485b7" },
    { name: "Bandarban", img: "https://images.unsplash.com/photo-1494526585095-c41746248156" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Top Destinations</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map((dest, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img
              src={`${dest.img}?auto=format&fit=crop&w=400&q=80`}
              alt={dest.name}
              className="w-full h-40 object-cover"
            />
            <h3 className="text-center mt-2 font-semibold">{dest.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ExtraSection2;
