import { Link } from 'react-router-dom'

import { Footer } from "../components/Footer";

import Projet5 from '../img/Projet5.png'
import Projet6 from '../img/Projet6.png'

export const Theme4 = () => {
    return (
    <main>
        <section className="flex justify-center items-center w-full py-20">
            <div className='flex flex-col justify-center items-center w-1/2'>
                <h1 className="text-6xl font-bold">Utilisation de Blender</h1>
                <p className="mt-4 text-xl font-medium text-center">
                    Logiciel de modélisation 3D performant avec de nombreuses fonctionnalités, j'ai pu réaliser plusieurs projets grâce à ce 
                    logiciel, dont deux exemples ci-dessous. Je me suis principalement appuyé sur le site officiel de Blender, qui permet de 
                    créer des modèles 3D, aussi bien basiques que complexes. (Voici ci-dessous quelques-uns de mes projets.)
                </p>
                <div className='flex mt-6'>
                    <Link to='/theme3' className="mr-6 py-2 px-6 font-medium text-white bg-blue-500 rounded-lg transition duration-150 ease-out hover:bg-blue-600">Voir intélligence artificielle</Link>
                </div>
            </div>
        </section>

        <section className="flex flex-col items-center w-full pb-20 bg-white">
            <div className='flex justify-around w-full'>
                <div className='w-2/6'>
                    <img src={ Projet5 } alt="" className='rounded-lg'/>
                </div>

                <div className='w-2/6'>
                    <img src={ Projet6 } alt="" className='rounded-lg'/>
                </div>
            </div>
        </section>

        <Footer/>
    </main>
    )
}