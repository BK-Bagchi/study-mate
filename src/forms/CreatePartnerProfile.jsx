import { useState } from "react";

const CreatePartnerProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profileImage: "",
    subject: "",
    studyMode: "Online",
    availability: "",
    location: "",
    experienceLevel: "Beginner",
    rating: 0,
    partnerCount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit formData to backend
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Create Partner Profile
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 border border-gray-500 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              onChange={handleChange}
              value={formData.email}
              className="w-full px-4 py-2 text-gray-700 border border-gray-500 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Profile Image URL
            </label>
            <input
              type="url"
              name="profileImage"
              placeholder="https://example.com/photo.jpg"
              value={formData.profileImage}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 border border-gray-500 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="e.g., Mathematics, Programming"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 border border-gray-500 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Study Mode
            </label>
            <select
              name="studyMode"
              value={formData.studyMode}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 border border-gray-500 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Availability Time
            </label>
            <input
              type="text"
              name="availability"
              placeholder="Evening 6-9 PM"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 border border-gray-500 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="City, Area or Preferred Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 border border-gray-500 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Experience Level
            </label>
            <select
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 border border-gray-500 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Rating (Optional)
            </label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 border border-gray-500 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              min="0"
              max="5"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Partner Count
            </label>
            <input
              type="number"
              name="partnerCount"
              value={formData.partnerCount}
              readOnly
              className="w-full px-4 py-2 text-gray-700 border border-gray-500 focus:border-none rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePartnerProfile;
