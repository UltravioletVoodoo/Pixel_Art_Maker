import { getDimensions } from "../hooks/getDimensions";
import getMousePos from "../hooks/getMousePosition";
import { useEffect } from "react";

import "../styles/pixelGrid.css";

export default function PixelGrid() {
    const numCells = 4;

    const dimensions = getDimensions();
    let canvasDim = Math.min(dimensions.width, dimensions.height) * 0.6; // Canvas is a square with the smallest dimension as a base

    const mousePos = getMousePos();
    let gridPoints = convertPositionToGrid(mousePos, canvasDim, numCells);

    useEffect(() => drawRectOnGrid(gridPoints, canvasDim, numCells), []);

    return (
        <div className="centered">
            <p>Window's dimensions are {dimensions.width} by {dimensions.height}</p>
            <p>Mouse was last seen on canvas at point: ({mousePos.x} , {mousePos.y})</p>
            <p>Last active gridpoint based on position: ({gridPoints.x} , {gridPoints.y})</p>
            <canvas className="pixelGrid" id="pixelGrid" width={canvasDim} height={canvasDim}></canvas>
        </div>
    );
}

function convertPositionToGrid(pos, canvasDim, numCells) {
    let cellsPerRow = Math.sqrt(numCells);
    let cellSize = canvasDim / cellsPerRow;

    return {
        x: convertPositionToGridValues(pos.x, cellSize, cellsPerRow),
        y: convertPositionToGridValues(pos.y, cellSize, cellsPerRow)
    };
}

function convertPositionToGridValues(val, cellSize, cellsPerRow) {
    let result = Math.ceil(val / cellSize) - 1;
    if (result > cellsPerRow - 1) result = cellsPerRow - 1;
    if (result < 0) result = 0;
    return result;
}

function drawRectOnGrid(gridPoints, canvasDim, numCells) {
    // let canvas = document.getElementById("pixelGrid");
    // let ctx = canvas.getContext("2d");
    // let p = convertGridToPx(gridPoints, canvasDim, numCells)
    // ctx.fillRect(0,0,50,50);
    console.log("I think i drew a square :P");
}

function convertGridToPx(gridPoints, canvasDim, numCells) {
    let scale = canvasDim / Math.sqrt(numCells);
    return {
        x: gridPoints.x * scale,
        y: gridPoints.y * scale,
        w: (gridPoints.x + 1) * scale,
        h: (gridPoints.y + 1) * scale
    }
}