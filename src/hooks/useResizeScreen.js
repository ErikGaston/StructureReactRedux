import { useCallback, useEffect, useState } from "react";

export function useResizeScreen() {
    const [screen, updateScreen] = useState({
        sWidth: window.innerWidth,
        sHeight: window.innerHeight,
    });
    const handleResize = useCallback(() => {
        updateScreen({ sWidth: window.innerWidth, sHeight: window.innerHeight });
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize, { passive: true });

        return () => {
            window.removeEventListener("resize", handleResize, { passive: true });
        };
    }, [screen]);
    return { screen };
}