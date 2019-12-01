import React, { useState, useEffect } from 'react';

export default function getCanvasDimensions() {
    const [dimensions, setDimensions] = useState({width: 0, height: 0});

    useEffect(function() {init(setDimensions)}, []);

    return Math.min(dimensions.width, dimensions.height) * 0.6;
}

function init(setDimensions) {

    function handleResize() {
        setDimensions({width: window.innerWidth, height: window.innerHeight});
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    
    return function() {
        window.removeEventListener("resize", handleResize);
    }
}