﻿import React, {useState, useEffect} from "react";
import {getRoverImages, RoverImages} from "../ApiFetch/RoversApiFetch";
import {DateInputForm} from "../DateInputForm/DateInputForm";

interface RoverGalleryImageProps {
    dateInput : string | null;
}

export function RoverGalleryImage(props : RoverGalleryImageProps) {
    const [roverImage, setRoverImage] = useState<RoverImages | null>(null);
    useEffect(() => {
        getRoverImages(props.dateInput)
            .then(image => setRoverImage(image));
    }, []);

    if (!roverImage) {
    return <div>Loading</div>
    }
    
    return (
        <div>
            <img src={roverImage?.img_src} alt=""/>
            <p>Sol: {roverImage?.sol}</p>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
        </div>
    );
    
}
