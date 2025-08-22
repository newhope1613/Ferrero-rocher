import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { DIGITIAL, EMPTY, PRIZE } from "../utils/endPoints";
import api from "../http/api";

type CandyType = "empty" | "prize" | "digitial";

function PreGame() {
  const [candies, setCandies] = useState<CandyType[]>([]);
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const initialPrize = [
      ...Array(5).fill("empty"),
      ...["prize", "digitial", "prize", "digitial", "prize"],
    ];
    const snuffled = initialPrize
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);

    const token = localStorage.getItem("user");
    if (token) {
      const decoded = jwtDecode<{ id: number; email: string }>(token);
      console.log(decoded.email);
      setEmail(decoded.email);
    }
    console.log(Date.now());

    setCandies(snuffled);
  }, []);

  const digitialPrize = async (email: string) => {
    try {
      await api.post("game/digital", { email });
    } catch (e) {
      console.log("Ошибка отправки");
    }
  };

  const handleClick = (type: CandyType) => {
    if (type === "prize") {
      navigate(PRIZE);
    } else if (type === "digitial") {
      digitialPrize(email);
      navigate(DIGITIAL);
    } else {
      navigate(EMPTY);
    }
  };

  // Группируем конфеты по рядам для создания формы ёлочки
  const treeRows = [
    candies.slice(0, 1), // 1 конфета (верхушка)
    candies.slice(1, 3), // 2 конфеты
    candies.slice(3, 6), // 3 конфеты
    candies.slice(6, 10), // 4 конфеты (ствол тоже может быть здесь)
  ];

  return (
    <div className="gamePage">
      <div className="center">
        <h1>Select one ferrero rocher</h1>
        <h2>for a chance to win</h2>
      </div>
      <div>
        {treeRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="tree-row"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            {row.map((candy, candyIndex) => {
              const globalIndex =
                rowIndex === 0
                  ? 0
                  : rowIndex === 1
                  ? candyIndex + 1
                  : rowIndex === 2
                  ? candyIndex + 3
                  : candyIndex + 6;
              return (
                <img
                  key={globalIndex}
                  src="/candy.png"
                  alt="Nothing"
                  onClick={() => handleClick(candy)}
                  className="candy"
                  style={{
                    width: "50px",
                    height: "50px",
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="center">
        <h2>tap to select</h2>
      </div>
    </div>
  );
}

export default PreGame;
