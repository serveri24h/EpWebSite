import React, { useEffect, useState, useRef } from 'react';
import './Background.css';

const BgImages = [
    'IMG3.JPG',
    'IMG2.JPG',
    'IMG15.JPG',
    'IMG16.JPG',
    'IMG1.JPG',
    'IMG4.JPG',
    'IMG5.JPG',
    'IMG6.JPG',
    'IMG10.JPG',
    'IMG14.JPG',
    'IMG12.JPG',
    'IMG8.JPG',
    'IMG17.JPG',
    'IMG7.JPG',
    'IMG11.JPG',
    'IMG19.JPG',
    'IMG0.JPG',
    'IMG13.JPG',
    'IMG18.JPG',
]


const BackgroundSetter: React.FC = () => {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [backgroundImage, setBackgroundImage] = useState<string>(
        `IMG3.JPG`
    );
    const [direction, setDirection] = useState<{ x: number; y: number }>({ x: 1, y: 1 }); // To track movement direction
    const imageSize = 3; // Control the zoom level
    
    // Reference for the div element
    const divRef = useRef<HTMLDivElement | null>(null);
    const speedFactor:number = 2000 // Larger this is sower the speed

    useEffect(() => {
        // Update the background image of the div
        if (divRef.current) {
            const parsedList = BgImages.filter((name) => name !== backgroundImage);
            const randomIndex = Math.floor(Math.random() * parsedList.length);
            const newBgImage = parsedList[randomIndex];

            // Update the background image every 10 seconds with an animation
            const imageIntervalId = setInterval(() => {
                setBackgroundImage(newBgImage);
            }, 20000);

            // Clear interval on component unmount
            return () => clearInterval(imageIntervalId);
        }
    }, [backgroundImage]);

    useEffect(() => {
        const scrollBackground = async () => {
            //
            const imageDimensions = { width: 1600, height: 1066 };
            const viewW = window.innerWidth;
            const viewH = imageDimensions.height*(viewW/imageDimensions.width);  
            const speed = Math.ceil(viewW/speedFactor);

            const effectiveMaxWidth = viewW * imageSize - viewW;
            const effectiveMaxHeight = viewH * imageSize - window.innerHeight;

            const newX = position.x + direction.x * speed; // Move by 5px
            const newY = position.y + direction.y * speed; // Move by 5px
            
            // Check if the image reaches the boundaries and reverse direction
            if (newX >= effectiveMaxWidth) {
                setDirection(prevDirection => ({
                    ...prevDirection,
                    x: -1, // Reverse horizontal direction
                }));
            }
            if (newX <= 0) {
                setDirection(prevDirection => ({
                    ...prevDirection,
                    x: 1 // Reverse horizontal direction
                }));
            }
            if (newY >= effectiveMaxHeight) {
                setDirection(prevDirection => ({
                    ...prevDirection,
                    y: -1, // Reverse vertical direction
                }));
            }
            if (newY <= 0) {
                setDirection(prevDirection => ({
                    ...prevDirection,
                    y: 1, // Reverse vertical direction
                }));
            }

            // Update the position
            setPosition({ 
                x: Math.max(0,Math.min(newX,effectiveMaxWidth)), 
                y: Math.max(0,Math.min(newY,effectiveMaxHeight)) 
            });
        };

        // Update background position every 10 milliseconds for continuous scroll
        const scrollIntervalId = setInterval(scrollBackground, 30); // Smooth scroll effect

        // Cleanup function to clear intervals when the component unmounts
        return () => {
            clearInterval(scrollIntervalId);
        };
    }, [position, direction ]); // Re-run effect if position or direction changes


    useEffect(() => {
        // Update the background position and size dynamically for the div
        if (divRef.current) {
            divRef.current.style.backgroundPosition = `-${position.x}px -${position.y}px`;
            divRef.current.style.backgroundSize = `${imageSize * 100}%`;
            divRef.current.style.backgroundRepeat = 'no-repeat';
            divRef.current.style.filter = 'sepia(50%) blur(2px)' ;
        }
    }, [position]); 

    return (
        <div
            ref={divRef}
            className='background-container'
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
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/${backgroundImage})`
            }}
        >   
            {/*  FOR DEBUGGING
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
            */}
        </div>
    );
};

export default BackgroundSetter;



