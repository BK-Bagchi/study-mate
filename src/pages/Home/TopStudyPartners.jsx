import { useEffect, useState } from "react";
import { ProfileAPI } from "../../api";
import { useAuth } from "../../hooks/useAuth";
import PartnerCard from "../../components/PartnerCard";
import { useTheme } from "../../hooks/useTheme";

const TopStudyPartners = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const filteredPartners = user
    ? partners.filter(
        (partner) => partner && partner._id !== user._id && partner.studyMode
      )
    : partners.filter((partner) => partner && partner.studyMode);

  return (
    <section
      className={`py-12 transition ${theme ? "bg-gray-50" : "bg-gray-900"}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2
          className={`text-3xl font-bold mb-8 text-center transition ${
            theme ? "text-blue-600" : "text-blue-400"
          }`}
        >
          Top Study Partners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading ? (
            <div className="text-[red]">Loading....</div>
          ) : (
            filteredPartners.map((partner) => (
              <PartnerCard key={partner._id} partner={partner} theme={theme} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TopStudyPartners;
