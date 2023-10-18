import { useState,useEffect } from "react";
function useScrollY() {
    const [scrollY, setScrollY] = useState(0);
    const handelScrollY = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scrollY);
    };
    useEffect(() => {
        handelScrollY();
        window.addEventListener('scroll', handelScrollY);
        return () => {
            window.removeEventListener('scroll', handelScrollY);
        };
    }, []);
    return [scrollY]
}

export default useScrollY;