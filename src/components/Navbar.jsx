import Button from "./Button";

function Navbar() {
  return (
    <nav className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-xl font-bold text-indigo-600">
        LinkNest
      </h1>

        <div className="flex gap-4 border border-red-500">

        <Button text="Login" />
        <Button text="Sign Up" variant="primary" />
      </div>
    </nav>
  );
}

export default Navbar;
