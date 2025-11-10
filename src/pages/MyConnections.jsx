import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Avatar from "../assets/Default_Avatar.jpeg";
import { ConnectionAPI } from "../api";

const MyConnections = () => {
  const [myConnections, setMyConnections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMyConnections = async () => {
      try {
        const res = await ConnectionAPI.getConnectionList();
        setMyConnections(res.data.connected);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMyConnections();
  }, []);
  // console.log(myConnections);

  const handleDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this connection?")) {
      setMyConnections((prev) => prev.filter((c) => c.connected._id !== _id));
    }
  };

  const handleUpdate = (id) => {
    alert(`Update functionality for ID: ${id} will be implemented.`);
  };

  return (
    <div className="py-12 bg-gray-50 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          My Connections
        </h2>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Partner</th>
                <th className="px-4 py-2 text-left">Subject</th>
                <th className="px-4 py-2 text-left">Study Mode</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <div>Loading.....</div>
              ) : (
                <>
                  {myConnections.map((conn) => (
                    <tr
                      key={conn.connected._id}
                      className="hover:bg-gray-100 transition"
                    >
                      <td className="px-4 py-3 flex items-center gap-3">
                        <img
                          src={Avatar}
                          alt={conn.connected.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="font-medium text-gray-800">
                          {conn.connected.name}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        {conn.connected.subject}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        {conn.connected.studyMode}
                      </td>
                      <td className="px-4 py-3 flex justify-center gap-2">
                        <button
                          onClick={() => handleUpdate(conn.connected._id)}
                          className="flex items-center gap-1 bg-yellow-400 text-white px-3 py-1 rounded-md hover:bg-yellow-500 transition"
                        >
                          <Pencil className="w-4 h-4" /> Update
                        </button>
                        <button
                          onClick={() => handleDelete(conn.connected._id)}
                          className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                        >
                          <Trash2 className="w-4 h-4" /> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {myConnections.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="text-center py-6 text-gray-500"
                      >
                        No connections found.
                      </td>
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyConnections;
