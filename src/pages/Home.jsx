import Navbar from "../components/Navbar";
import Button from "../components/Button"; // ADD THIS LINE

function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-[calc(100vh-64px)] flex flex-col justify-center bg-gray-50 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            One Link for All Your Links
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Create your personal LinkNest and share all your social media,
            projects, and important links in one place.
          </p>

          <Button text="Get Started Free" variant="primary" />
        </div>
      </section>
    </>
  );
}

export default Home;
