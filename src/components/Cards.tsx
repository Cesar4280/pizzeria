import { useState, useEffect } from "react";

import { Pizza } from "../models/pagination";
import { cardList } from "../services/pizza";

import Pagination from "./Pagination";

import "../styles/Cards.css";

const TOTAL_PER_PAGE = 4;

export default function Cards(): JSX.Element {

    const [cards, setCards] = useState<Array<Pizza>>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => getCards(), []);

    const getCards = (): void => setCards(cardList);

    const getTotalPages = (): number => Math.ceil(cards.length / TOTAL_PER_PAGE); // 3

    const getSliceIndex = (subtract: number = 0): number => (currentPage - subtract) * TOTAL_PER_PAGE;

    const CardsPerPage = cards.slice(getSliceIndex(1), getSliceIndex()); // [0 - 11] => | 0-3 | 4-7 | 8-11 |

    // price.value.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 })

    const getCardComponent = (pizza: Pizza, index: number): JSX.Element => (
        <div key={index} className="card">
            <div className="card-header">
                <img
                    alt="salami"
                    width="185"
                    height="185"
                    loading="lazy"
                    className="card-image"
                    src={pizza.image} />
            </div>
            <div className="card-content">
                <h3 className="card-title">{pizza.name}</h3>
                <p className="card-text">{pizza.description}</p>
            </div>
            <div className="card-prices">
                {pizza.prices.map((price, index) =>
                    <span key={index} className={`card-price bg-gray-${index % 2 ? "dark" : "light"}`}>
                        <b>{price.size}</b>
                        <p>$ {price.value.toLocaleString("en-US")}</p>
                    </span>
                )}
            </div>
        </div>
    );

    return (
        <div className="card-pagination">
            <div className="card-list">
                {CardsPerPage.map(getCardComponent)}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={getTotalPages()}
                changeCurrentPage={pageNumber => setCurrentPage(pageNumber)} />
        </div>
    );

}