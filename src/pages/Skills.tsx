import { Footer } from "../components/Footer";

import Html from '../img/Html.png'
import Css from '../img/Css.png'
import Javascript from '../img/Js.png'
import React from '../img/React.png'
import Vuejs from '../img/Vuejs.png'
import Tailwind from '../img/Tailwind.png'
import Nodejs from '../img/Nodejs.png'
import Laravel from '../img/Laravel.png'
import Scroll from '../img/Scroll.png'

export const Skills = () => {
    return (
    <main>
        <section className="flex justify-center items-center w-full py-20">
            <div className='flex flex-col justify-center items-center w-1/2'>
                <h1 className="text-6xl font-bold">Compétences</h1>
                <p className="mt-4 text-xl font-medium text-center">
                    Au cours de mon cursus, j'ai eu l'occasion de travailler sur différents projets 
                    de développement informatique. J'ai ainsi élargi mes compétences en langages de 
                    programmation tels que HTML, CSS, Javascript, Typescript, C#, PHP, SQL et Java mais 
                    aussi des frameworks comme React, Vuejs, Laravel ou encore Angular. Je me suis également 
                    familiarisé avec les méthodes agiles de gestion de projet et j'ai acquis une grande rigueur 
                    dans mon travail.
                </p>
                <a href="{`${process.env.PUBLIC_URL}/Tableau-de-synthèse-William-Plaquet.pdf" download="Tableau-de-synthèse-William-Plaquet.pdf">
                    <button className="mt-6 py-2 px-6 font-medium text-white bg-blue-500 rounded-lg">Télécharger le tableau de synthèse</button>
                </a>
            </div>
        </section>

        <section className='flex justify-center items-center w-full'>
            <img src={ Scroll } className='rounded-full w-20 h-20'/>
        </section>

        <section className="flex justify-center items-center w-full py-20">
            <div className='flex flex-col justify-evenly w-6/12 h-full'>
                <div className='flex my-4'>
                    <div className='flex justify-center w-1/5'>
                        <img src={ Html } className='w-14 h-14'/>
                    </div>

                    <div className='w-4/5'>
                        <p className='w-full h-2/4 font-medium'>Html</p>
                        <div className='w-full h-2/4'>
                            <div className='w-full h-full bg-[#d9d9d9] rounded-full'>
                                <div className='w-full h-full bg-[#ff7816] rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex my-4'>
                    <div className='flex justify-center w-1/5'>
                        <img src={ Css } className='w-14 h-14'/>
                    </div>

                    <div className='w-4/5'>
                        <p className='w-full h-2/4 font-medium'>Css</p>
                        <div className='w-full h-2/4'>
                            <div className='w-full h-full bg-[#d9d9d9] rounded-full'>
                                <div className='w-11/12 h-full bg-[#2196f3] rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex my-4'>
                    <div className='flex justify-center w-1/5'>
                        <img src={ Javascript } className='w-14 h-14'/>
                    </div>

                    <div className='w-4/5'>
                        <p className='w-full h-2/4 font-medium'>Javascript</p>
                        <div className='w-full h-2/4'>
                            <div className='w-full h-full bg-[#d9d9d9] rounded-full'>
                                <div className='w-10/12 h-full bg-[#ffdf00] rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex my-4'>
                    <div className='flex justify-center w-1/5'>
                        <img src={ React } className='w-14 h-14'/>
                    </div>

                    <div className='w-4/5'>
                        <p className='w-full h-2/4 font-medium'>React</p>
                        <div className='w-full h-2/4'>
                            <div className='w-full h-full bg-[#d9d9d9] rounded-full'>
                                <div className='w-10/12 h-full bg-[#63dbfc] rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex my-4'>
                    <div className='flex justify-center w-1/5'>
                        <img src={ Vuejs } className='w-14 h-14'/>
                    </div>

                    <div className='w-4/5'>
                        <p className='w-full h-2/4 font-medium'>VueJs</p>
                        <div className='w-full h-2/4'>
                            <div className='w-full h-full bg-[#d9d9d9] rounded-full'>
                                <div className='w-9/12 h-full bg-[#41b883] rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex my-4'>
                    <div className='flex justify-center w-1/5'>
                        <img src={ Tailwind } className='w-14 h-14'/>
                    </div>

                    <div className='w-4/5'>
                        <p className='w-full h-2/4 font-medium'>Tailwind</p>
                        <div className='w-full h-2/4'>
                            <div className='w-full h-full bg-[#d9d9d9] rounded-full'>
                                <div className='w-11/12 h-full bg-[#14b3c6] rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex my-4'>
                    <div className='flex justify-center w-1/5'>
                        <img src={ Nodejs } className='w-14 h-14'/>
                    </div>

                    <div className='w-4/5'>
                        <p className='w-full h-2/4 font-medium'>NodeJs</p>
                        <div className='w-full h-2/4'>
                            <div className='w-full h-full bg-[#d9d9d9] rounded-full'>
                                <div className='w-full h-full bg-[#82cd28] rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex my-4'>
                    <div className='flex justify-center w-1/5'>
                        <img src={ Laravel } className='w-14 h-14'/>
                    </div>

                    <div className='w-4/5'>
                        <p className='w-full h-2/4 font-medium'>Laravel</p>
                        <div className='w-full h-2/4'>
                            <div className='w-full h-full bg-[#d9d9d9] rounded-full'>
                                <div className='w-7/12 h-full bg-[#fb473b] rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </main>
    )
}