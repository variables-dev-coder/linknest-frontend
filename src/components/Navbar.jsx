import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="h-16 flex items-center justify-between px-6">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          LinkNest
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-4">
          <Link to="/login"><Button>Login</Button></Link>
          <Link to="/signup"><Button variant="primary">Sign Up</Button></Link>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-3 px-6 pb-4">
          <Link to="/login" onClick={() => setOpen(false)}>
            <Button>Login</Button>
          </Link>
          <Link to="/signup" onClick={() => setOpen(false)}>
            <Button variant="primary">Sign Up</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
