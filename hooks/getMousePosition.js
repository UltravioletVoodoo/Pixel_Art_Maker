import { useState , useEffect } from 'react';

export default function getMousePos() {
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {init(setPosition)}, []);

    return position;
}

function init(setPosition) {

    function handleMouseMove(evt) {
        let canvas = document.getElementById("pixelGrid");
        let rect = canvas.getBoundingClientRect();
        setPosition({
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        });
    }

    let canvas = document.getElementById("pixelGrid");
    canvas.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
}