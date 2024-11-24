import React, { useEffect, useState, useRef } from 'react';





const BackgroundSetter: React.FC = () => {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [backgroundImage, setBackgroundImage] = useState<string>(
        `${process.env.PUBLIC_URL}/images/bgimg1.jpeg`
    );
    const [direction, setDirection] = useState<{ x: number; y: number }>({ x: 1, y: 1 }); // To track movement direction
    const imageSize = 3; // Control the zoom level
    const imageDimensions = { width: 1600, height: 1066 };
    
    // Reference for the div element
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Update the background image of the div
        if (divRef.current) {
            divRef.current.style.backgroundImage = `url(${backgroundImage})`;
            const imageIntervalId = setInterval(() => setBackgroundImage(`${process.env.PUBLIC_URL}/images/bgimg2.jpeg`), 3000);
        }
    }, [backgroundImage]);

    useEffect(() => {
        const scrollBackground = async () => {
            //
            const viewW = window.innerWidth;
            const viewH = imageDimensions.height*(viewW/imageDimensions.width);  

            const effectiveMaxWidth = viewW * imageSize - viewW;
            const effectiveMaxHeight = viewH*imageSize - window.innerHeight;

            const newX = position.x + direction.x * 5; // Move by 5px
            const newY = position.y + direction.y * 5; // Move by 5px
            
            // Check if the image reaches the boundaries and reverse direction
            if (newX >= effectiveMaxWidth || newX <= 0) {
                setDirection(prevDirection => ({
                    ...prevDirection,
                    x: -prevDirection.x, // Reverse horizontal direction
                }));
            }
            if (newY >= effectiveMaxHeight || newY <= 0) {
                setDirection(prevDirection => ({
                    ...prevDirection,
                    y: -prevDirection.y, // Reverse vertical direction
                }));
            }

            // Update the position
            setPosition({ x: newX, y: newY });
        };

        // Update background position every 10 milliseconds for continuous scroll
        const scrollIntervalId = setInterval(scrollBackground, 30); // Smooth scroll effect

        // Cleanup function to clear intervals when the component unmounts
        return () => {
            clearInterval(scrollIntervalId);
        };
    }, [position, direction]); // Re-run effect if position or direction changes


    useEffect(() => {
        // Update the background position and size dynamically for the div
        if (divRef.current) {
            divRef.current.style.backgroundPosition = `-${position.x}px -${position.y}px`;
            divRef.current.style.backgroundSize = `${imageSize * 100}%`;
            divRef.current.style.backgroundRepeat = 'no-repeat';
            divRef.current.style.filter = 'sepia(100%) blur(2px)' ;
        }
    }, [position, backgroundImage]); 

    return (
        <div
            ref={divRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                backgroundSize: `${imageSize * 100}%`,
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
            }}
        >
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1000,
                color: 'red',
                padding: '10px',
                fontFamily: 'monospace',
            }}>
                <p>Position: x = {position.x}, y = {position.y}</p>
                <p>Image Size: {imageDimensions.width}x{imageDimensions.height}</p>
                <p>Effective Image Size: {imageDimensions.width * imageSize}x{imageDimensions.height * imageSize}</p>
                <p>Viewport Size: {window.innerWidth}x{window.innerHeight}</p>
                <p>Zoom Factor: {imageSize}</p>
            </div>
        </div>
    );
};

export default BackgroundSetter;



