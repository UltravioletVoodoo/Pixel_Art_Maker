import { getDimensions } from "../hooks/getDimensions";
import getMousePos from "../hooks/getMousePosition";
import { useEffect, useState } from "react";

import "../styles/pixelGrid.css";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

export default function PixelGrid() {
    const numCells = 4;

    const dimensions = getDimensions();
    let canvasDim = Math.min(dimensions.width, dimensions.height) * 0.6; // Canvas is a square with the smallest dimension as a base

    const mousePos = getMousePos();

    let gridPoints = convertPositionToGrid(mousePos, canvasDim, numCells);

    const [gridRepresentation, setGridRep] = useState(getBlankGrid(numCells));

    useEffect(() => init(gridRepresentation, setGridRep, gridPoints, numCells), []);

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

function init(gridRepresentation, setGridRep, gridPoints, numCells) {

    function handleCanvasClick() {
        // setGridRep(makePoint1(gridRepresentation, gridPoints));
    }

    setGridRep(getBlankGrid(numCells));

    let canvas = document.getElementById("pixelGrid");

    canvas.addEventListener("click", handleCanvasClick);
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

function getBlankGrid(numCells) {
    let result = [];
    let cellsPerRow = Math.sqrt(numCells);
    let x = 0;
    while (x < cellsPerRow) {
        result.push(getRowWithAllFalse(cellsPerRow));
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