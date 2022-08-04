/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {

    const [visible, setVisible] = useState(true);

    return <nav className="bg-mywhite text-myblack shadow-sm z-50 fixed top-0 py-4 w-full">
        <div className="container lg:px-24 mx-auto items-center flex flex-col md:flex-row justify-between">
            <div className="flex px-12 md:px-0 items-center w-full md:w-auto justify-between">
                <Link href='/#'>
                    <a className="text-2xl hover:scale-110 transition-all font-bold hover:cursor-pointer">Marko</a>
                </Link>
                <button className="md:hidden" onClick={() => setVisible(!visible) }>
                    <img src="https://img.icons8.com/material/24/000000/menu--v4.png" alt="menu" />
                </button>
            </div>

            <div className="font-medium">
                <ul className={ visible ? "menu-drop" : ""}>
                    <li className="md:inline-block mx-4 my-4 hover:underline underline-offset-8 decoration-mycyan decoration-4  hover:cursor-pointer">
                        <a href="#home">Home</a>
                    </li>
                    <li className="md:inline-block mx-4 my-4 hover:underline underline-offset-8 decoration-mycyan decoration-4  hover:cursor-pointer">
                        <a href="#about">About</a>
                    </li>
                    <li className="md:inline-block mx-4 my-4 hover:underline underline-offset-8 decoration-mycyan decoration-4  hover:cursor-pointer">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="md:inline-block  my-4  ">
                        <button className="hover:underline text-mywhite hover:text-mycyan  font-medium md:decoration-transparent underline-offset-8 decoration-mycyan decoration-4 md:decoration-0  transition-all md:ml-4 bg-transparent border-0 px-4 py-1 md:border-2 md:bg-mycyan border-mycyan rounded-3xl hover:bg-mywhite hover:cursor-pointer">
                            <a href="#contact">Contact</a>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}
