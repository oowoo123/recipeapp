'use client'
import Image from 'next/image';
import Logo from '../../public/assets/softsup.svg';
import User from '../../public/assets/User.svg';
import Menu from '../../public/assets/Menu.svg';
import { features } from 'process';

const navLinks = [
    {name:"Features"},
    {name:"Pricing"},
    {name:"Recipes"},
];

export function Navbar(){
    return(
        <nav className= "flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20" >
            <div className='flex items-center'>
                <button className="focus:outline-none" onClick={() => window.location.href = "../"} >
                    <Image src={Logo} style = {{height: 53, width:53, borderRadius: '50%'}}alt = 'Logo'/>
                </button>

                <div className = "hidden lg:flex pl-[74px] gap-x-[56px]">
                    {navLinks.map((item,index) => (
                        <p className='text-[#36485C] font-medium' key={index}> 
                            <a href={`../pages/${item.name}`}>{item.name}</a>
                        </p> 
                    ))}
                </div>
            </div>
            <div className="flex gap-x-5 ">
                <p className = 'hidden lg:block font-medium text-[#36485C]'> Register</p>
                <div className='flex items-center gap-x-2'>
                    <Image src ={User} alt="User Profile" />
                    <span className = "hidden font-medium text-[#36485C] lg:block"  >
                        Sign In
                    </span>
                </div>
                <button className="focus:outline-none">
                    <Image src ={Menu} alt="Menu Button" className='lg:hidden'/>
                </button>
            </div>
        </nav>
    );
}