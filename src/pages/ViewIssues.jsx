import { useEffect, useState } from "react";

// Helper function to assign badge colors based on status (retains Tailwind for badges)
const getStatusBadge = (status) => {
    const base = "px-3 py-1 text-xs font-semibold rounded-full";
    switch (status) {
        case "Pending":
            return `${base} bg-yellow-100 text-yellow-800`;
        case "In Progress":
            return `${base} bg-blue-100 text-blue-800`;
        case "Resolved":
            return `${base} bg-green-100 text-green-800`;
        default:
            return `${base} bg-gray-100 text-gray-800`;
    }
};

export default function ViewIssues() {
  const [issues, setIssues] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ title: "", description: "", category: "", status: "" });

  useEffect(() => { fetchIssues(); }, []);

  const fetchIssues = async () => {
    try {
        const res = await fetch("http://localhost:5000/api/issues");
        const data = await res.json();
        setIssues(data);
    } catch (error) {
        console.error("Error fetching issues:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this issue?")) return;
    try {
        await fetch(`http://localhost:5000/api/issues/${id}`, { method: "DELETE" });
        fetchIssues(); 
    } catch (error) {
        console.error("Error deleting issue:", error);
    }
  };

  const startEdit = (issue) => {
    setEditingId(issue._id);
    setEditData({ title: issue.title, description: issue.description, category: issue.category, status: issue.status });
  };

  const handleUpdate = async (id) => {
    try {
        await fetch(`http://localhost:5000/api/issues/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editData),
        });
        setEditingId(null);
        fetchIssues();
    } catch (error) {
        console.error("Error updating issue:", error);
    }
  };

  return (
    <div className="bg-white p-6 shadow-xl rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-indigo-800 text-center">All Reported Issues</h2>

      {issues.length === 0 && <p className="text-center text-gray-500">No issues reported yet.</p>}

      <div className="space-y-4">
        {issues.map((issue) => (
          // 💡 Using the custom CSS class
          <div key={issue._id} className="issue-card"> 
            {editingId === issue._id ? (
              // Edit Form
              <div className="space-y-3">
                <input
                  value={editData.title}
                  onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                  className="w-full border p-2 rounded"
                />
                <textarea
                  value={editData.description}
                  onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                  className="w-full border p-2 rounded"
                  rows={3}
                />
                <div className="flex flex-wrap items-center gap-4">
                  <select
                      value={editData.category}
                      onChange={(e) => setEditData({ ...editData, category: e.target.value })}
                      className="border p-2 rounded"
                  >
                      <option value="Public">Public</option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="Environment">Environment</option>
                      <option value="Other">Other</option>
                  </select>
                  <select
                      value={editData.status}
                      onChange={(e) => setEditData({ ...editData, status: e.target.value })}
                      className="border p-2 rounded"
                  >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                  </select>
                </div>
                <div className="flex space-x-2 mt-4">
                    <button 
                      onClick={() => handleUpdate(issue._id)}
                      className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700"
                    >
                        Save
                    </button>
                    <button 
                      onClick={() => setEditingId(null)}
                      className="bg-gray-500 text-white px-4 py-2 rounded text-sm hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                </div>
              </div>
            ) : (
              // Read-only view
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-2 md:mb-0">
                  <h3>{issue.title}</h3>
                  <p>{issue.description.substring(0, 100)}...</p>
                  <p className="text-xs text-gray-400 mt-1">Category: {issue.category}</p>
                </div>
                <div className="flex items-center space-x-3 mt-2 md:mt-0">
                  <span className={getStatusBadge(issue.status)}>{issue.status}</span>
                  {/* 💡 Using the custom CSS class for Edit/Delete buttons */}
                  <div className="buttons"> 
                      <button onClick={() => startEdit(issue)}>Edit</button>
                      <button onClick={() => handleDelete(issue._id)}>Delete</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}