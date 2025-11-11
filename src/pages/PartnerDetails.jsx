import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Star } from "lucide-react";
import Avatar from "../assets/Default_Avatar.jpeg";
import { ConnectionAPI, ProfileAPI } from "../api";
import { useAuth } from "../hooks/useAuth";

const PartnerDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [partner, setPartner] = useState({});
  const [partnerCount, setPartnerCount] = useState(0);
  // const [loading, setLoading] = useState(true);
  const [connectedList, setConnectedList] = useState([]);
  const connected = connectedList.some((c) => c.connected._id == id);

  useEffect(() => {
    const fetchMyPartner = async () => {
      try {
        const res = await ProfileAPI.getProfileById(id);
        setPartner(res.data.profile);
        setPartnerCount(res.data.profile.partnerCount);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchMyConnections = async () => {
      try {
        const res = await ConnectionAPI.getConnectionList();
        setConnectedList(res.data.connected);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMyPartner();
    fetchMyConnections();
  }, [id]);

  const handleSendRequest = async () => {
    const { _id: connectedId } = partner;
    const { email: profileEmail } = user;

    try {
      const res = await ConnectionAPI.makeConnection({
        connectedId,
        profileEmail,
      });

      setConnectedList(res.data.connected);
      setPartnerCount(partnerCount + 1);
      toast.success("Request sent successfully!");
    } catch (error) {
      toast.error("Error sending partner request");
      console.error(error);
    }
  };

  return (
    <div className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
          {/* Left: Image */}
          <div className="md:w-1/3 w-full">
            <img
              src={Avatar}
              alt={partner.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Details */}
          <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {partner.name}
              </h2>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-700 font-medium">
                  {partner.rating}
                </span>
              </div>

              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Subject:</span>{" "}
                {partner.subject}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Study Mode:</span>{" "}
                {partner.studyMode}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Availability:</span>{" "}
                {partner.availabilityTime}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Location:</span>{" "}
                {partner.location}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Experience Level:</span>{" "}
                {partner.experienceLevel}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Partner Count:</span>{" "}
                {partnerCount}
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={handleSendRequest}
                className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
                disabled={connected}
              >
                {connected ? "Partner Connected" : "Send Partner Request"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
