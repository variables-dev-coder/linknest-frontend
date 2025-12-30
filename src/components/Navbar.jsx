function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white shadow">
      <h1 className="text-xl font-bold text-indigo-600">
        LinkNest
      </h1>

      <div className="space-x-4">
        <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">
          Login
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
