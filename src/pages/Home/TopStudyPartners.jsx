import { useEffect, useState } from "react";
import { ProfileAPI } from "../../api";
import { useAuth } from "../../hooks/useAuth";
import PartnerCard from "../../components/PartnerCard";

const TopStudyPartners = () => {
  const { user } = useAuth();
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

  const filteredPartners = partners.filter(
    (partner) => partner?._id !== user._id && partner.studyMode
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Top Study Partners
        </h2>

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
    </section>
  );
};

export default TopStudyPartners;
