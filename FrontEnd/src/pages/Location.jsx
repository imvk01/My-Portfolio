import React from "react";
import { AiOutlineEnvironment, AiOutlineArrowRight } from "react-icons/ai";
import backgroundImage from "./gallery/location.jpg";
import GoogleMapComponent from "../components/GoogleMapComponent";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function Location() {
  const clinicLocationLink =
    "https://www.google.com/maps/dir//Jindal+Hospital,+Main+Rd,+near+Manglam+Lab,+Mahavir+Colony,+Dayanand+Colony,+New+Model+Town+Exyension,+Model+Town,+Hisar,+Haryana+125001/@29.1317444,75.662682,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x391233be9964f193:0x3a89fa8ebd2f9bac!2m2!1d75.7450834!2d29.1317696?entry=ttu";

  const handleGetDirections = () => {
    window.open(clinicLocationLink, "_blank");
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/book-appointment");
  };

  return (
    <div className="min-h-screen overflow-y-auto">
      {/* Top Image with Text */}
      <div className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center">
        <img
          src={backgroundImage}
          alt="Location"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4 py-2 bg-white/80 rounded-xl text-center font-semibold">
            <span className="text-blue-600 font-extrabold tracking-tight">
              Neuro
            </span>
            <span className="text-green-600 font-extrabold tracking-tight">
              Revive
            </span>
            <span className="text-6xl px-2 font-bold bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 bg-clip-text text-transparent animate-gradient-move">
              360
            </span>
            <br/>
            <span className="text-3xl md:text-4xl uppercase px-2 font-bold bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent animate-gradient-move">  Our Location</span>
          </p>
        </div>
      </div>

      {/* Address + Map Section */}
      <div className="flex flex-col lg:flex-row bg-gray-100">
        {/* Address Box */}
        <div className="flex-1 lg:flex-[3] flex flex-col items-center py-8 px-6 bg-gradient-to-r from-green-100 to-blue-200">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 text-center flex items-center mb-2">
            <AiOutlineEnvironment className="mr-2" />
            NeuroRevive 360 Address
          </h2>
          <p className="text-center text-sm md:text-lg mt-2 p-2 font-thin tracking-wide">
            NeuroRevive 360, Old Phagwara Road Near Minhas Advocate, Jalandhar
            Cantt, (144005)
          </p>

          <div className="flex flex-col items-center mt-6 space-y-4">
            <button
              onClick={handleGetDirections}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full flex items-center transition duration-300"
            >
              <AiOutlineArrowRight className="mr-2" /> Get Directions
            </button>

            <button
              onClick={handleClick}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full flex items-center transition duration-300"
            >
              <FontAwesomeIcon icon={faCalendar} className="mr-2" /> Send
              Enquiry
            </button>
          </div>
        </div>

        {/* Map Box */}
        <div className=" lg:flex-[10] w-full h-[400px] md:h-[500px]">
          <GoogleMapComponent locationLink={clinicLocationLink} />
        </div>
      </div>
    </div>
  );
}

export default Location;
