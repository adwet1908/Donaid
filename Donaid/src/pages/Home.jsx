import { Link } from "react-router-dom";

const Home = () => {
  const featuredCauses = [
    {
      title: "Education for All",
      description: "Help underprivileged children access quality education",
      progress: 65,
      amount: "$25,000 raised of $40,000",
    },
    {
      title: "Hunger Relief",
      description: "Provide meals to families in food-insecure communities",
      progress: 40,
      amount: "$12,000 raised of $30,000",
    },
    {
      title: "Medical Aid",
      description: "Support life-saving treatments for critical illnesses",
      progress: 85,
      amount: "$42,500 raised of $50,000",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-blue-50">
      <main className="container mx-auto px-4 pb-16">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold mb-6 text-blue-100">
            Change Lives <span className="text-blue-400">With Your Gift</span>
          </h1>
          <p className="text-xl mb-10 text-blue-200 max-w-2xl mx-auto">
            Join thousands of donors making a difference in communities
            worldwide. 100% of your donation goes directly to those in need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to='/campaigns'>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                Donate Now
              </button>
            </Link>
            <Link to='/about'>
              <button className="bg-transparent border-2 border-blue-500 hover:bg-blue-900 text-blue-100 font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </section>

        {/* Featured Causes */}
        <section className="my-24">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-100">
            Featured <span className="text-blue-400">Causes</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCauses.map((cause, index) => (
              <div
                key={index}
                className="bg-blue-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="h-48 bg-blue-700 flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-100">
                    {cause.title}
                  </h3>
                  <p className="text-blue-300 mb-4">{cause.description}</p>
                  <div className="mb-3">
                    <div className="w-full bg-blue-900 rounded-full h-2.5">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full"
                        style={{ width: `${cause.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-blue-200 text-sm">{cause.amount}</p>
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200">
                    Support This Cause
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="my-24 bg-blue-800 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-100">
            Donor <span className="text-blue-400">Stories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-xl">👩</span>
                </div>
                <div>
                  <h4 className="font-bold text-blue-100">Sarah Johnson</h4>
                  <p className="text-blue-300 text-sm">Monthly Donor</p>
                </div>
              </div>
              <p className="text-blue-100 italic">
                "Knowing that my small monthly contribution helps feed a family
                gives me more joy than any material purchase ever could."
              </p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-xl">👨</span>
                </div>
                <div>
                  <h4 className="font-bold text-blue-100">Michael Chen</h4>
                  <p className="text-blue-300 text-sm">One-time Donor</p>
                </div>
              </div>
              <p className="text-blue-100 italic">
                "The transparency of this platform made me confident my donation
                would be used effectively. I'll definitely give again!"
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="my-24 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-100">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl mb-10 text-blue-200 max-w-2xl mx-auto">
            Every donation counts, no matter the size. Join our community of
            changemakers today.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
            Start Donating
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-100 mb-4">
                DonationApp
              </h3>
              <p className="text-blue-300">
                Making charitable giving simple, transparent, and impactful.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-blue-100 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-300 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-300 hover:text-white">
                    Causes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-300 hover:text-white">
                    Donate
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-100 mb-4">Contact</h4>
              <ul className="space-y-2 text-blue-300">
                <li>help@donationapp.org</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Charity Ave, Suite 100</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-100 mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-blue-800 text-white px-4 py-2 rounded-l-lg focus:outline-none w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
            <p>© 2023 DonationApp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
