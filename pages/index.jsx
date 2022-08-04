/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Project from "../components/Project";
import Contact from "../components/Contact";

export default function Index() {

    const arrayImg = ['/img/mongo.png', '/img/Expressjs.png', '/img/react.png', '/img/node.png']
    const [current, setCurrent] = useState(0)

    setTimeout(() => { setCurrent((current + 1) % arrayImg.length) }, 1500)

    const projects = [
        {
            title: 'My pokedex',
            url: 'https://laughing-keller-b0f497.netlify.app/'
        },
        {
            title: 'My weather app',
            url: 'https://nervous-mestorf-f62d56.netlify.app/'
        },
        {
            title: 'My Rock Paper Scissors',
            url: 'https://nervous-euclid-2bbf74.netlify.app/'
        },
        {
            title: 'Geo Guess Quizz ',
            url: 'https://guess-country-eight.vercel.app/'
        },
        {
            title: 'NextJS Countries API',
            url: 'https://next-countries-5t7u14k20-markorodriguez.vercel.app/'
        }
    ]

    const arrayContact = [{
        img: '/img/contact/mail-142.svg',
        detail: 'marko.rodriguez@hotmail.es',
        link: 'mailto:marko.rodriguez@hotmail.es'
    }, {
        img: "https://img.icons8.com/small/50/000000/github.png",
        detail: 'GitHub',
        link: 'https://github.com/markorodriguez'
    },
    {
        img: "https://img.icons8.com/small/50/000000/linkedin.png",
        detail: 'LinkedIn ',
        link: 'https://www.linkedin.com/in/marko-rodriguez/'
    },
    ]

    return (
        <div className="bg-mywhite min-h-screen w-full">
            <Head>
                <title>My Site | Marko </title>
                <link rel="shortcut icon" href="/cowboy.png" type="image/x-icon" />
            </Head>
            <div>
                <Navbar />

                <div
                    id="home"
                    className="w-full text-myblack pt-20 text-center md:text-justify md:mt-10 bg-mywhite h-4/6"
                >
                    <div className="container lg:px-24 h-full flex flex-col md:flex-row items-center justify-between mx-auto">
                        <div className="w-5/6 ">
                            <h1 className="text-5xl font-semibold leading-normal">
                                Hello there! <br />
                                I&apos;m <span className="text-mycyan underline underline-offset-8 decoration-8">Marko.</span>
                            </h1>
                            <p className="my-8 py-4 text-lg leading-relaxed">
                                Welcome to my portfolio and personal web site. <br />
                                Hope you like what you see here 🤠.
                            </p>

                            <button className="font-medium hover:animate-none text-mywhite hover:text-mycyan shadow-lg transition-all px-4 py-2 border-2 bg-mycyan border-mycyan rounded-3xl hover:bg-mywhite hover:cursor-pointer">
                                <a href="#projects"> See Projects</a>
                            </button>
                        </div>
                        <div className="w-3/6 flex items-center h-full ">
                            <img
                                className="w-6/6 mx-auto"
                                alt="coding_bro"
                                src={"/img/programming.svg"}
                            />
                        </div>
                    </div>
                </div>

                <div id="about" className="bg-mywhite px-12 md:px-0 py-24 h-auto">
                    <div className="container lg:px-24 text-myblack mx-auto w-full flex flex-col-reverse md:flex-row items-center h-full">
                        <div className="w-5/6 my-12 h-60 flex items-center  md:w-3/6">
                            <img className="w-4/6 md:w-3/6 mx-auto md:mx-0" src={arrayImg[current]} alt="" />
                        </div>
                        <div className="w-full md:w-3/6 text-center md:text-right">
                            <h2 className="text-5xl font-semibold underline underline-offset-8 decoration-8 decoration-mycyan  ">
                                About me.
                            </h2>
                            <p className="my-8 text-justify md:text-right py-4 text-lg leading-loose">
                                I am a computer engineering graduated student willing to start a career in the field of programming. <br />
                                My main stack is <strong className="text-mycyan">MERN</strong>.
                                However, I&apos;m capable of learning new technologies or using the other ones I also known if the project requires them. <br />
                            </p>
                            <button className="shadow-lg text-mywhite hover:text-mycyan  font-medium hover:animate-none transition-all px-4 py-2 border-2 bg-mycyan border-mycyan rounded-3xl hover:bg-mywhite hover:cursor-pointer">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://drive.google.com/file/d/1FozUzT6AfEdQk4A8EQvkCZ67D2y8XdT2/view"
                                >
                                    Download my CV
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div id="projects" className="py-24 text-myblack bg-mywhite ">
                    <div className="container lg:px-24 mx-auto">
                        <h2 className="text-5xl text-center md:text-left font-semibold underline underline-offset-8 decoration-8 decoration-mycyan pb-10">
                            Projects.
                        </h2>
                        <div className="mx-auto py-10 grid grid-cols-1 gap-10 md:grid-cols-3 auto-rows-auto">
                            {projects.map((el, index) => {
                                return <Project key={index} name={el.title} url={el.url} />;
                            })}
                        </div>
                    </div>
                </div>


                <div id="contact" className="bg-mywhite text-myblack px-12 md:px-0 pt-24 pb-10">
                    <div className="container lg:px-24 mx-auto flex flex-col h-full">
                        <h2 className="text-5xl font-semibold underline underline-offset-8 decoration-8 decoration-mycyan text-center md:text-left">Contact me.</h2>
                        <div className="my-14">
                            <div className="grid grid-cols-1 gap-10 grid-rows-4 md:grid-cols-3 md:grid-rows-1">
                                {arrayContact.map((el, index) => {
                                    return (
                                        <Contact key={index} img={el.img} detail={el.detail} link={el.link} />
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}
