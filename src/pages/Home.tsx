import { Link } from 'react-router-dom'

import { Footer } from "../components/Footer";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiIndeed } from "react-icons/si";

import Profil from '../img/Profil.png'

export const Home = () => {
    return (
    <main>
        <section className="bg-[url('img/Background.png')]">
            <div className="flex w-full h-[70vh]">
                <div className="left flex justify-center items-center w-2/4 h-full">
                    <div className='flex flex-col'>
                        <h1 className="text-6xl font-bold">William Plaquet</h1>
                        <p className="mt-2 text-2xl font-bold">Développeur <span className="text-blue-500 border-b-4 border-blue-500">Full-Stack</span></p>
                        <div className='flex'>
                            <a href={`${process.env.PUBLIC_URL}/CV.pdf`} download="CV-PLAQUET.pdf">
                                <button className="mt-6 mr-6 py-2 px-6 font-medium text-white bg-blue-500 rounded-lg transition duration-150 ease-out hover:bg-blue-600">Télécharger le CV</button>
                            </a>
                            <a href="https://www.linkedin.com/in/william-plaquet-9b6682210/" target='blank' className="flex justify-center items-center mt-6 mr-6 p-2 font-medium text-white bg-blue-500 rounded-lg transition duration-150 ease-out hover:bg-blue-600"><CiLinkedin className='text-2xl'/></a>
                            <a href="https://profile.indeed.com/?hl=fr_FR&co=FR&from=gnav-homepage" target='blank' className="flex justify-center items-center mt-6 p-2 font-medium text-white bg-blue-500 rounded-lg transition duration-150 ease-out hover:bg-blue-600"><SiIndeed className='text-2xl'/></a>
                        </div>
                    </div>
                </div>

                <div className="right flex justify-center items-center w-2/4 h-[70vh]">
                    <img src={ Profil } className='rounded-full w-5/12 h-5/12 border-4 border-blue-500'/>
                </div>
            </div>

            <div className='flex justify-center items-center w-full h-[20vh]'>
                <div className='flex justify-evenly items-center w-full h-[10vh]'>
                    <FaHtml5 className='w-20 h-20 transition duration-150 ease-out hover:scale-110'/>
                    <FaCss3Alt className='w-20 h-20 transition duration-150 ease-out hover:scale-110'/>
                    <FaJsSquare className='w-20 h-20 transition duration-150 ease-out hover:scale-110'/>
                    <FaReact className='w-20 h-20 transition duration-150 ease-out hover:scale-110'/>
                    <FaVuejs className='w-20 h-20 transition duration-150 ease-out hover:scale-110'/>
                    <RiTailwindCssFill className='w-20 h-20 transition duration-150 ease-out hover:scale-110'/>
                    <FaNode className='w-20 h-20 transition duration-150 ease-out hover:scale-110'/>
                    <FaLaravel className='w-20 h-20 transition duration-150 ease-out hover:scale-110'/>
                </div>
            </div>
        </section>

        <section className="flex flex-col items-center w-full bg-blue-500">
            <h1 className="my-20 text-6xl font-bold text-white">Mes objectifs</h1>

            <div className='flex justify-around mb-20 w-full'>
                <div className='flex flex-col p-10 w-2/6 bg-white rounded-lg transition duration-150 ease-out hover:-rotate-2 cursor-default'>
                    <h1 className='mb-6 text-xl font-bold'>Développeur Full-Stack</h1>
                    <p className='font-medium'>Savoir conceptualiser une application entièrement fonctionnelle et pratique pour tout le monde.</p>
                </div>

                <div className='flex flex-col p-10 w-2/6 bg-white rounded-lg transition duration-150 ease-out hover:-rotate-2 cursor-default'>
                    <h1  className='mb-6 text-xl font-bold'>Diplôme d'ingénieur en Concepteur Développeur D'application</h1>
                    <p className='font-medium'>Aller le plus loin possible dans mes études pour pouvoir en apprendre davantage sur le domaine du développement web</p>
                </div>
            </div>
        </section>

        <section className="flex flex-col items-center w-full py-20 bg-white">
            <h1 className="mb-20 text-6xl font-bold">Veille Technologique</h1>

            <div className='flex justify-around mb-20 w-full'>
                <div className='flex flex-col items-center p-10 w-2/6 bg-white rounded-3xl shadow-2xl'>
                    <h1 className='mb-6 text-xl font-bold'>Thème 1</h1>
                    <p className='font-medium'>Développement Web</p>
                    <Link to='/theme1' className="mt-6 py-2 px-6 font-medium text-white bg-blue-500 rounded-lg transition duration-150 ease-out hover:bg-blue-600">Voir</Link>
                </div>

                <div className='flex flex-col items-center p-10 w-2/6 bg-white rounded-3xl shadow-2xl'>
                    <h1  className='mb-6 text-xl font-bold'>Thème 2</h1>
                    <p className='font-medium'>Langage C#</p>
                    <Link to="/theme2" className="mt-6 py-2 px-6 font-medium text-white bg-blue-500 rounded-lg transition duration-150 ease-out hover:bg-blue-600">Voir</Link>
                </div>
            </div>

            <div className='flex justify-around w-full'>
                <div className='flex flex-col items-center p-10 w-2/6 bg-white rounded-3xl shadow-2xl'>
                    <h1 className='mb-6 text-xl font-bold'>Thème 3</h1>
                    <p className='font-medium'>Intelligence Artificielle</p>
                    <Link to="/theme3" className="mt-6 py-2 px-6 font-medium text-white bg-blue-500 rounded-lg transition duration-150 ease-out hover:bg-blue-600">Voir</Link>
                </div>

                <div className='flex flex-col items-center p-10 w-2/6 bg-white rounded-3xl shadow-2xl'>
                    <h1  className='mb-6 text-xl font-bold'>Thème 4</h1>
                    <p className='font-medium'>Modélisation 3D</p>
                    <Link to="/theme4" className="mt-6 py-2 px-6 font-medium text-white bg-blue-500 rounded-lg transition duration-150 ease-out hover:bg-blue-600">Voir</Link>
                </div>
            </div>
        </section>

        <Footer/>
    </main>
    )
}