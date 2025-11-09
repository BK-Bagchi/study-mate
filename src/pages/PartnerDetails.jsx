import { Star } from "lucide-react";
import Avatar from "../assets/Default_Avatar.jpeg";

const samplePartner = {
  id: 1,
  name: "Aisha Rahman",
  profileImage: Avatar,
  subject: "Mathematics",
  studyMode: "Online",
  availabilityTime: "Evening 6–9 PM",
  location: "Dhaka, Bangladesh",
  experienceLevel: "Intermediate",
  rating: 4.5,
  partnerCount: 3,
};

const PartnerDetails = () => {
  const partner = samplePartner;

  const handleSendRequest = () => {
    alert(`Partner request sent to ${partner.name}`);
  };

  return (
    <div className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
          {/* Left: Image */}
          <div className="md:w-1/3 w-full">
            <img
              src={partner.profileImage}
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
                {partner.partnerCount}
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={handleSendRequest}
                className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
              >
                Send Partner Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
