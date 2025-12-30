import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          One Link for All Your Links
        </h2>

        <p className="text-gray-600 max-w-xl mb-6">
          Create your personal LinkNest and share all your social media,
          projects, and important links in one place.
        </p>

        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-700">
          Get Started Free
        </button>
      </section>
    </>
  );
}

export default Home;
