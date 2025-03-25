import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // Import the icon

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
 
const UsersChart = (props) => (
  <div className="p-4 bg-white shadow-lg rounded-xl ">
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={props.UsersLastYear}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
        <XAxis dataKey="date" tick={{ fill: "#555", fontSize: 12 }} />
        <YAxis tick={{ fill: "#555", fontSize: 12 }} />
        <Tooltip
          contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "8px" }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="Workers number"
          stroke="#4F46E5"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="Clients number"
          stroke="#16A34A"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

function WorkersList() {
  

  const [workersTableInfo, setWorkersBasicInfo] = useState([
    {
      workerID: -1,
      Username: "",
      Email: "",
      Phone: "",
      workingCityLocation: "",
      Rating: 0,
    },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost/brikolZone/getWorkersList.php")
      .then((response) => {
        setWorkersBasicInfo(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      }); 
  }, []);

  
  function handelDeleteBtn(workerID) {
    const response = confirm(
      "Are you sure you want to delete the worker with Id : " + workerID
    );
    if (response) {
      axios
        .get(`http://localhost/brikolZone/deletWorker.php?workerID=${workerID}`)
        .then((response) => {
          console.log(response);
          if (response.data.success)
            alert("Worker with Id : " + workerID + " Deleted succesfully");
          else alert("Worker with Id : " + workerID + "Was not Deleted!!");
        })
        .catch((error) => {
          alert("Worker with Id : " + workerID + "Was not Deleted!!");
          console.error("There was an error fetching the data!", error);
        });
    }
  }
  return (
    <div className=" overflow-x-auto ">
      <table className="w-full text-center  border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {[
              "Id",
              "Username",
              "Email",
              "Phone",
              "City",
              "Rating",
              "Actions",
            ].map((header) => (
              <th
                key={header}
                className="  text-sm border border-gray-300 px-4 py-2"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {workersTableInfo.map((element, index) => (
            <tr key={index} className="text-xs">
              <td className="border border-gray-300 px-4 py-2  ">
                {element.workerID}
              </td>
              <td className="border border-gray-300 px-4 py-2  ">
                {element.Username}
              </td>
              <td className="border   border-gray-300 px-4 py-2  ">
                {element.Email}
              </td>
              <td className="border border-gray-300 px-4 py-2  ">
                {element.Phone}
              </td>
              <td className="border border-gray-300 px-4 py-2   ">
                {element.workingCityLocation}
              </td>
              <td className="border border-gray-300 px-4 py-2   ">
                {element.Rating}
              </td>
              <td className="border  border-gray-300 px-4 py-2">
                <div className="flex   gap-2">
                  <button
                    onClick={() => handelDeleteBtn(element.workerID)}
                    className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <Link to={`/components/workerProfile/${element.workerID}`}>
                    <button className="px-3 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600">
                      Details
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 
function ClientsList() {
  const [clientsTableInfo, setClientsTableInfo] = useState([
    {
      clientID: -1,
      fullName: "client",
      email: "client@example.com",
      inscriptionDate: "12/12/2000",
      postsCreated: 0,
      image:
        "https://as2.ftcdn.net/v2/jpg/04/75/00/99/1000_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost/brikolZone/getClientsList.php")
      .then((response) => {
        setClientsTableInfo(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  function handelDeleteBtn(clientID) {
    const response = confirm(
      "Are you sure you want to delete the client with Id: " + clientID
    );
    if (response) {
      axios
        .get(`http://localhost/brikolZone/deleteClient.php?clientID=${clientID}`)
        .then((response) => {
          console.log(response);
          if (response.data.success)
            alert("Client with Id: " + clientID + " deleted successfully");
          else alert("Client with Id: " + clientID + " was not deleted!");
        })
        .catch((error) => {
          alert("Client with Id: " + clientID + " was not deleted!");
          console.error("There was an error fetching the data!", error);
        });
    }
  }

  return (
    <div className=" overflow-x-auto ">
      <table className="w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {[
              "Id",
              "Image",
              "Full Name",
              "Email",
              "Inscription Date",
              "Posts Created",
              "Actions",
            ].map((header) => (
              <th
                key={header}
                className="  text-sm border border-gray-300 px-4 py-2"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {clientsTableInfo.map((element, index) => (
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
                {element.postsCreated}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => handelDeleteBtn(element.clientID)}
                    className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <Link to={`/components/clientProfile/${element.clientID}`}>
                    <button className="px-3 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600">
                      Details
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

 


function Users() {

  const ChartInfo =  [
      { date: "01-2024", "Workers number": 22,  "Clients number": 10 },
      { date: "02-2024", "Workers number": 25,  "Clients number": 10 },
      { date: "03-2024", "Workers number": 42,  "Clients number": 20 },
      { date: "04-2024", "Workers number": 52,  "Clients number": 23 },
      { date: "05-2024", "Workers number": 72,  "Clients number": 26 },
      { date: "06-2024", "Workers number": 92,  "Clients number": 40 },
      { date: "07-2024", "Workers number": 82,  "Clients number": 60 },
      { date: "08-2024", "Workers number": 272, "Clients number": 86 },
      { date: "09-2024", "Workers number": 282, "Clients number": 166 },
      { date: "10-2024", "Workers number": 292, "Clients number": 156 },
      { date: "11-2024", "Workers number": 522, "Clients number": 313 },
      { date: "12-2024", "Workers number": 822, "Clients number": 450 },
    ]
  ;


  return (
    <div className="mx-6 flex flex-col ">
      <h1 className="font-bold my-3 text-2xl text-center">Users Details</h1>

      <div className="flex  items-center   border rounded-lg mb-4">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-gray-500 mx-2"
        />
        <input
          type="text"
          placeholder="Search for users.."
          className="p-2 w-full  border-1 rounded-lg text-sm  "
        />
      </div>
      <div className="m-2">
        <h2 className="font-semibold mb-1"> Clients and workers numbers </h2>

        <UsersChart UsersLastYear={ChartInfo} />
      </div>

      <h2 className="font-semibold mt-4 mb-2"> Workers List: </h2>

      <WorkersList  />
      <h2 className="font-semibold mt-4 mb-2"> Clients List: </h2>

      <ClientsList />
    </div>
  );
}
export default Users;
