import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  User,
  MapPin,
  Mail,
  Link as LinkIcon,
  Users,
  BookOpen,
  Star,
} from "lucide-react";

const WorkerProfile = () => {
  const { workerID } = useParams();

  const nWorker = {
    ID: workerID,
    fullName: "someOne",
    phone: "123-456-7890",
    email: "someone@example.com",
    image: " ",
    Cover:
      'url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2000")',
    inscriptionDate: "2023-01-01",
    userName: "some1234",
    description: "Experienced painter offering top-notch services.",
    workingCityLocation: "Casablanca",
    rating: 4.7,
    jobCategories: ["workingJob" , "somthingElseBigger", "otherCat"],
  };
  const [worker, setWorkerInfo] = useState(nWorker);
  useEffect(() => {
    axios
      .get(`http://localhost/brikolZone/getWorkerInfo.php?workerID=${workerID}`)
      .then((response) => {
        setWorkerInfo(response.data);
        setWorkerInfo({
          ...response.data,
          jobCategories: ["workingJob", "somthingElseBigger", "otherCat"],

          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
          Cover:
            'url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2000")',
        });
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, [workerID]);
  return (
    <div id="dvWorkerProfile" className="min-h-screen   bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div
            className="h-48 w-full bg-cover bg-center"
            style={{
              backgroundImage: worker.Cover,
            }}
          />

          <div className="relative px-6 pb-6">
            {/* Profile Image */}
            <div className="absolute -top-16">
              <img
                src={worker.image}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="pt-20">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {worker.userName}
                  </h1>
                  <p className="text-gray-600">{worker.fullName}</p>
                </div>
                <button className="px-8 py-2 bg-[#198754] text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </button>
              </div>

              <div className="grid grid-rows gap-2 pb-5 border-b  ">
                {worker.jobCategories.map((element, index) => (
                  <div
                    className="border text-xs font-semibold rounded-lg w-max py-1 px-4"
                    key={index}
                  >
                    {element}
                  </div>
                ))}
              </div>

              <p className="text-gray-700 mt-4 mb-6">{worker.description}</p>

              {/* User Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  {worker.workingCityLocation}
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2" />
                  {worker.email}
                </div>
                <div className="flex items-center text-gray-600">
                  <LinkIcon className="w-5 h-5 mr-2" />
                  {worker.phone}
                </div>
              </div>

              <div className="border-t pt-4 flex flex-column gap-2">
                   <FontAwesomeIcon
                    icon={faStar}
                    size="2x"
                    color="#ffc107"
                  />

                  <h2 className="font-bold text-xl pt-1">{worker.rating}</h2>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkerProfile;
