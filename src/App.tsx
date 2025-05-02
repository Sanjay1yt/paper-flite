import { Routes, Route, Navigate } from "react-router-dom";
import { Collections } from "./components/Document-Collections/Collections.tsx";
import { SideBar } from "./components/SideBar.tsx";
import "./styles/App.css";
import ComingSoon from "./components/ComingSoon.tsx";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="app-layout">
      <SideBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/media" />} />
          <Route path="/media" element={<Collections />} />
          <Route path="/search" element={<ComingSoon title="Recent Search" />} />
          <Route
            path="/layers"
            element={<ComingSoon title="Layers" />}
          />
          <Route path="/chats" element={<ComingSoon title="Chats" />} />
          <Route path="/performance" element={<ComingSoon title="Performance Tracking" />} />
          <Route path="/history" element={<ComingSoon title="History" />} />
          <Route path="/settings" element={<ComingSoon title="Settings" />} />
          <Route path="/apps" element={<ComingSoon title="Apps Overview" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;