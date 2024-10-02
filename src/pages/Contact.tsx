import { useState, useEffect } from "react"
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
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>()

    // Ajouter un état pour gérer les messages de succès et d'erreur
    const [formStatus, setFormStatus] = useState<"success" | "error" | "">("")

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
        ).then(() => {
            // Mettre à jour l'état pour indiquer que l'envoi est un succès
            setFormStatus("success")
            // Réinitialiser le formulaire
            reset()
        }).catch(() => {
            // Mettre à jour l'état en cas d'erreur
            setFormStatus("error")
        })
    }

    // useEffect pour supprimer le message de succès après 5 secondes
    useEffect(() => {
        if (formStatus === "success") {
            const timer = setTimeout(() => {
                setFormStatus(""); // Réinitialiser l'état après 5 secondes
            }, 5000); // 5000 ms = 5 secondes
            return () => clearTimeout(timer); // Nettoyer le timer quand le composant se démonte ou formStatus change
        }
    }, [formStatus]);

    return (
        <main>
            <section className="flex justify-center items-center w-full py-20">
                <div className='flex flex-col justify-center items-center w-1/2'>
                    <h1 className="text-6xl font-bold">Comment me contacter</h1>
                    <p className="mt-4 text-xl font-medium text-center">
                        N'hésitez pas à me contacter pour toute question ou demande d'informations. Je suis disponible pour discuter de mes 
                        projets ou d'une éventuelle candidature. Vous pouvez me joindre directement par e-mail ou via le formulaire de contact 
                        ci-dessous. Je vous remercie de votre intérêt et je vous répondrai dans les plus brefs délais.
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
                        <div className="flex flex-col mb-8">
                            <input 
                                {...register("name", { required: true })} 
                                type="text" 
                                id="name" 
                                name="name" 
                                className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`} 
                                placeholder="Prénom & Nom / entreprise *" 
                                autoComplete="off"
                            />
                        </div>

                        <div className="flex flex-col mb-8">
                            <input 
                                {...register("email", { required: true })} 
                                type="email" 
                                id="email" 
                                name="email" 
                                className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`} 
                                placeholder="Email *" 
                                autoComplete="off"
                            />
                        </div>

                        <div className="flex flex-col mb-8">
                            <textarea 
                                {...register("message", { required: true })} 
                                id="message" 
                                name="message" 
                                className={`w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md resize-none`} 
                                rows={7} 
                                placeholder="Message *" 
                                autoComplete="off"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="py-2 px-6 font-medium text-white bg-blue-500 rounded-lg transition duration-150 ease-out hover:bg-blue-600"
                        >
                            Envoyer le formulaire
                        </button>
                    </form>
                </div>
            </section>

            {/* Affichage du message de succès ou d'erreur, fixé en bas à droite */}
            {formStatus === "success" && (
                <div className="fixed bottom-4 right-4 p-4 w-80 bg-green-100 text-green-700 rounded-lg shadow-lg">
                    Votre message a bien été envoyé, merci pour votre prise de contact !
                </div>
            )}
            {formStatus === "error" && (
                <div className="fixed bottom-4 right-4 p-4 w-80 bg-red-100 text-red-700 rounded-lg shadow-lg">
                    Une erreur est survenue, veuillez réessayer plus tard.
                </div>
            )}

            <Footer/>
        </main>
    )
}