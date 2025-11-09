import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleIcon from "../assets/Icon_Google.png";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const { register, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Google login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 border-b border-gray-200 px-4 py-10">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create Your StudyMate Account
        </h2>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              className="w-full px-4 py-2 text-gray-700 border border-gray-500 rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 text-gray-700 border border-gray-500 rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="photo"
              className="block text-gray-700 font-medium mb-1"
            >
              Photo URL
            </label>
            <input
              type="url"
              id="photo"
              placeholder="https://yourphoto.com/photo.jpg"
              className="w-full px-4 py-2 text-gray-700 border border-gray-500 rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter a strong password"
              className="w-full px-4 py-2 text-gray-700 border border-gray-500 rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              Must contain uppercase, lowercase & minimum 6 characters
            </p>
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 font-medium mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Enter a strong password"
              className="w-full px-4 py-2 text-gray-700 border border-gray-500 rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              Must contain uppercase, lowercase & minimum 6 characters
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-700">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center text-gray-700 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
          onClick={handleGoogleLogin}
        >
          <img src={GoogleIcon} alt="Google" className="w-6 h-6 mr-2" />
          Sign up with Google
        </button>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
