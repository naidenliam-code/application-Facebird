import { useState } from "react";

const birdsData = [
  { id: 1, name: "Rougegorge", region: "Europe" },
  { id: 2, name: "Pigeon ramier", region: "Europe" },
  { id: 3, name: "Héron cendré", region: "Europe" }
];

export default function HomeTab() {
  const [likes, setLikes] = useState({});

  const toggleLike = (id) => {
    setLikes({ ...likes, [id]: !likes[id] });
  };

  return (
    <div>
      <h2>Fil d’actualité</h2>

      {birdsData.map((bird) => (
        <div key={bird.id} className="card">
          <h3>{bird.name}</h3>
          <p>📍 {bird.region}</p>
          <button onClick={() => toggleLike(bird.id)}>
            {likes[bird.id] ? "❤️ Aimé" : "🤍 J’aime"}
          </button>
        </div>
      ))}
    </div>
  );
}
