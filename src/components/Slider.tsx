import { useState, useEffect } from "react";

import { SliderItem } from '../models/slider';
import { imagesUriList } from "../services/slider";

import "../styles/Slider.css";

export default function Slider(): JSX.Element {

    const ITEMS_TO_SHOW = 6;

    const [images, setImages] = useState<SliderItem[]>([]);
    const [slideItems, setSlideItems] = useState<SliderItem[]>([]);

    useEffect(() => {
        setImages(imagesUriList);
        if (images.length) {
            const length = ITEMS_TO_SHOW > images.length ? images.length : ITEMS_TO_SHOW;
            setSlideItems(images.slice(0, length));
        }
    }, [images.length]);

    const handleClickPrev = () => {
        const copy = images.slice();
        const first = copy.splice(0, 1);
        const items = copy.concat(first);
        const itemsToShow = items.slice(0, ITEMS_TO_SHOW);
        setSlideItems(itemsToShow);
        setImages(items);
    };

    const handleClickNext = () => {
        const copy = images.slice();
        const last = copy.splice(-1, 1);
        const items = last.concat(copy);
        const itemsToShow = items.slice(0, ITEMS_TO_SHOW);
        setSlideItems(itemsToShow);
        setImages(items);
    };

    const generateSlideItems = (items: Array<SliderItem>): Array<JSX.Element> => {
        return items.map((item, index) => (
            <div key={index} className="slider-item">
                <a href="http://localhost:3000/">
                    <img src={item.uri} alt={item.name} loading="lazy" />
                    Crepes
                </a>
            </div>
        ));
    };

    return (
        <div className="slider-section">
            <div className="slider-container">
                <button className="slider-control" onClick={handleClickPrev}>
                    <i className="fas fa-angle-left"></i>
                </button>
                {generateSlideItems(slideItems)}
                <button className="slider-control" onClick={handleClickNext}>
                    <i className="fas fa-angle-right"></i>
                </button>
            </div>
        </div>
    );
    
}