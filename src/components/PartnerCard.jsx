import { Link } from "react-router-dom";
import Avatar from "../assets/Default_Avatar.jpeg";

const PartnerCard = ({ partner }) => {
  return (
    <div
      key={partner._id}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition"
    >
      <img
        src={Avatar}
        alt={partner.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{partner.name}</h3>
        <p className="text-gray-600">{partner.subject}</p>
        <p className="text-gray-500 text-sm mb-2">{partner.studyMode}</p>
        <div className="flex items-center gap-1 mb-4">
          <span className="text-gray-700 font-medium">
            {partner.experienceLevel}
          </span>
        </div>
        <Link
          to={`/partner/${partner._id}`}
          className="block text-center bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default PartnerCard;
