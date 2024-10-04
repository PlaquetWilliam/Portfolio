import { Link } from 'react-router-dom'

import { Footer } from "../components/Footer";

import Exemple1 from '../img/Exemple1.png'
import Exemple2 from '../img/Exemple2.png'

export const Theme2 = () => {
    return (
    <main>
        <section className="flex justify-center items-center w-full py-20">
            <div className='flex flex-col justify-center items-center w-1/2'>
                <h1 className="text-6xl font-bold">Langage C# (Jeux Vidéos)</h1>
                <p className="mt-4 text-xl font-medium text-center">
                    Langage principalement utilisé pour les jeux vidéo, j'ai pu me renseigner auprès de plusieurs sites expliquant précisément 
                    l'utilité de ce langage de programmation. Un site m'a beaucoup aidé lors de mes recherches, il s'agit d'Unity. Unity n'est 
                    pas un site à proprement parler, mais un moteur de jeu. Ce sont sa documentation et ses exemples qui m'ont attiré.
                    (Les exemples ci-dessous ne sont pas de moi, ce sont simplement des exemples de ce que l'on peut faire avec ce moteur.)
                </p>
                <div className='flex mt-6'>
                    <Link to='/theme1' className="mr-6 py-2 px-6 font-medium text-white bg-blue-500 rounded-lg transition duration-150 ease-out hover:bg-blue-600">Voir développement web</Link>
                    <Link to='/theme3' className="py-2 px-6 font-medium text-white bg-blue-500 rounded-lg transition duration-150 ease-out hover:bg-blue-600">Voir intélligence artificielle</Link>
                </div>
            </div>
        </section>

        <section className="flex flex-col items-center w-full pb-20 bg-white">
            <div className='flex justify-around w-full'>
                <div className='w-2/6'>
                    <img src={ Exemple1 } alt="" className='rounded-lg'/>
                </div>

                <div className='w-2/6'>
                    <img src={ Exemple2 } alt="" className='rounded-lg'/>
                </div>
            </div>
        </section>

        <Footer/>
    </main>
    )
}