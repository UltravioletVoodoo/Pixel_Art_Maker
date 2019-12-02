import React, { useState, useEffect } from 'react';

export default function getCanvasDimensions() {
    const [dimensions, setDimensions] = useState({width: 0, height: 0});

    useEffect(function() {init(setDimensions)}, []);

    return Math.min(dimensions.width, dimensions.height);
}

function init(setDimensions) {

    function handleResize() {
        setDimensions({width: window.innerWidth * (10/24), height: window.innerHeight});
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    
    return function() {
        window.removeEventListener("resize", handleResize);
    }
}