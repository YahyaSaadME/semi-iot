import React, { useState, useEffect } from "react";
import database from "./firebase";
import "./App.css";
import { ref, onValue, set, get } from "firebase/database";
function App() {
  const [data, setData] = useState({
    temperature: 0,
    humidity: 0,
    mositure: 0,
    last_poured: 0,
    day: 0,
    pouring: false,
  });
  useEffect(() => {
    document.title = "Semiconductor project";
    const starCountRef = ref(database, "test/");
    onValue(starCountRef, (snapshot) => {
      const d = snapshot.val();
      setData(d);
    });
    console.log(new Date().getHours());
  }, []);

  return (
    <div
      style={{ backgroundColor: "black", minHeight: "100vh", paddingTop: 20 }}
    >
      <h2 style={{ textAlign: "center", paddingBottom: "10%" }}>
        Live Data Changes
      </h2>
      <div
        className="box"
        style={{ marginTop: "15%", flexDirection: "column", width: "100%" }}
      >
        {new Date().getHours() <= 12 ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              height="50"
              viewBox="0 -960 960 960"
              width="50"
            >
              <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z" />
            </svg>
            <div style={{ marginTop: 10 }}>Morning</div>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              fill="#fff"
              viewBox="0 -960 960 960"
              width="50"
            >
              <path d="M504-425Zm20 385H420l20-12.5q20-12.5 43.5-28t43.5-28l20-12.5q81-6 149.5-49T805-285q-86-8-163-43.5T504-425q-61-61-97-138t-43-163q-77 43-120.5 118.5T200-444v12l-12 5.5q-12 5.5-26.5 11.5T135-403.5l-12 5.5q-2-11-2.5-23t-.5-23q0-146 93-257.5T450-840q-18 99 11 193.5T561-481q71 71 165.5 100T920-370q-26 144-138 237T524-40Zm-284-80h180q25 0 42.5-17.5T480-180q0-25-17-42.5T422-240h-52l-20-48q-14-33-44-52.5T240-360q-50 0-85 34.5T120-240q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T40-240q0-83 58.5-141.5T240-440q60 0 109.5 32.5T423-320q57 2 97 42.5t40 97.5q0 58-41 99t-99 41H240Z" />
            </svg>
            <div style={{ marginTop: 10 }}>Night</div>
          </>
        )}
      </div>
      <h3 className="days-left">{25 - data.day} days left</h3>
      <div className="top">
        <div className="box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#fff"
            className="bi bi-thermometer-half"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z" />
            <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
          </svg>
          <div>{data.temperature}°C</div>
        </div>
        <div className="box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
          >
            <path d="M480-100q-133 0-226.5-92T160-416q0-63 30.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100ZM240-416h480q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416Z" />
          </svg>
          <div>{data.humidity}%</div>
        </div>
      </div>
      <div className="top">
        <div className="box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-moisture"
            viewBox="0 0 16 16"
          >
            <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z" />
          </svg>

          <div>{data.mositure.toFixed(2)}%</div>
        </div>
        <div className="box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
            fill="#fff"
          >
            <path d="M120-280h164q-17-17-31.5-37T227-360H120v80Zm360 0q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm253-320h107v-80H676q17 17 31.5 37t25.5 43ZM40-160v-320h80v40h83q-2-10-2.5-19.5T200-480q0-117 81.5-198.5T480-760h360v-40h80v320h-80v-40h-83q2 10 2.5 19.5t.5 20.5q0 117-81.5 198.5T480-200H120v40H40Zm80-120v-80 80Zm720-320v-80 80ZM480-480Zm0 120q-33 0-56.5-23.5T400-440q0-23 9.5-45.5T446-550l34-50 34 50q27 42 36.5 64.5T560-440q0 33-23.5 56.5T480-360Z" />
          </svg>
          <div style={{textAlign:"end"}}>{data.pouring ? "Pouring" : "Not Pouring"}</div>
        </div>
      </div>

      <div className="footer">
        <div>
          <p style={{ color: "gray" }}>Plant name</p>
          <p>Tomato</p>
        </div>
        <div style={{ marginTop: "10px" }}>
          <p style={{ color: "gray" }}>Pouring time</p>
          <p>8:30 AM</p>
        </div>
        <div style={{ marginTop: "10px" }}>
          <p style={{ color: "gray" }}>Location</p>
          <p>
            Potheri, Chengalpattu dist, <br></br> Tamil Nadu 637702
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
