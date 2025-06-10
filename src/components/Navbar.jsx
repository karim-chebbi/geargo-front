import { useEffect, useRef, useState } from "react";
import { Menu, X, User, LayoutDashboard } from "lucide-react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lougoutUser } from "../JS/actions/authActions";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const isAuth = useSelector(state=> state.authReducer.isAuth)

  const user = useSelector(state=> state.authReducer.user)

  // console.log(isAuth)

  const dropdownRef = useRef(null);

  const navigate = useNavigate()

  const dispatch = useDispatch()

   useEffect(() => {
     const handleClickOutside = (event) => {
       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
         setProfileOpen(false);
       }
     };

     document.addEventListener("mousedown", handleClickOutside);
     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow" ref={dropdownRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div onClick={() => navigate("/")} className="flex-shrink-0">
            <Logo />
          </div>

          {/* Center nav (desktop only) */}
          <div className="hidden lg:flex space-x-6">
            <Link
              to="/"
              className="px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
            >
              Home
            </Link>
            {isAuth && <Link
              to="/showroom"
              className="px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
            >
              Showroom
            </Link>}
            <Link
              to="/contact"
              className="px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
            >
              Contact
            </Link>
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex space-x-4 items-center">
            {!isAuth && (
              <>
                <Link
                  to="/login"
                  className="px-3 py-2 rounded hover:bg-gray-100 text-gray-700 cursor-pointer"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-2 rounded hover:bg-gray-100 text-gray-700 cursor-pointer"
                >
                  Register
                </Link>
              </>
            )}

            {/* Dashboard Icon */}
            {isAuth && (
              <Link
                to="/dashboard"
                className="flex items-center px-3 py-2 rounded hover:bg-gray-100 text-gray-700 cursor-pointer"
              >
                <LayoutDashboard className="w-5 h-5 mr-1" />
                Dashboard
              </Link>
            )}

            {/* Profile dropdown */}
            {isAuth && (
              <>
                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center px-3 py-2 rounded hover:bg-gray-100 text-gray-700 cursor-pointer"
                  >
                    <User className="w-5 h-5" />
                  </button>
                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md py-2 z-50">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Settings
                      </Link>
                      <Link
                        onClick={() => dispatch(lougoutUser(navigate))}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Disconnect
                      </Link>
                    </div>
                  )}
                </div>

                <p>
                  Hello, <b>{user.firstName}</b>
                </p>
              </>
            )}
          </div>

          {/* Mobile burger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-700"
            >
              {mobileOpen ? (
                <X className="h-6 w-6 cursor-pointer" />
              ) : (
                <Menu className="h-6 w-6 cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 space-y-3 bg-white border-t">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
          >
            Home
          </Link>
          {isAuth && <Link
            to="/showroom"
            className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
          >
            Showroom
          </Link>}
          <Link
            to="/contact"
            className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
          >
            Contact
          </Link>
          {!isAuth && (
            <>
              <Link
                to="/login"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Register
              </Link>
            </>
          )}
          <Link
            to="/dashboard"
            className="px-4 py-2 hover:bg-gray-100 text-gray-700 flex items-center"
          >
            <LayoutDashboard className="w-5 h-5 mr-2" />
            Dashboard
          </Link>
          {isAuth && (
            <div className="border-t pt-2">
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Settings
              </Link>
              <Link
                onClick={() => dispatch(lougoutUser(navigate))}
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Disconnect
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
