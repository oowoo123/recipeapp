'use client'

import BlurArrow from "../../public/assets/blue-button.svg";
import Image from 'next/image';
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Trustpilot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Clutch from "../../public/assets/Clutch.svg";


export function Hero(){

    return(
        <div className = "pt-7 lg:pt-7">
            <div className = "px-[20px] lg:px-[280px]">
                <h1 className = 'text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px] '>
                    Best in Class Technology
                </h1>
                <p className = "text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
                    Learn more about technology here
                </p>

            <div className = "flex w-full pt-8 justify-center gap-x-6 ">
                <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-1/5" >
                Take me to start
                </button>
                <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-1/5" onClick={() => window.location.href = "../pages/Recipes"}>
                    View
                <span>
                    <Image src = {BlurArrow} alt = "Learn more"/>
                </span>
                </button>

             </div>
            </div>
            <div className="relative flex h-full w-full justify-center">
                <Image src={Gradient} alt="Gradient" className="min-h-[500px] w-full object-cove lg:h-auto" />
                <div className ="absolute bottom-5 flex w-full flex-col items-center">
                    <Image src={HeroImage} alt="hero image" className="-ml-3 h-[310px] sm:-mb-0 sn:h-[400px] lg:-mb-0 lg:h-[800px] xl:w-[65]" />
                </div>
                
            </div>
        </div>
    )
}