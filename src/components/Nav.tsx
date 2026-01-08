import { useState } from "react";
import { BsList, BsX } from "react-icons/bs";

type Option = {
    name: string;
    link: string;
    target?: string;
}

export default function Nav({ options }: { options: Option[] }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="fixed top-0 left-0 z-50 w-full h-12 bg-gray-950 flex justify-between items-center px-4 border-b border-gray-800 text-white">
            <h1 className="text-2xl font-bold font-mono">Fretboard</h1>
            <BsList
                className="text-3xl cursor-pointer lg:hidden"
                onClick={() => setShowMenu(!showMenu)}
            />
            <ul
                className={`
                    flex flex-col fixed top-0 left-0 h-screen bg-gray-950 w-full justify-center items-center text-xl gap-4
                    ${showMenu ? "translate-x-0" : "-translate-x-full"}
                    transition-transform
                    lg:flex-row lg:static lg:h-full lg:w-auto lg:text-base lg:translate-x-0 lg:bg-transparent
                `}
            >
                <BsX
                    onClick={() => setShowMenu(!showMenu)}
                    className="absolute top-2 right-2 text-3xl cursor-pointer hover:scale-105 lg:hidden"
                />
                {
                    options.map((o, i) => {
                        return (
                            <li
                                className="lg:hover:border-b border-blue-800 lg:h-full lg:flex lg:items-center lg:px-4"
                                key={i}
                            >
                                <a
                                    className="font-semibold"
                                    onClick={() => setShowMenu(false)} href={o.link}
                                    target={o.target ? o.target : "_self"}
                                >
                                    {o.name.toUpperCase()}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}