import labrodore from "../assets/images/Labro.png";
import shibu from "../assets/images/Shibu.png";
import korgi from "../assets/images/Korgi.png";
import duchland from "../assets/images/Duchland.png";
import beagle from "../assets/images/Bigle.png";

import { ImageSourcePropType } from "react-native";

export interface DogsMainPageType {
    id: number;
    title: string;
    image: ImageSourcePropType;
}


export const DOGSMAINPAGE_DATA: DogsMainPageType[] = [
    {
        id: 1,
        title: 'Лабрадор Ритривер',
        image: labrodore
    },
    {
        id: 2,
        title: 'Сиба-Ину',
        image: shibu
    },
    {
        id: 3,
        title: 'Корги',
        image: korgi
    },
    {
        id: 4,
        title: 'Немецкая овчарка',
        image: duchland 
    },
    {
        id: 5,
        title: 'Бигл',
        image: beagle
    }

]