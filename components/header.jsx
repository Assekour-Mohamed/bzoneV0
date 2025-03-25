import image from "../assets/brikolZone.png";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Close the dropdown if the user clicks outside of it
  const handleClickOutside = (e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent event from propagating to the document
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-800 text-white p-2">
      <div className="flex justify-between items-center">
        <Link to="/components/overview">
          <h1 className="text-xl px-4 font-bold">bZone</h1>
        </Link>
        {props.isAuthentecated ? (
          <div className="relative">
            <button
              ref={buttonRef}
              className="bg-gray-700 hover:bg-gray-600 text-sm text-white px-4 py-1  rounded-t-md flex items-center justify-center"
              onClick={toggleDropdown}
            >
              <span className="pr-3">{props.admin.name}</span>
              <img
                src={props.admin.photo}
                className="rounded-full w-10 h-10 object-cover"
                alt="admin Photo"
              />
            </button>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute  right-0 rounded-b-md border-t-2  w-full bg-gray-700 text-white shadow-xl   z-10"
              >
                <ul className="py-2 ">
                  <li className="px-4 rounded hover:bg-gray-800 text-xs py-2 hover:bg-gray-700">
                    <a href="#">Admin Info</a>
                  </li>
                  <li className="px-4 hover:bg-gray-800 text-xs py-2 hover:bg-gray-700">
                    <a href="#">Log out</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <button className="bg-gray-700 hover:bg-gray-600 text-sm text-white px-4 py-1 rounded-md flex items-center justify-center">
            log in
            <FontAwesomeIcon className="pl-4 text-xl" icon={faRightToBracket} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
