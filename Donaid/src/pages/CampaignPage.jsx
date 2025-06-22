import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CampaignPage = () => {
  const { id } = useParams();
  const [campaignData, setCampaignData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/campaigns/${id}`);
        if (res.data.success) {
          setCampaignData(res.data.campaign);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaign();
  }, [id]);

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    const amount = selectedAmount || customAmount;
    if(!amount || amount <= 0){
      alert("Please enter a valid amount for donation"); 
      return; 
    }

    navigate(`/donate/${id}?amount=${amount}`); 
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-xl font-medium text-blue-600">Loading campaign details...</div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-xl font-medium text-red-600">Error: {error}</div>
    </div>
  );

  if (!campaignData) return null;

  const { title, description, targetAmount, currentAmount } = campaignData;
  const progressPercent = Math.min((currentAmount / targetAmount) * 100, 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        {/* Campaign Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>₹{currentAmount?.toLocaleString()} raised</span>
            <span>₹{targetAmount?.toLocaleString()} target</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-blue-600 h-4 rounded-full" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-right text-sm text-gray-600 mt-1">{progressPercent}% funded</p>
        </div>

        {/* Description */}
        <div className="prose prose-lg text-gray-700 mb-10">
          <p>{description}</p>
        </div>

        {/* Donation Options */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Make a Donation</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[100, 200, 500, 1000].map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount("");
                }}
                className={`py-3 px-4 rounded-lg border-2 text-lg font-medium transition-colors ${
                  selectedAmount === amount
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-300 hover:border-blue-400 text-gray-700'
                }`}
              >
                ₹{amount}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <form onSubmit={handleDonationSubmit} className="space-y-4">
            <div>
              <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-1">
                Or enter custom amount
              </label>
              <div className="flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  ₹
                </span>
                <input
                  type="number"
                  id="custom-amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Other amount"
                  className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 border p-2"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!selectedAmount && !customAmount}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              navigate = '/donate-page'
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;