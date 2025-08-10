import React from "react";

const testimonials = [
  {
    name: "Rafiq Ahmed",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    comment:
      "Amazing tour experience! Everything was perfectly organized and the guides were fantastic.",
  },
  {
    name: "Nadia Khan",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    comment:
      "Loved the cultural insights and the beautiful destinations. Highly recommend!",
  },
  {
    name: "Jahid Islam",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    comment:
      "Great value for money and excellent customer support throughout the trip.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">💬 What Our Customers Say</h2>
        <div className="space-y-6">
          {testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4"
            >
              <img
                src={testi.image}
                alt={testi.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-700 italic">"{testi.comment}"</p>
                <p className="mt-3 font-semibold text-gray-900">- {testi.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
