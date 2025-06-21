
const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      bio: "Former nonprofit director with 15+ years in humanitarian work",
      emoji: "👩‍⚕️"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Tech entrepreneur passionate about social impact",
      emoji: "👨‍💻"
    },
    {
      name: "Priya Patel",
      role: "Outreach Director",
      bio: "Community organizer and activist",
      emoji: "✊"
    },
    {
      name: "David Kim",
      role: "Finance Director",
      bio: "CPA specializing in nonprofit accounting",
      emoji: "🧮"
    }
  ];

  const milestones = [
    { year: "2020", event: "Founded as small community project" },
    { year: "2021", event: "First 1,000 donations processed" },
    { year: "2022", event: "Expanded to international causes" },
    { year: "2023", event: "Reached $1M in total donations" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-blue-50">
      <main className="container mx-auto px-4 pb-16">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold mb-6 text-blue-100">
            About <span className="text-blue-400">Our Mission</span>
          </h1>
          <p className="text-xl mb-10 text-blue-200 max-w-3xl mx-auto">
            We're building a world where generosity is frictionless, transparent,
            and impactful. Every feature we create serves this vision.
          </p>
        </section>

        {/* Our Story */}
        <section className="my-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-blue-100">
                Our <span className="text-blue-400">Story</span>
              </h2>
              <div className="space-y-6 text-blue-200">
                <p>
                  Founded in 2020 during the pandemic, we saw firsthand how
                  traditional donation systems were failing both donors and
                  recipients. Complex processes and lack of transparency were
                  preventing good people from helping effectively.
                </p>
                <p>
                  Our team of technologists and nonprofit veterans came together
                  to create a platform that removes these barriers. What began as
                  a local solution has grown into a global movement.
                </p>
                <p>
                  Today, we partner with over 200 verified organizations
                  worldwide, ensuring your contributions make the maximum
                  possible impact.
                </p>
              </div>
            </div>
            <div className="bg-blue-800 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6 text-blue-100">Milestones</h3>
              <div className="space-y-6">
                {milestones.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-700 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-blue-100">{item.year}</span>
                    </div>
                    <p className="text-blue-100 pt-2">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="my-24">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-100">
            Meet <span className="text-blue-400">The Team</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-blue-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div className="h-48 bg-blue-700 flex items-center justify-center text-6xl">
                  {member.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-blue-100">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <p className="text-blue-300 text-sm">{member.bio}</p>
                  <div className="mt-4 pt-4 border-t border-blue-700 flex space-x-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      <span className="sr-only">Twitter</span>
                      <span aria-hidden="true">𝕏</span>
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      <span className="sr-only">LinkedIn</span>
                      <span aria-hidden="true">in</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="my-24 bg-blue-800 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-100">
            Our <span className="text-blue-400">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-700 p-6 rounded-lg">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3 text-blue-100">Transparency</h3>
              <p className="text-blue-300">
                We show exactly where every dollar goes, with detailed impact reports.
              </p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-blue-100">Efficiency</h3>
              <p className="text-blue-300">
                Our low 5% overhead ensures maximum funds reach those in need.
              </p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-blue-100">Community</h3>
              <p className="text-blue-300">
                We believe real change happens when people come together.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="my-24">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-100">
            Trusted <span className="text-blue-400">Partners</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Global Aid", "HealthFirst", "EduFuture", "GreenEarth"].map((partner, index) => (
              <div key={index} className="bg-blue-800 rounded-lg p-8 flex items-center justify-center h-32">
                <span className="text-xl font-medium text-blue-200">{partner}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer - Same as Home.jsx */}
      <footer className="bg-blue-900 p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-100 mb-4">Donaid</h3>
              <p className="text-blue-300">
                Making charitable giving simple, transparent, and impactful.
              </p>
            </div>
            {/* Other footer columns same as Home.jsx */}
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
            <p>© 2025 Donaid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;