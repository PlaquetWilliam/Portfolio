import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from "@emailjs/browser"

import { Footer } from "../components/Footer";

import Scroll from '../img/Scroll.png'

import { MdEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { FaPhone } from "react-icons/fa";

type FormInputs = {
    name: String,
    email: String,
    message: String
}

export const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()
    const onSubmit: SubmitHandler<FormInputs> = data => {
        emailjs.send(
            "service_dvm84oy",
            "template_tfhdenk",
            {
                name: data.name,
                email: data.email,
                message: data.message
            },
            "W8mlEkvXhCi9ciBmv"
        )
    }

    return (
        <main>
            <section className="flex justify-center items-center w-full py-20">
                <div className='flex flex-col justify-center items-center w-1/2'>
                    <h1 className="text-6xl font-bold">Comment me contacter</h1>
                    <p className="mt-4 text-xl font-medium text-center">
                        N'hésitez pas à me contacter pour toute question ou demande d'informations. Je suis disponible pour discuter de 
                        mes projets ou d'une éventuelle candidature. Vous pouvez me joindre directement par mail ou via le formulaire 
                        de contact ci-dessous. Je vous remercie de votre intérêt et je vous répondrai dans les plus brefs délais.
                    </p>
                </div>
            </section>

            <section className='flex justify-center items-center w-full'>
                <img src={ Scroll } className='rounded-full w-20 h-20'/>
            </section>

            <section className="flex justify-center">
                <div className="flex flex-col justify-evenly items-center py-20 w-1/5">
                    <div className="flex flex-col items-center">
                        <MdEmail className="mb-4 w-16 h-16 text-blue-500"/>
                        <h1>wplaquet72@gmail.com</h1>
                    </div>

                    <div className="flex flex-col items-center">
                        <FaPhone className="mb-4 w-16 h-16 text-blue-500"/>
                        <h1>06 16 21 00 27</h1>
                    </div>

                    <div className="flex flex-col items-center">
                        <GiPositionMarker className="mb-4 w-16 h-16 text-blue-500"/>
                        <h1>5 rue Jacques Brel, Guécélard</h1>
                    </div>
                </div>

                <div className="flex flex-col items-center py-20 w-2/5">
                    <h2 className="w-full text-3xl font-medium mb-8">Formulaire de contact</h2>
                    
                    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-8">
                            <input {...register("name", { required: true })} type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Votre nom" autoComplete="off"/>
                            {/* <div className="flex flex-col justify-center w-full h-[5vh]">
                                {/* { errors.name && <p className="text-[red]">Nom requis</p> }
                            </div> */}
                        </div>

                        <div className="mb-8">
                            <input {...register("email", { required: true })} type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Votre email" autoComplete="off"/>
                            {/* <div className="flex flex-col justify-center w-full h-[5vh]">
                                { errors.email && <p className="text-[red]">Email requis</p> }
                            </div> */}
                        </div>

                        <div className="mb-8">
                            <textarea {...register("message", { required: true })} id="message" name="message" className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none" rows={ 7 } placeholder="Votre message" autoComplete="off"></textarea>
                            {/* <div className="flex flex-col justify-center w-full h-[5vh]">
                                { errors.message && <p className="text-[red]">Message requis</p> }
                            </div> */}
                        </div>

                        <button type="submit" className="py-2 px-6 font-medium text-white bg-blue-500 rounded-lg">Envoyer le formulaire</button>
                    </form>
                </div>
            </section>

            <Footer/>
        </main>
    )
}