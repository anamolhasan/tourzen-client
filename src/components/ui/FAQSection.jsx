
import React from "react";

const faqs = [
  {
    question: "How to book a tour?",
    answer:
      "You can book directly from our website by visiting the tour details page and clicking on the 'Book Now' button.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "You will get an 80% refund if the booking is cancelled at least 7 days before the tour date.",
  },
  {
    question: "Are meals included in the tour package?",
    answer:
      "Some tours include meals. Please check the package details for more information.",
  },
  {
    question: "Can I customize my tour?",
    answer:
      "Yes! Contact our support team to create a custom tour experience for you.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          ❓ Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 hover:shadow-md transition"
            >
              <details>
                <summary className="font-semibold cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
