import { Footer } from "../components/Footer";

export const Experiences = () => {
    return (
        <main>
            <section className="flex justify-center py-20 w-full">
                <div className="relative max-w-[1200px] w-full mx-auto">
                    {/* Ligne verticale de la timeline */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-[6px] bg-[#e9e9e9] -ml-[3px] rounded-full"></div>

                    {/* Bloc gauche */}
                    <div className="relative w-1/2 px-[40px] py-[10px] left-0">
                        <div className="relative bg-[#ffffff] p-6 rounded-lg border-4 border-[#e9e9e9]">
                            <h1 className="text-4xl font-bold mb-4">Compagnie SNCF, Le Mans</h1>
                            <h2 className="text-2xl font-bold">1ère et 2e Bac Professionnel SN</h2>
                            <h2 className="text-1xl font-bold mb-4">Janvier 2019 et Janvier 2020</h2>
                            <p className="font-medium">Conception d'un site vitrine pour une mission d'apprentissage des langages (Javascript et PHP).</p>
                        </div>
                        <div className="absolute w-[25px] h-[25px] bg-[#ffffff] border-4 border-blue-500 top-[20px] right-[-12px] rounded-full z-10"></div>
                        {/* Flèche pointant vers la droite */}
                        <div className="absolute top-[22px] right-[20px] w-0 h-0 border-solid border-[10px] border-transparent border-l-[#e9e9e9]"></div>
                    </div>
                    
                    {/* Bloc droit */}
                    <div className="relative w-1/2 px-[40px] py-[10px] left-1/2">
                        <div className="relative bg-[#ffffff] p-6 rounded-lg border-4 border-[#e9e9e9]">
                            <h1 className="text-4xl font-bold mb-4">Société Groupe Lelièvre, Le Mans</h1>
                            <h2 className="text-2xl font-bold">Terminale BAC Professionnel SN</h2>
                            <h2 className="text-1xl font-bold mb-4">Mai 2021</h2>
                            <p className="font-medium">Entretien de baies de brassages et configuration de machines virtuelles.</p>
                        </div>
                        <div className="absolute w-[25px] h-[25px] bg-[#ffffff] border-4 border-blue-500 top-[20px] left-[-12px] rounded-full z-10"></div>
                        {/* Flèche pointant vers la gauche */}
                        <div className="absolute top-[22px] left-[20px] w-0 h-0 border-solid border-[10px] border-transparent border-r-[#e9e9e9]"></div>
                    </div>

                    {/* Bloc gauche */}
                    <div className="relative w-1/2 px-[40px] py-[10px] left-0">
                        <div className="relative bg-[#ffffff] p-6 rounded-lg border-4 border-[#e9e9e9]">
                            <h1 className="text-4xl font-bold mb-4">Association La Coulée Douce, La Suze</h1>
                            <h2 className="text-2xl font-bold">1er année de BTS SIO</h2>
                            <h2 className="text-1xl font-bold mb-4">Mai 2022</h2>
                            <p className="font-medium">Mise en place d'une maquette pour rendre plus pratique la compréhension du site pour les employés et apprentissage du logiciel Wordpress.</p>
                        </div>
                        <div className="absolute w-[25px] h-[25px] bg-[#ffffff] border-4 border-blue-500 top-[20px] right-[-12px] rounded-full z-10"></div>
                        {/* Flèche pointant vers la droite */}
                        <div className="absolute top-[22px] right-[20px] w-0 h-0 border-solid border-[10px] border-transparent border-l-[#e9e9e9]"></div>
                    </div>
                    
                    {/* Bloc droit */}
                    <div className="relative w-1/2 px-[40px] py-[10px] left-1/2">
                        <div className="relative bg-[#ffffff] p-6 rounded-lg border-4 border-[#e9e9e9]">
                            <h1 className="text-4xl font-bold mb-4">Société Mblog, Voivres</h1>
                            <h2 className="text-2xl font-bold">Années de BTS SIO</h2>
                            <h2 className="text-1xl font-bold mb-4">Janvier 2023 - Janvier 2024</h2>
                            <p className="font-medium">Refonte totale de l'intranet de l'entreprise avec sa maquette et des versions d'essais. A la fin de ce stage le site a été mis en production.</p>
                        </div>
                        <div className="absolute w-[25px] h-[25px] bg-[#ffffff] border-4 border-blue-500 top-[20px] left-[-12px] rounded-full z-10"></div>
                        {/* Flèche pointant vers la gauche */}
                        <div className="absolute top-[22px] left-[20px] w-0 h-0 border-solid border-[10px] border-transparent border-r-[#e9e9e9]"></div>
                    </div>
                </div>
            </section>

            <Footer/>
        </main>
    )
}