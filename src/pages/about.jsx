export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6 py-10">
      <h2 className="text-4xl font-extrabold text-indigo-900 mb-6">About</h2>

      <div className="max-w-3xl text-gray-700 text-lg leading-relaxed space-y-6">
        <p>
          The <span className="font-semibold text-indigo-900">Community Issue Tracker</span> is a
          digital platform designed to empower citizens to report and monitor public issues within
          their neighborhoods. Whether it’s road damage, streetlight failures, garbage collection
          delays, or other civic concerns, the platform ensures that every voice is heard and every
          issue is addressed promptly.
        </p>

        <p>
          Our goal is to bridge the gap between the community and local authorities by providing an
          easy-to-use interface for reporting problems, tracking their status, and ensuring
          accountability in the resolution process. Transparency, accessibility, and collaboration
          are at the heart of our mission.
        </p>

        <p>
          The platform allows users to not only submit new issues but also view existing ones
          reported by others. This helps in preventing duplicate reports and encourages community
          awareness and participation. By keeping all issues visible and organized, we promote a
          more responsive and responsible civic environment.
        </p>

        <p>
          In the future, we plan to introduce features such as notifications for updates on reported
          issues, data-driven dashboards for local administrators, and AI-powered insights to help
          prioritize high-impact problems. Together, we can build smarter, cleaner, and safer
          communities.
        </p>

        <p className="font-medium text-indigo-800">
          Let’s work together to make our surroundings better—one issue at a time.
        </p>
      </div>
    </div>
  );
}