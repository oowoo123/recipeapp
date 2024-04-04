'use client'

import BlurArrow from "../../public/assets/blue-button.svg";
import Image from 'next/image';
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Landing from "../../public/assets/landing.jpeg";

export function Hero(){

    return(
        
            <div className="relative flex h-full w-full justify-center">
                <Image src={Landing} alt="Gradient" className="min-h-[500px] w-full object-cover lg:h-auto object-cover"  />
                <div className ="absolute mt-[250px] flex w-full flex-col items-center">
                    <div className = "pr-[20px] lg:pr-[240px]">
                                
                                        <h1 className=" text-gray font-bold text-6xl mb-2">Recipes To  <br />Make Your <br />Mouth Water </h1>
                                
                        <div className = "flex w-full pt-8 justify-center gap-x-6 ">
                            <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-1/5" onClick={() => window.location.href = "../pages/Recipes"}>
                                View
                            <span>
                                <Image src = {BlurArrow} alt = "Learn more"/>
                            </span>
                            </button>

                        </div>
                    </div>
                </div>
                
            </div>

    )
}