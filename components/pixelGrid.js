import getCanvasDimensions from "../hooks/getCanvasDimensions";
import getMousePos from "../hooks/getMousePosition";
import { useEffect, useState, useRef } from "react";

import "../styles/pixelGrid.css";

export default function PixelGrid() {
    const rowLen = 3;
    const canvasDim = getCanvasDimensions();
    const mousePos = getMousePos();
    const gridPoints = convertPositionToGrid(mousePos, canvasDim, rowLen);
    const [gridRepresentation, setGridRep] = useState(getBlankGrid(rowLen));
    const c = useRef(null);


    // Every render we want to draw
    drawElements(c, canvasDim, gridRepresentation, rowLen);


    function handleCanvasClick() {
        setGridRep(makePoint1(gridRepresentation, gridPoints));
    }

    return (
        <div className="centered">
            <p>Mouse was last seen on canvas at point: ({mousePos.x} , {mousePos.y})</p>
            <p>Last active gridpoint based on position: ({gridPoints.x} , {gridPoints.y})</p>
            <p>{JSON.stringify(gridRepresentation)}</p>
            <canvas className="pixelGrid" id="pixelGrid" onClick={handleCanvasClick} ref={c} width={canvasDim} height={canvasDim}></canvas>
        </div>
    );
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
    grid = [...grid];
    grid[point.x][point.y] = 1;
    return grid;
}

function drawElements(canvas, canvasDim, gridRepresentation, rowLen) {
    let ctx = canvas.getContext("2d");
    
    let x = 0;
    while (x < gridRepresentation.length) {
        let y = 0;
        while (y < gridRepresentation[x].length) {
            if (gridRepresentation[x][y] === 1) {
                drawElement(convertGridToPx(x, canvasDim, rowLen), convertGridToPx(y, canvasDim, rowLen), ctx, canvasDim/rowLen);
            }
        }
    }
}

function drawElement(x, y, ctx, cellSize) {
    ctx.beginPath();
    ctx.rect(x, y, cellSize, cellSize);
    ctx.stroke();
}

function convertGridToPx(x, canvasDim, rowLen) {
    return x * (canvasDim / rowLen);
}