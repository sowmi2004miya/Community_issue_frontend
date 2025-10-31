import { useState } from "react";

export default function ReportIssue() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Core Fix: Check if all required fields are filled
  const isFormValid = title.trim() && description.trim() && category.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      alert("Please fill all fields before submitting.");
      return;
    }

    const issueData = { title, description, category };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/issues`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(issueData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Failed to submit issue");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (submitted) {
    return (
      <div className="text-center mt-20 p-8 bg-white shadow-xl rounded-lg max-w-sm mx-auto">
        <h2 className="text-2xl font-bold text-green-700 mb-2">✅ Thank You!</h2>
        <p className="text-gray-600">Your issue has been submitted successfully and will be resolved soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 shadow-xl rounded-lg mt-10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-800">Report an Issue</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter issue title"
        className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        placeholder="Describe the issue in detail..."
        rows={4}
      ></textarea>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-gray-300 p-3 mb-6 rounded-lg bg-white appearance-none focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled>Select Category</option> 
        <option value="Public">Public</option>
        <option value="Infrastructure">Infrastructure</option>
        <option value="Environment">Environment</option>
        <option value="Other">Other</option>
      </select>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-3 rounded-lg font-semibold transition duration-200 ${
          isFormValid
            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
            : "bg-gray-400 text-gray-700 cursor-not-allowed" 
        }`}
      >
        Submit
      </button>
    </form>
  );
}