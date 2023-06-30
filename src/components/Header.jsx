import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from "./Provider/Provider";
import Swal from "sweetalert2";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "LogOut Successful",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch("https://physics-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);

  const useAdmin = allUsers.find((n) => n?.email == user?.email);

  return (
    <nav className="bg-gray-800  ">
      <div className="lg:flex justify-between">
        <div>
          <div className="max-w-8xl mx-auto    sm:px-6 lg:px-12 ">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <Link className="flex-shrink-0 ">
                  <img className=" h-8 w-8" src={logo} alt="Logo" />
                </Link>
                <Link className="flex-shrink-0">
                  <h2 className="text-white px-3 py-2 rounded-md text-sm font-medium">
                    RA Physics
                  </h2>
                </Link>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      to="/"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
                    {useAdmin?.role == "admin" ? (
                      <Link
                        to="/allUser"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        AllUsers
                      </Link>
                    ) : (
                      ""
                    )}
                    {useAdmin?.role == "admin" ? (
                      <Link
                        to="/addCourse"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        AddCourse
                      </Link>
                    ) : (
                      ""
                    )}
                    {useAdmin?.role == "admin" ? (
                      <Link
                        to="/allCourses"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        AllCourses
                      </Link>
                    ) : (
                      ""
                    )}
                    <Link
                      to="/vector"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Incourse
                    </Link>
                    <Link
                      to="/courseAvailable"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      My Programs
                    </Link>
                    <Link
                      to="/youtube"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      YouTube
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mr-2  flex md:hidden lg:hidden">
                <button
                  onClick={toggleNavbar}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                >
                  <svg
                    className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:flex items-center hidden lg:visible me-20">
          <div className="text-white me-3 my-1">
            {user ? (
              <div className="flex gap-2">
                <p>Hi,</p>
                {user.displayName}
                <img
                  className="rounded-full h-8 w-8"
                  src={user.photoURL}
                  alt=""
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            {user?.email ? (
              <button
                onClick={handleLogOut}
                className=" bg-green-300  px-4 py-2 rounded hover:bg-green-200 mr-2"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-green-300  px-4 py-2 rounded hover:bg-green-200 mr-2">
                  Login
                </button>
              </Link>
            )}
          </div>
          <div>
            {user?.email ? (
              ""
            ) : (
              <Link to="/register">
                <button className="bg-green-300   px-4 py-2 rounded hover:bg-green-200">
                  Register
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/allUser"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            AllUser
          </Link>
          <div>
            {useAdmin?.role == "admin" ? (
              <Link
                to="/addCourse"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                AddCourse
              </Link>
            ) : (
              ""
            )}
          </div>
          <Link
            to="/Lecture"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            CourseVideo
          </Link>

          <Link
            to="/vector"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Incourse
          </Link>
          <Link
            to="/courseAvailable"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            My Programs
          </Link>
          <Link
            to="/youtube"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            YouTube
          </Link>
          <div className="text-white">
            {user ? (
              <div className="my-2 flex gap-2">
                <p>Hi,</p>
                {user.displayName}
                <img
                  className=" rounded-full h-8 w-8"
                  src={user.photoURL}
                  alt=""
                />
              </div>
            ) : (
              ""
            )}
          </div>
          {user?.email ? (
            <button
              onClick={handleLogOut}
              className=" bg-green-300  px-4 py-2 rounded hover:bg-green-200 mr-2"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-green-300  px-4 py-2 rounded hover:bg-green-200 mr-2">
                Login
              </button>
            </Link>
          )}
          {user?.email ? (
            ""
          ) : (
            <Link to="/register">
              <button className="bg-green-300   px-4 py-2 rounded hover:bg-green-200">
                Register
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
