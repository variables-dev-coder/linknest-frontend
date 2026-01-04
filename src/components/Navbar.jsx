import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="h-16 bg-white border-b flex items-center justify-between px-6">
      <Link to="/" className="text-xl font-bold text-indigo-600">
        LinkNest
      </Link>

      <div className="flex gap-4">
        <Link to="/login">
          <Button>Login</Button>
        </Link>

        <Link to="/signup">
          <Button variant="primary">Sign Up</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
