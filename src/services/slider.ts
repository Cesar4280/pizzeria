import { getImageUri } from "../utils/uri";

import { SliderItem, SliderItemName } from "../models/slider";

const imagesName: Array<SliderItemName> = [
    { name: "crepe" },
    { name: "pizza" },
    { name: "lasagna" },
    { name: "entradas" },
    { name: "bebidas" },
    { name: "pastas" },
    { name: "stromboli" },
    { name: "burger" },
    { name: "pasta" }
];

const getImagesUri = (imagesName: Array<SliderItemName>): Array<SliderItem> => {
    return imagesName.map(({ name }) => ({ name, uri: getImageUri(name) }));
};

export const imagesUriList = getImagesUri(imagesName);