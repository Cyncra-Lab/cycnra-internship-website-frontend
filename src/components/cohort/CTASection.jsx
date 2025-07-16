const CTASection = () => (
  <section className="bg-[#02353C] text-white py-12 px-6 flex flex-col md:flex-row justify-between items-center">
    <div className="mb-6 md:mb-0">
      <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
      <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">KICKSTART YOUR FUTURE</button>
    </div>
    <img src="/cta-team.jpg" alt="Team working" className="w-48 h-48 rounded-full object-cover" />
  </section>
);

export default CTASection;
