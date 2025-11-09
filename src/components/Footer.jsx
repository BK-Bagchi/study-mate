import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 md:px-8">
        {/* Top Section: Logo + Description */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
              StudyMate
            </h1>
            <p className="text-gray-700 max-w-md">
              StudyMate is a platform for students to find and connect with the
              perfect study partners based on subjects, learning preferences, or
              nearby locations.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-2">
            <h2 className="text-gray-800 font-semibold">Follow Us</h2>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-400 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-700 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} StudyMate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
