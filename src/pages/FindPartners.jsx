import { useEffect, useState } from "react";
import { ProfileAPI } from "../api";
import { useAuth } from "../hooks/useAuth";
import PartnerCard from "../components/PartnerCard";

const FindPartners = () => {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await ProfileAPI.getAllProfile();
        setPartners(res.data.profiles);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);
  // console.log(partners);
  // console.log(user);

  const otherPartners = user
    ? partners.filter(
        (partner) => partner && partner._id !== user._id && partner.studyMode
      )
    : partners.filter((partner) => partner && partner.studyMode);
  const filteredPartners = otherPartners
    .filter((p) =>
      (p.subject || "").toLowerCase().includes(search.toLowerCase())
    )
    .sort((a) => {
      if (!sort) return 0;
      if (sort === "Beginner") return a.experienceLevel === "Beginner" ? -1 : 1;
      if (sort === "Intermediate")
        return a.experienceLevel === "Intermediate" ? -1 : 1;
      if (sort === "Expert") return a.experienceLevel === "Expert" ? -1 : 1;
      return 0;
    });

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Find Your Study Partner
        </h2>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2  text-gray-700 border border-gray-500 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-1/4"
          >
            <option className="hidden" value="">
              Sort by Experience
            </option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>

          <input
            type="text"
            placeholder="Search by subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 text-gray-700 border border-gray-500 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-1/2"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading ? (
            <div className="text-[red]">Loading....</div>
          ) : (
            filteredPartners.map((partner) => (
              <PartnerCard key={partner._id} partner={partner} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FindPartners;
