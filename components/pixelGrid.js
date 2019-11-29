import { getDimensions } from "../hooks/getDimensions";
import getMousePos from "../hooks/getMousePosition";
import { useEffect, useState } from "react";

import "../styles/pixelGrid.css";

export default function PixelGrid() {
    const rowLen = 2;

    const dimensions = getDimensions();
    let canvasDim = Math.min(dimensions.width, dimensions.height) * 0.6; // Canvas is a square with the smallest dimension as a base

    const mousePos = getMousePos();

    let gridPoints = convertPositionToGrid(mousePos, canvasDim, rowLen);

    const [gridRepresentation, setGridRep] = useState(getBlankGrid(rowLen));

    useEffect(() => init(gridRepresentation, setGridRep, gridPoints, rowLen), []);

    return (
        <div className="centered">
            <p>Window's dimensions are {dimensions.width} by {dimensions.height}</p>
            <p>Mouse was last seen on canvas at point: ({mousePos.x} , {mousePos.y})</p>
            <p>Last active gridpoint based on position: ({gridPoints.x} , {gridPoints.y})</p>
            <div>
                <p>Grid Representation</p>
                <p>{gridRepresentation[0][0]} {gridRepresentation[0][1]}</p>
                <p>{gridRepresentation[1][0]} {gridRepresentation[1][1]}</p>
            </div>
            <canvas className="pixelGrid" id="pixelGrid" width={canvasDim} height={canvasDim}></canvas>
        </div>
    );
}

function init(gridRepresentation, setGridRep, gridPoints, rowLen) {

    function handleCanvasClick() {
        // setGridRep(makePoint1(gridRepresentation, gridPoints));
    }

    setGridRep(getBlankGrid(rowLen));

    let canvas = document.getElementById("pixelGrid");

    canvas.addEventListener("click", handleCanvasClick);
}

function convertPositionToGrid(pos, canvasDim, rowLen) {
    let cellSize = canvasDim / rowLen;

    return {
        x: convertPositionToGridValues(pos.x, cellSize, rowLen),
        y: convertPositionToGridValues(pos.y, cellSize, rowLen)
    };
}

function convertPositionToGridValues(val, cellSize, rowLen) {
    let result = Math.ceil(val / cellSize) - 1;
    if (result > rowLen - 1) result = rowLen - 1;
    if (result < 0) result = 0;
    return result;
}

function getBlankGrid(rowLen) {
    let result = [];
    let x = 0;
    while (x < rowLen) {
        result.push(getRowWithAllFalse(rowLen));
        x++;
    }
    return result;
}

function getRowWithAllFalse(n) {
    let result = [];
    let x = 0;
    while (x < n) {
        result.push(0);
        x++;
    }
    return result;
}

function makePoint1(grid, point) {
    console.log(point);

    grid[point.x][point.y] = 1;
    return grid;
}