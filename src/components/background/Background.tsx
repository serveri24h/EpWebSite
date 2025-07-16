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
    

    // Pick two random images
    const randomIndex = Math.floor(Math.random() * BgImages.length);
    const [backgroundImage1, setBackgroundImage1] = useState<string>(
        BgImages[randomIndex]
    );
    const [backgroundImage2, setBackgroundImage2] = useState<string>(
        BgImages[(randomIndex+1)%BgImages.length]
    );
    const [backgroundDivId, setBackgroundDivId] = useState< "1" | "2">("1");
    const [direction, setDirection] = useState<{ x: number; y: number }>({ x: 1, y: 1 }); // To track movement direction

    // Use different factors for mobile and desktop
    const isMobile = window.innerWidth <= 768;

    const imageSize = isMobile ? 4: 2; // Control the zoom level
    
    // Reference for the div elemen
    const divRef1 = useRef<HTMLDivElement | null>(null);
    const divRef2 = useRef<HTMLDivElement | null>(null);
    const speedFactor:number = 500 // Larger this is slower the speed

    useEffect(() => {
        // Update the background image of the div
        if (divRef1.current && divRef2.current) {
            const parsedList = BgImages.filter((name) => !([backgroundImage1, backgroundImage2].includes(name)));
            const randomIndex = Math.floor(Math.random() * parsedList.length);
            const newBgImage = parsedList[randomIndex];

            // Update the background image every 10 seconds with an animation
            const imageIntervalId = setInterval(() => {
                const newDiv = backgroundDivId === "2" ? "1" : "2" 
                setBackgroundDivId(newDiv)
                if (newDiv === "1")
                    setBackgroundImage1(newBgImage);
                else
                    setBackgroundImage2(newBgImage)
            }, 20000);

            // Clear interval on component unmount
            return () => clearInterval(imageIntervalId);
        }
    }, [backgroundDivId, backgroundImage1, backgroundImage2]);

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
        const scrollIntervalId = setInterval(scrollBackground, 120); // Smooth scroll effect

        // Cleanup function to clear intervals when the component unmounts
        return () => {
            clearInterval(scrollIntervalId);
        };
    }, [position, direction, imageSize]); // Re-run effect if position or direction changes


    useEffect(() => {
        // Update the background position and size dynamically for the div
        [divRef1, divRef2].forEach(divRef=>{
            if (divRef.current) {
                divRef.current.style.backgroundPosition = `-${position.x}px -${position.y}px`;
                divRef.current.style.backgroundSize = `${imageSize * 100}%`;
                divRef.current.style.filter = 'sepia(50%) blur(2px)' ;
            }
        })
    }, [position,imageSize]); 

    return (
        <>
        {
            [1,2].map((divId=>{
            return <div
                ref={divId===1?divRef1:divRef2}
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
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/pagebackground/${divId===1?backgroundImage1:backgroundImage2})`,
                    opacity: `${Number(backgroundDivId===divId.toString())}`,
                    transition: "opacity 10s ease, background-position 0.25s ease"
                }}
            />   
            }))
        }
        </>
    );
};


export default BackgroundSetter;



