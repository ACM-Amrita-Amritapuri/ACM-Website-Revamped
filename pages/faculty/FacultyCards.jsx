import Image from "next/image";
import React, { useState } from 'react';


export default function FacultyCards(props) {
    const { src, name, position, mg, width, height } = props;
    const [hover, setHover] = useState(false);

    return (
        <div
            className={`relative flex flex-col items-center bg-[#393970] shadow-xl shadow-[#8383fd] hover:shadow-[#bc86ff] hover:bg-[#000000] rounded-lg p-[8px] glowing-border transition-all duration-300 transform ${hover ? 'scale-110' : 'scale-100'} transform ${mg}`}
            style={{ width: width, height: height }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div>
                <Image src={src} alt={name} width={width} height={height} className="rounded-lg object-cover" />
            </div>
            <div className="absolute bottom-0 w-full rounded-[px] bg-black shadow-lg shadow-[#393970] bg-opacity-100 text-center text-white py-2">
                <p className="text-xl text-white">{name}</p>
                <p className="text-[15px] text-white">{position}</p>
            </div>
        </div>
    );
}
