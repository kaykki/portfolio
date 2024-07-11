"use client"
import { useState,useEffect } from "react";
import { TypeWriterProps } from "@/utilities/types";

const TypeWriter: React.FC<TypeWriterProps> = ({ text, delay = 100 }) => {
    const [currentText, setCurrentText]   = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentText('');
        setCurrentIndex(0);
    }, [text]);
    
    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);
    
    return <span>{currentText}</span>;
}

export default TypeWriter;