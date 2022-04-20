import { useEffect, useState } from "react";

export const MOBILE_WIDTH = 576;

export const useViewPortSize = () => {
    const [windowWidth, setWindowWidth] = useState<number>();
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        let checkSize = false;
        if (typeof window !== undefined) {
            if (!checkSize) {
                updateWidthAndHeight();
                checkSize = true;
            }
            window.addEventListener("resize", updateWidthAndHeight);
            return () => window.removeEventListener("resize", updateWidthAndHeight);
        }
    }, []);

    const updateWidthAndHeight = () => {
        setWindowWidth(window.outerWidth);
        if (window.outerWidth <= MOBILE_WIDTH) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };
    return { windowWidth, isMobile };
}