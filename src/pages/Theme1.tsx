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
                    Pendant mon temps libre, j'aime créer divers sites pour des besoins professionnels ainsi que personnels. Voici ci-dessous 
                    quelques exemples de projets personnels que j'ai réalisés durant mon apprentissage dans le domaine du développement web (Ayant 
                    des problèmes concernant l'hébergement ces projets fonctionne seulement en local donc voici simplement des screnshots).
                </p>
                <div className='flex mt-6'>
                    <Link to='/theme2' className="py-2 px-6 font-medium text-white bg-blue-500 rounded-lg transition duration-150 ease-out hover:bg-blue-600">Voir intélligence artificielle</Link>
                </div>
            </div>
        </section>

        <section className="flex flex-col items-center w-full pb-20 bg-white">
            <div className='flex justify-around mb-20 w-full'>
                <div className='w-2/6'>
                    <img src={ Projet1 } alt="" className='rounded-lg'/>
                    <h1 className='m-2'>Projet HTML, CSS</h1>
                    <p className='m-2'>Site de présentation d'un casque HyperX.</p>
                </div>

                <div className='w-2/6'>
                    <img src={ Projet2 } alt="" className='rounded-lg'/>
                    <h1 className='m-2'>Projet Wordpress</h1>
                    <p className='m-2'>Projet d'entrainnement pour la refonte du site d'indeed.</p>
                </div>
            </div>

            <div className='flex justify-around w-full'>
                <div className='w-2/6'>
                    <img src={ Projet3 } alt="" className='rounded-lg'/>
                    <h1 className='m-2'>Projet VueJs</h1>
                    <p className='m-2'>Site pour retrouver des titre de musique et connaitre leur style.</p>
                </div>

                <div className='w-2/6'>
                    <img src={ Projet4 } alt="" className='rounded-lg'/>
                    <h1 className='m-2'>Projet HTML, CSS, Laravel</h1>
                    <p className='m-2'>Réseau social</p>
                </div>
            </div>
        </section>

        <Footer/>
    </main>
    )
}