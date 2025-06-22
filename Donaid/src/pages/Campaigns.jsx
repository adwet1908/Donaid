import React, { useEffect, useState } from "react";
import axios from "axios"; // ✅ This 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Campaigns = () => {
  const [campaigns, setCampaign] = useState([]); 
  const navigate = useNavigate();

  const fetchCampaign = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/campaigns`);
      // console.log(res)
      if (res.data.success) {
        setCampaign(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    }
  };
  
  useEffect(() => {
    fetchCampaign();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-blue-50">
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-100">
            All <span className="text-blue-400">Campaigns</span>
          </h2>
          <p className="text-xl text-blue-300 max-w-2xl mx-auto">
            Discover and support causes that matter to you
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div
              key={campaign._id}
              className="bg-blue-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-blue-700 flex items-center justify-center text-6xl">
                {campaign.imageEmoji || "🌍"}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-100 line-clamp-2">
                  {campaign.title}
                </h3>

                <p className="text-blue-300 mb-4 line-clamp-3">
                  {campaign.description}
                </p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-blue-200 mb-1">
                    <span>
                      ₹{campaign.currentAmount?.toLocaleString() || 0} raised
                    </span>
                    <span>
                      ₹{campaign.targetAmount?.toLocaleString() || 0} goal
                    </span>
                  </div>
                  <div className="w-full bg-blue-900 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{
                        width: `${Math.min(
                          100,
                          (campaign.currentAmount / campaign.targetAmount) * 100
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between text-sm text-blue-300">
                  <span>👥 {campaign.donors || 0} donors</span>
                  <span>⏳ {campaign.daysLeft || 0} days left</span>
                </div>
                <button
                  onClick={() => navigate(`/campaigns/${campaign._id}`)}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                >
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {campaigns.length === 0 && (
          <div className="text-center py-16">
            <p className="text-blue-300 text-xl">No campaigns found</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Campaigns;
