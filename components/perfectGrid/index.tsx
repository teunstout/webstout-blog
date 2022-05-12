import _ from "lodash";
import React, { useEffect, useState, useRef, useMemo } from "react";
import ImageDynamicHeight, { BlockInterface } from "../elements/gridPhoto";
import styles from "./Index.module.scss";

interface PerfectGridProps {
    albumName: string;
    images: string[];
    onSelect?: (index: number) => void;
}

const COLUMN_WIDTH = 236;
const COLUMN_MARGIN = 16;

const PerfectGrid = ({ images, albumName, onSelect }: PerfectGridProps) => {
    const gridRef = useRef<HTMLElement>(null);
    const [gridWidth, setGridWidth] = useState<number>(0);
    const [blocks, setBlocks] = useState<number[]>([]);

    const gridListener = () =>
        window.addEventListener(
            "resize",
            _.debounce(() => {
                if (gridRef.current) setGridWidth(gridRef.current.clientWidth);
            })
        );

    useEffect(() => {
        gridListener();

        if (gridRef && gridRef.current) {
            setGridWidth(gridRef.current.clientWidth);
        }

        return gridListener();
    }, []);

    const calcColumnCount = (width: number) => {
        const padding = COLUMN_MARGIN * 2;
        const itemWidth = COLUMN_WIDTH + padding;
        return Math.floor(width / itemWidth);
    };

    const columCount = useMemo(() => calcColumnCount(gridWidth), [gridWidth]);

    useEffect(() => {
        setBlocks(Array(columCount).fill(COLUMN_MARGIN));
    }, [columCount]);

    const minArray = (array: number[]): number => {
        return Math.min.apply(Math, array);
    };

    const addBlock = (height: number): BlockInterface => {
        const min = minArray(blocks);
        const index = blocks.indexOf(min);
        const leftPos = COLUMN_MARGIN + index * (COLUMN_WIDTH + COLUMN_MARGIN);
        setBlocks(blocks => {
            const newAr = [...blocks];
            newAr[index] = min + height + COLUMN_MARGIN;
            return newAr;
        });

        return { leftPos, topPos: min };
    };

    return (
        <section
            ref={gridRef}
            id="perfectGrid"
            className={styles.perfectGrid}
            style={{ position: "relative" }}>
            {images.map((image: string, index: number) => (
                <ImageDynamicHeight
                    key={index}
                    url={image}
                    imageAlt="test"
                    width={COLUMN_WIDTH}
                    margin={COLUMN_MARGIN}
                    calcPosition={addBlock}
                />
            ))}
        </section>
    );
};

export default PerfectGrid;
