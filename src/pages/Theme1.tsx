import { Link } from 'react-router-dom'

import { Footer } from "../components/Footer";

import Projet1 from '../img/Projet1.png'
import Projet2 from '../img/Projet2.png'
import Projet3 from '../img/Projet3.png'
import Projet4 from '../img/Projet4.png'

export const Theme1 = () => {
    return (
    <main>
        <section className="flex justify-center items-center w-full py-20">
            <div className='flex flex-col justify-center items-center w-1/2'>
                <h1 className="text-6xl font-bold">Développement de site internet</h1>
                <p className="mt-4 text-xl font-medium text-center">
                    Pendant mes temps j'aime créer divers site pour des besoins professionnels comme personnels, voici ci-dessous
                    quelque exemple de projet personnels que j'ai pas faire durant mon apprentissage sur le domaine du 
                    développement web.
                </p>
                <div className='flex mt-6'>
                    <Link to='/theme2' className="py-2 px-6 font-medium text-white bg-blue-500 rounded-lg">Voir langage C#</Link>
                </div>
            </div>
        </section>

        <section className="flex flex-col items-center w-full pb-20 bg-white">
            <div className='flex justify-around mb-20 w-full'>
                <div className='w-2/6'>
                    <img src={ Projet1 } alt="" className='rounded-lg'/>
                </div>

                <div className='w-2/6'>
                    <img src={ Projet2 } alt="" className='rounded-lg'/>
                </div>
            </div>

            <div className='flex justify-around w-full'>
                <div className='w-2/6'>
                    <img src={ Projet3 } alt="" className='rounded-lg'/>
                </div>

                <div className='w-2/6'>
                    <img src={ Projet4 } alt="" className='rounded-lg'/>
                </div>
            </div>
        </section>

        <Footer/>
    </main>
    )
}