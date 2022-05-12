import styles from "./Index.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface BlockInterface {
    leftPos: number;
    topPos: number;
}

interface GridPhotoProps {
    url: string;
    imageAlt: string;
    width: number;
    margin: number;
    calcPosition: (height: number) => BlockInterface;
}

const GridPhoto = ({ url, imageAlt, width, margin, calcPosition }: GridPhotoProps) => {
    const ref = useRef(null);
    const [height, setHeight] = useState<number>(0);
    const [left, setLeft] = useState<number>();
    const [top, setTop] = useState<number>();

    const loadingComplete = (result: { naturalWidth: number; naturalHeight: number }) => {
        const ratio = result.naturalHeight / result.naturalWidth;
        setHeight(ratio * width);
        console.log(ratio * width);  
    };

    useEffect(() => {
        const { leftPos, topPos } = calcPosition(height);
        setLeft(leftPos);
        setTop(topPos);
    }, [height]);

    return (
        <a
            ref={ref}
            className={styles.gridPhoto}
            style={{ position: "absolute", margin: margin, top: top, left: left }}>
            <Image
                alt={imageAlt}
                src={url}
                width={width}
                height={height}
                onLoadingComplete={loadingComplete}
            />
        </a>
    );
};

export default GridPhoto;
