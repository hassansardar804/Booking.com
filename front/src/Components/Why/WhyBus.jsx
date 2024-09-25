const WhyBus = () => {
    const reasons = [
      {
        icon: "🚍",
        title: "Comfortable Rides",
        description: "Our buses are equipped with modern amenities to ensure a smooth and comfortable journey.",
      },
      {
        icon: "⏱️",
        title: "Punctual Service",
        description: "We value your time. Our buses are always on time, ensuring you reach your destination as planned.",
      },
      {
        icon: "🛡️",
        title: "Safe & Secure",
        description: "Your safety is our priority. Our buses are equipped with the latest safety features.",
      },
      {
        icon: "💸",
        title: "Affordable Fares",
        description: "Traveling with us won’t break the bank. We offer competitive fares for everyone.",
      },
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            Why Choose Our Bus Service?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 transition duration-300 ease-in-out transform bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105"
              >
                <div className="mb-4 text-4xl">{reason.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyBus;
  