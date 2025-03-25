//import { useState } from 'react'
import Header from "./components/header.jsx";
import SidePannel from "./components/sidePannel.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./components/overview.jsx";
import WorkersList from "./components/users.jsx";
import WorkerProfile from "./components/workerProfile.jsx";
 import NotFound from "./components/notFound";
import { useState } from "react";

function App() {
  const [isAuthentecated, setIsAuthentecated] = useState(true);
  const [curentAdmin, setCurentAdmin] = useState({
    name: "moahmed assekour",
    photo:
      "https://as2.ftcdn.net/v2/jpg/04/75/00/99/1000_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg",
  });
  return (
    <div className="">
      <Router>
        <Header isAuthentecated={isAuthentecated} admin={curentAdmin} />
        {isAuthentecated ? (
          <div>
            <div className=" grid grid-cols-1 sm:grid-cols-12 ">
              <div className=" sm:col-span-2  ">
                {" "}
                <SidePannel />
              </div>
              <div className="sm:col-span-10 mx-8">
                <Routes>
                  <Route path="/" element={<Overview />} />
                  <Route path="/components/overview" element={<Overview />} />
                  <Route
                    path="/components/workersList"
                    element={<WorkersList />}
                  />
                  <Route
                    path="/components/workerProfile/:workerID"
                    element={<WorkerProfile />}
                  />

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        ) : (
          <h1>You should log in to see details</h1>
        )}
      </Router>
    </div>
  );
}

export default App;
