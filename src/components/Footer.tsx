import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center py-10">
            <h1 className="mb-4 text-2xl font-medium italic">William Plaquet, Développeur Full-Stack</h1>
            <p className="mb-2 flex items-center font-medium">Portfolio créer avec :
                <div className="flex">
                    <FaReact className="ml-2 w-8 h-8 text-[#67d8ff]" />
                    <RiTailwindCssFill className="ml-2 w-8 h-8 text-[#15b3c6]" />
                </div>
            </p>
        </footer>
    )
}