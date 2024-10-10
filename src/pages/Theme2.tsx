import { Link } from 'react-router-dom'

import { Footer } from "../components/Footer";

import ChatGpt from '../img/ChatGpt.png'
import Gemini from '../img/Gemini.png'

export const Theme2 = () => {
    return (
    <main>
        <section className="flex justify-center items-center w-full py-20">
            <div className='flex flex-col justify-center items-center w-1/2'>
                <h1 className="text-6xl font-bold">Apprentissage du domaine</h1>
                <p className="mt-4 text-xl font-medium text-center">
                    L'utilisation de plusieurs sites sur l'intelligence artificielle, comme Intel, m'a permis d'en apprendre davantage sur ce domaine 
                    qui m'intéresse, non pas pour des projets professionnels mais pour des loisirs.
                </p>
                <div className='flex mt-6'>
                    <Link to='/theme1' className="mr-6 py-2 px-6 font-medium text-white bg-blue-500 rounded-lg transition duration-150 ease-out hover:bg-blue-600">Voir développement web</Link>
                    <Link to='/theme3' className="py-2 px-6 font-medium text-white bg-blue-500 rounded-lg transition duration-150 ease-out hover:bg-blue-600">Voir modélisation 3D</Link>
                </div>
            </div>
        </section>

        <section className="flex flex-col items-center w-full pb-20 bg-white">
            <div className='flex justify-around w-full'>
                <div className='w-2/6'>
                    <img src={ ChatGpt } alt="" className='rounded-lg'/>
                </div>

                <div className='w-2/6'>
                    <img src={ Gemini } alt="" className='rounded-lg'/>
                </div>
            </div>
        </section>

        <Footer/>
    </main>
    )
}