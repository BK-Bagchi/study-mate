import { Link } from "react-router-dom";
import { User, BookOpen, Monitor, Star } from "lucide-react";
import Avatar from "../assets/Default_Avatar.jpeg";

const PartnerCard = ({ partner }) => {
  return (
    <div
      key={partner._id}
      className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:border-blue-200 transition-all duration-300"
    >
      <img
        src={partner.photoURL || Avatar}
        alt={partner.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2 text-gray-800">
          <User className="w-5 h-5 text-blue-500" />
          <h3 className="text-lg font-semibold">{partner.name}</h3>
        </div>

        <div className="flex justify-between gap-2 text-gray-700">
          <div className="flex gap-2">
            <BookOpen className="w-5 h-5 text-purple-500" />
            <p className="text-sm">{partner.subject}</p>
          </div>
          <div className="flex gap-2">
            <Monitor className="w-5 h-5 text-teal-500" />
            <p className="text-sm capitalize">{partner.studyMode}</p>
          </div>
        </div>

        <div className="flex justify-between gap-2 text-gray-700">
          <div className="flex gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <p className="text-sm font-medium">{partner.experienceLevel}</p>
          </div>
          <div className="flex gap-2">
            {partner.rating > 0 && (
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: Math.round(partner.rating) }).map(
                  (_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  )
                )}
                <span className="text-sm text-gray-600 ml-1">
                  {partner.rating.toFixed(1)}
                </span>
              </div>
            )}
          </div>
        </div>
        <Link
          to={`/partner/${partner._id}`}
          className="block text-center mt-4 bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default PartnerCard;
