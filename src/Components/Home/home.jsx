import "./home.css";
import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import axios from "axios";
import { AuthContext } from "../../AuthContext";

function Home() {
  const location = useLocation();
  const { token, user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (token) {
      axios
        .get("/events", { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => setEvents(res.data));
    }
  }, [token]);

  return (
    <div className="App">
      <div className="PPhome">
        <span>Pharaoh's Papyrus</span>
        <div className="underlineHome"></div>
      </div>

      <div className="welcome">
        <span>Welcome {user?.name || user?.email || "User"}!</span>
      </div>

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="containerHome">
        <h3>Your Events</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Start</th>
              <th>End</th>
              <th>Category</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {events.map((ev) => (
              <tr key={ev._id}>
                <td>{ev.title}</td>
                <td>{ev.description}</td>
                <td>{ev.start ? new Date(ev.start).toLocaleString() : ""}</td>
                <td>{ev.end ? new Date(ev.end).toLocaleString() : ""}</td>
                <td>{ev.category}</td>
                <td>{ev.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;