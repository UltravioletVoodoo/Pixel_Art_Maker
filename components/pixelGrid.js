import "../styles/baseStyle.css";
import "../styles/pixelGrid.css";

import getCanvasDimensions from "../hooks/getCanvasDimensions";
import getMousePos from "../hooks/getMousePosition";
import { useEffect, useState, useRef } from "react";
import { ReImg } from "../util/reimg";
import ToolBar from "./toolBar";

export default function PixelGrid() {
    const rowLen = 16;
    const canvasDim = getCanvasDimensions();
    const mousePos = getMousePos();
    const gridPoints = convertPositionToGrid(mousePos, canvasDim, rowLen);
    const [gridRepresentation, setGridRep] = useState(getBlankGrid(rowLen));
    const c = useRef(null);
    const [grid, setGrid] = useState(true);


    // Every render we want to clear the screen first
    clearCanvas(c.current, canvasDim);
    // Every render we want to draw
    drawElements(c.current, canvasDim, gridRepresentation, rowLen, grid);


    function toggleGrid() {
        setGrid(!grid);
    }

    function clearGrid() {
        setGridRep(getBlankGrid(rowLen));
    }

    function handleCanvasClick() {
        setGridRep(togglePoint(gridRepresentation, gridPoints));
    }

    function exportToPNG() {
        ReImg.fromCanvas(c.current).downloadPng();
    }

    return (
        <div className="columns">
            <ToolBar></ToolBar>
            <div className="col-6">
                <canvas className="pixelGrid" id="pixelGrid" onClick={handleCanvasClick} ref={c} width={canvasDim} height={canvasDim}></canvas>
                <button onClick={toggleGrid}>Toggle Grid</button>
                <button onClick={clearGrid}>Clear</button>
                <button onClick={exportToPNG}>Export</button>
            </div>
            <ToolBar></ToolBar>
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
        result.push(false);
        x++;
    }
    return result;
}

function togglePoint(grid, point) {
    grid = [...grid];
    grid[point.x][point.y] = !grid[point.x][point.y];
    return grid;
}

function drawElements(canvas, canvasDim, gridRepresentation, rowLen, grid) {
    if (canvas) {
        let ctx = canvas.getContext("2d");
        
        console.log(grid);
        // Draw the grid if desired
        if (grid) drawGrid(ctx, canvasDim, rowLen);

        // Draw the pixels
        let x = 0;
        while (x < gridRepresentation.length) {
            let y = 0;
            while (y < gridRepresentation[x].length) {
                if (gridRepresentation[x][y]) {
                    drawElement(convertGridToPx(x, canvasDim, rowLen), convertGridToPx(y, canvasDim, rowLen), ctx, canvasDim/rowLen);
                }
                y++;
            }
            x++;
        }
    }
}

function drawElement(x, y, ctx, cellSize) {
    ctx.fillRect(x, y, cellSize, cellSize);
}

function convertGridToPx(x, canvasDim, rowLen) {
    return x * (canvasDim / rowLen);
}

function drawGrid(ctx, canvasDim, rowLen) {
    let cellSize = canvasDim / rowLen;
    let x = cellSize;
    // Draw vertical lines
    while (x < canvasDim) {
        drawLine(ctx, x, 0, x, canvasDim);
        x += cellSize;
    }
    // Draw Horizontal Lines
    x = 0;
    while (x < canvasDim) {
        drawLine(ctx, 0, x, canvasDim, x);
        x += cellSize;
    }
}

function drawLine(ctx, xStart, yStart, xFin, yFin) {
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xFin, yFin);
    ctx.stroke();
}

function clearCanvas(canvas, canvasDim) {
    if (canvas) {
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvasDim, canvasDim);
    }
}