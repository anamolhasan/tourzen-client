const ExtraSection1 = () => {
  const features = [
    { icon: "🌟", title: "Trusted Guides", desc: "Experienced and friendly tour guides." },
    { icon: "💰", title: "Affordable Prices", desc: "Best deals and offers guaranteed." },
    { icon: "🕒", title: "Flexible Scheduling", desc: "Tours tailored to your time." },
    { icon: "📞", title: "24/7 Support", desc: "We are here whenever you need." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg text-center shadow hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ExtraSection1;
