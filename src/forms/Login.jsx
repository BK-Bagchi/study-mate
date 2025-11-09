import { Link } from "react-router-dom";
import GoogleIcon from "../assets/Icon_Google.png";

const Login = () => {
  return (
    <div className="flex items-center justify-center border-b border-gray-200 bg-gray-50 px-4 py-20">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login to StudyMate
        </h2>

        {/* Login Form */}
        <form className="space-y-4">
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
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 text-gray-700 border border-gray-500 rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <p className="text-sm text-right text-blue-600 my-3 hover:underline cursor-pointer">
              Forgot your password?
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-700">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Sign In */}
        <button
          type="button"
          className="w-full flex items-center justify-center text-gray-700 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
        >
          <img src={GoogleIcon} alt="Google" className="w-6 h-6 mr-2" />
          Sign in with Google
        </button>

        {/* Link to Register */}
        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
