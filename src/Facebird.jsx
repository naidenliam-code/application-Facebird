import { useState } from "react";
import HomeTab from "./HomeTab";
import ExploreTab from "./ExploreTab";

export default function Facebird() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="app">
      <header className="header">🐦 FaceBird</header>

      <main className="content">
        {activeTab === "home" && <HomeTab />}
        {activeTab === "explore" && <ExploreTab />}
      </main>

      <nav className="nav">
        <button onClick={() => setActiveTab("home")} className={activeTab === "home" ? "active" : ""}>
          🏠
        </button>
        <button onClick={() => setActiveTab("explore")} className={activeTab === "explore" ? "active" : ""}>
          🔍
        </button>
      </nav>
    </div>
  );
}
