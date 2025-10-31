export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
      <h2 className="text-3xl font-extrabold text-indigo-900 mb-6">Contact Us</h2>

      <p className="max-w-xl text-center text-gray-700 mb-6">
        We value your feedback and are here to help you with any issues or suggestions
        related to the Community Issue Tracker. Reach out to us through any of the 
        following channels, and our team will get back to you promptly.
      </p>

      <div className="max-w-md w-full bg-white p-6 shadow-md rounded-lg space-y-4 text-center">
        <p className="text-gray-800"><strong>Email:</strong> support@communitytracker.com</p>
        <p className="text-gray-800"><strong>Phone:</strong> +91 98765 43210</p>
        <p className="text-gray-800"><strong>Instagram:</strong> @communitytracker</p>
        <p className="text-gray-800"><strong>Facebook:</strong> facebook.com/communitytracker</p>
        <p className="text-gray-800"><strong>Twitter:</strong> @communitytracker</p>
      </div>
    </div>
  );
}