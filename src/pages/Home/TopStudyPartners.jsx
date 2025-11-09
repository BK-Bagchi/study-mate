import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import Avatar from "../../assets/Default_Avatar.jpeg";

const samplePartners = [
  {
    id: "1",
    name: "Aisha Rahman",
    profileImage: "https://i.ibb.co/profile-example.jpg",
    subject: "Mathematics",
    skill: "Algebra & Calculus",
    rating: 4.5,
  },
  {
    id: "2",
    name: "Rahim Khan",
    profileImage: "https://i.ibb.co/profile-example2.jpg",
    subject: "English",
    skill: "Grammar & Writing",
    rating: 4.8,
  },
  {
    id: "3",
    name: "Nabila Sultana",
    profileImage: "https://i.ibb.co/profile-example3.jpg",
    subject: "Programming",
    skill: "JavaScript & React",
    rating: 4.9,
  },
];

const TopStudyPartners = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Top Study Partners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {samplePartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={Avatar}
                alt={partner.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {partner.name}
                </h3>
                <p className="text-gray-600">{partner.subject}</p>
                <p className="text-gray-500 text-sm mb-2">{partner.skill}</p>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-700 font-medium">
                    {partner.rating}
                  </span>
                </div>
                <Link
                  to={`/partner/${partner.id}`}
                  className="block text-center bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopStudyPartners;
