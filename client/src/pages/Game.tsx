import { useEffect, useState } from "react"
import "../App.css"
import { useNavigate } from "react-router-dom"
import { DIGITIAL, EMPTY, PRIZE } from "../utils/endPoints"

type CandyType = "empty" | "prize" | "digitial"

function PreGame() {
    const [candies, setCandies] = useState<CandyType[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        const initialPrize = [
            ...Array(5).fill("empty"),
            ...["prize", "digitial", "prize", "digitial", "prize"],
        ]
        const snuffled = initialPrize
            .map(item => ({ item, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ item }) => item);

        setCandies(snuffled)

    }, [])

    const handleClick = (type: CandyType) => {
        if (type === "prize") {
            navigate(PRIZE)
        } else if (type === "digitial") {
            navigate(DIGITIAL)
        } else {
            navigate(EMPTY)
        }
    }


    return (
        <div className="gamePage">
            <div className="center">
                <h1>Select one ferrero rocher</h1>
                <h2>for a chance to win</h2>
            </div>
            <div className="center">
                {candies.map((candy, i) => {
                    return (
                        <img
                            key={i}
                            src="/candy.png"
                            alt="Nothing"
                            onClick={() => handleClick(candy)}
                            style={{
                                width: "40px",
                                height: "40px",
                                margin: "5px",
                                borderRadius: "100%",
                                cursor: "pointer"
                            }}
                        />
                    )
                })}
            </div>
            <div className="center">
                <h2>tap to select</h2>
            </div>
        </div>
    )
}

export default PreGame