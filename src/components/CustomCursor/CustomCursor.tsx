"use client";

import { useEffect, useState, useRef } from "react";

type CursorColor = "blue" | "emerald" | "red" | "green" | "purple" | "pink";

export default function CustomCursor() {
    const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [cursorColor, setCursorColor] = useState<CursorColor>("blue");
    const lastTargetRef = useRef<HTMLElement | null>(null);
    const [isSwitching, setIsSwitching] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setDotPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);
        const onMouseLeave = () => setIsVisible(false);
        const onMouseEnter = () => setIsVisible(true);

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const closestInteractive = target.closest('button, a, input, [data-cursor="hover"]') as HTMLElement | null;

            if (closestInteractive) {
                setIsHovering(true);

                // Detect color
                const color = closestInteractive.getAttribute('data-cursor-color');
                const newColor = (color && ['emerald', 'red', 'green', 'purple', 'pink', 'blue'].includes(color))
                    ? (color as CursorColor)
                    : 'blue';

                if (newColor !== cursorColor) {
                    setCursorColor(newColor);
                    setIsSwitching(true);
                    setTimeout(() => setIsSwitching(false), 300);
                }

                lastTargetRef.current = closestInteractive;
            } else {
                setIsHovering(false);
                lastTargetRef.current = null;
            }
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousemove", handleHover);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);
        document.body.addEventListener("mouseleave", onMouseLeave);
        document.body.addEventListener("mouseenter", onMouseEnter);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousemove", handleHover);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            document.body.removeEventListener("mouseleave", onMouseLeave);
            document.body.removeEventListener("mouseenter", onMouseEnter);
        };
    }, [isVisible, cursorColor]);

    if (typeof navigator !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
        return null;
    }

    const colorClasses = {
        blue: {
            hover: "bg-blue-900/10 border-blue-400/40 shadow-[0_0_20px_rgba(96,165,250,0.3)]",
            default: "bg-[#020617] border-blue-400/50"
        },
        emerald: {
            hover: "bg-emerald-900/10 border-emerald-400/40 shadow-[0_0_20px_rgba(52,211,153,0.3)]",
            default: "bg-[#020617] border-emerald-400/50"
        },
        red: {
            hover: "bg-red-900/10 border-red-400/40 shadow-[0_0_20px_rgba(248,113,113,0.3)]",
            default: "bg-[#020617] border-red-400/50"
        },
        green: {
            hover: "bg-green-900/10 border-green-400/40 shadow-[0_0_20px_rgba(74,222,128,0.3)]",
            default: "bg-[#020617] border-green-400/50"
        },
        purple: {
            hover: "bg-purple-900/10 border-purple-400/40 shadow-[0_0_20px_rgba(192,132,252,0.3)]",
            default: "bg-[#020617] border-purple-400/50"
        },
        pink: {
            hover: "bg-pink-900/10 border-pink-400/40 shadow-[0_0_20px_rgba(244,114,182,0.3)]",
            default: "bg-[#020617] border-pink-400/50"
        }
    };

    return (
        <div
            className={`pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full cursor-gradient-border p-[1.5px] transition-all duration-500 hidden md:block ${isHovering ? "h-12 w-12" : "h-5 w-5"
                } ${isClicking ? "scale-75 opacity-80" : "scale-100"} ${isVisible ? "opacity-100" : "opacity-0"} ${isSwitching ? "scale-[1.1] transition-transform duration-200" : ""}`}
            style={{
                left: `${dotPosition.x}px`,
                top: `${dotPosition.y}px`,
                transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                transitionProperty: "height, width, opacity, transform",
            }}
        >
            <div className={`h-full w-full rounded-full transition-colors duration-500 ${isHovering ? colorClasses[cursorColor].hover : colorClasses[cursorColor].default
                }`} />
        </div>
    );
}
