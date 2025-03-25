import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faUsers,
  faHelmetSafety,
  faUserTie,
  faClipboardList, 
  faFolder
} from "@fortawesome/free-solid-svg-icons";



import axios from "axios";


function LastUsersList()
{
   const [UserssTableInfo, setClientsTableInfo] = useState([
     {
       clientID: -1,
       fullName: "client",
       email: "client@example.com",
       inscriptionDate: "12/12/2000",
       type: "c",
       image:
         "https://as2.ftcdn.net/v2/jpg/04/75/00/99/1000_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg",
     },
     {
       clientID: -2,
       fullName: "worker",
       email: "client@example.com",
       inscriptionDate: "12/12/2000",
       type: "w",
       image:
         "https://as2.ftcdn.net/v2/jpg/04/75/00/99/1000_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg",
     },
   ]);
  
    useEffect(() => {
      axios
        .get("http://localhost/brikolZone/getLastMonthUsers.php")
        .then((response) => {
          setClientsTableInfo(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });
    }, []);
  return (
    <div>
      <table className="w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 ">
            {[
              "Id",
              "Image",
              "Full Name",
              "Email",
              "Inscription Date",
              "type",
            ].map((header) => (
              <th
                key={header}
                className=" text-sm border border-gray-300 px-4 py-2"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {UserssTableInfo.map((element, index) => (
            <tr key={index} className="text-xs">
              <td className="border border-gray-300 px-4 py-2">
                {element.clientID}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={element.image}
                  className="rounded-full w-10 h-10 object-cover"
                  alt="admin Photo"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {element.fullName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {element.email}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {element.inscriptionDate}
              </td>

              <td className="border border-gray-300 px-4 py-2">
                {element.type === "w" ? (
                  <div className="bg-[#28a745]  text-white px-4 py-1 rounded-xl font-semibold">
                    <p>Worker</p>
                  </div>
                ) : (
                  <p className="bg-[#0d6efd] text-white px-4 py-1 rounded-xl font-semibold">
                    Client
                  </p>
                )}
              </td>
            </tr>
          ))}
          <tr className="font-semibold text-base">
            Count:{" "}
            <span className="font-bold text-lg">{UserssTableInfo.length}</span>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function LastPostsList() {
  const [PostsTableInfo, setClientsTableInfo] = useState([
    {
      jobPostID: -1,
      clientName : -1,
title :"Post 1",
city: "marrakech",
publishDate: "12/12/2001",
       
    },
     
  ]);

  useEffect(() => {
    axios
      .get("http://localhost/brikolZone/getLastMonthUsers.php")
      .then((response) => {
        setClientsTableInfo(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  return (
    <div>
      <table className="w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 ">
            {[
              "Id",
              "Client name",
              "Title",
              "City",
               "Publish Date",
            ].map((header) => (
              <th
                key={header}
                className=" text-sm border border-gray-300 px-4 py-2"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {PostsTableInfo.map((element, index) => (
            <tr key={index} className="text-xs">
              <td className="border border-gray-300 px-4 py-2">
                {element.jobPostID}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {element.clientName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {element.title}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {element.city}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {element.publishDate}
              </td>

               
            </tr>
          ))}
          <tr className="font-semibold text-base">
            Count:{" "}
            <span className="font-bold text-lg">{PostsTableInfo.length}</span>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


 function Overview() {
  const OverviewInfo1 = {
    totalWorkers: 99,
    totalClients: 202,
    totalRevenue: 12000,
    totalUsers: 303,
    totalJobCategories: 5,
    totalJobsPosts: 400,
  };
  const [OverviewInfo, setOverviewInfo] = useState();

  

  useEffect(() => {
    axios
      .get("http://localhost/brikolZone/getOverviewInfo.php")
      .then((response) => {
        setOverviewInfo(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  return (
    <div id="dvOverview" className="  flex flex-col   ">
      <h1 className="text-2xl font-semibold pt-4 text-gray-800">
        Overview statistics
      </h1>
      <div className="mt-4  ">
        <div className="grid sm:grid-cols-12 mb-8 gap-4 ">
          <div className="sm:col-span-8  bg-[#28a745] shadow-lg rounded-2xl p-6  text-center">
            <div className="flex items-center justify-center space-x-2">
              <FontAwesomeIcon icon={faDollarSign} size="3x" color="white" />
              <div>
                <h2 className=" text-white text-lg font-meduim">
                  Total Revenue
                </h2>
                <p className="text-4xl text-white font-bold   ">
                  {OverviewInfo1.totalRevenue}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="  sm:col-span-4  bg-[#0d6efd] shadow-lg rounded-2xl p-6   text-center">
            <div className="flex items-center justify-center space-x-2">
              <FontAwesomeIcon icon={faHelmetSafety} size="3x" color="white" />
              <div>
                <h2 className=" text-white text-lg font-meduim">Workers</h2>
                <p className=" text-white text-3xl font-bold   ">
                  {OverviewInfo1.totalWorkers}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-12 my-4 gap-4 ">
          <div className="sm:col-span-6   bg-[#364958] shadow-lg rounded-2xl p-6  text-center">
            <div className="flex items-center justify-center space-x-2">
              <FontAwesomeIcon icon={faUsers} size="3x" color="white" />
              <div>
                <h2 className=" text-white text-lg font-meduim">Users</h2>
                <p className="text-4xl text-white font-bold   ">
                  {OverviewInfo1.totalUsers}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="  sm:col-span-4  bg-[#55828B] shadow-lg rounded-2xl p-6   text-center">
            <div className="flex items-center justify-center space-x-2">
              <FontAwesomeIcon icon={faUserTie} size="3x" color="white" />
              <div>
                <h2 className=" text-white text-lg font-meduim">Clients</h2>
                <p className=" text-white text-3xl font-bold   ">
                  {OverviewInfo1.totalUsers}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-12  pt-4 gap-4 ">
          <div className="sm:col-span-7  bg-[#0dcaf0] shadow-lg rounded-2xl p-6  text-center">
            <div className="flex items-center justify-center space-x-2">
              <FontAwesomeIcon icon={faClipboardList} size="3x" color="white" />
              <div>
                <h2 className=" text-white text-lg font-meduim">Job Posts</h2>
                <p className="text-4xl text-white font-bold   ">
                  {OverviewInfo1.totalJobsPosts}{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="  sm:col-span-4  bg-[#ffc107] shadow-lg rounded-2xl p-6   text-center">
            <div className="flex items-center justify-center space-x-2">
              <FontAwesomeIcon icon={faFolder} size="3x" color="white" />
              <div>
                <h2 className=" text-white text-lg font-meduim">
                  Job Categories
                </h2>
                <p className=" text-white text-3xl font-bold   ">
                  {OverviewInfo1.totalJobCategories}
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-lg mt-6 mb-4">
          Last users registered last month
        </h2>
        <LastUsersList></LastUsersList>

        <h2 className="font-bold text-lg mt-6 mb-4">
          Last posts published last month
        </h2>
        <LastPostsList></LastPostsList>
      </div>
    </div>
  );
}
export default Overview;
