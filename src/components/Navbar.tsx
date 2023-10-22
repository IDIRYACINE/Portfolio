'use client'

import clsx from 'clsx'
import { useState, useEffect, useRef } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';

export default function Navbar() {
    const destiantions = ["Home", "About", "Experience", "Projects", "Contacts", "Resume"]

    const [state, setState] = useState({
        atTop: true,
        activeIndex: 0,
        heights: [0],
        sidebarOpen: false
    })

    const isMobile = useMediaQuery('(max-width:768px)');

    const router = useRouter()

    const navRef = useRef<HTMLDivElement>(null)


    const className = clsx([
        "invisible fixed top-0 left-0 w-full h-16 flex flex-row justify-center items-center z-50 transition-all duration-300",
        state.atTop ? "bg-transparent" : "bg-alternative shadow-md"
    ])

    useEffect(() => {
        if (navRef.current) {
            navRef.current.classList.remove("invisible")
            navRef.current.classList.add("animate-fadeIn")
        }

        const handleScroll = () => {

            const displayNavbar = window.scrollY >= window.innerHeight
            const atTop = window.scrollY <= 30

            if (state.atTop != atTop) setState((old) => ({ ...old, atTop: atTop }))

            if (state.heights.length === 1) {
                const homeHeight = document.getElementById("Home")?.offsetTop!
                const aboutHeight = document.getElementById("About")?.offsetTop!
                const experienceHeight = document.getElementById("Experience")?.offsetTop!
                const projectsHeight = document.getElementById("Projects")?.offsetTop!
                const contactHeight = document.getElementById("Contacts")?.offsetTop!

                setState((old) => ({ ...old, heights: [homeHeight, aboutHeight, experienceHeight, projectsHeight, contactHeight] }))
            }

            const activeIndex = state.heights.findIndex((height, index) => {
                const nextHeight = state.heights[index + 1]

                if (nextHeight) {
                    return window.scrollY >= height && window.scrollY < nextHeight
                } else {
                    return true
                }
            })


            if (state.activeIndex !== activeIndex) setState((old) => ({ ...old, activeIndex: activeIndex }))

        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }


    }, [state])


    const toggleSidebar = () => {
        setState((old) => ({ ...old, sidebarOpen: !old.sidebarOpen }))
    }

    const Content = () => {

        return (
            <div className="w-196 flex flex-row justify-between items-center ">
                {

                    isMobile ? <button onClick={toggleSidebar}><MenuIcon className="text-4xl" /> </button> :
                        destiantions.map((destination, index) => {
                            const href = destination !== "Resume" ? `#${destination}` : "/Resume.pdf"
                            const props = {
                                title: destination,
                                href,
                                active: state.activeIndex === index,
                            }
                            return <NavItem key={`nav-item-${index}`} {...props} />
                        })
                }
            </div>
        )

    }

    const Sidebar = () => {
        const className = clsx([
            "fixed top-0 left-0 w-full h-screen flex flex-col justify-evenly items-center z-60 transition-all duration-300 bg-alternative",
            isMobile ? state.sidebarOpen ? "translate-x-0 visible" : "-translate-x-full visible" : "invisible"
        ])
        return (
            <div className={className}>
                {
                    destiantions.map((destination, index) => {
                        const href = destination !== "Resume" ? `#${destination}` : "/Resume.pdf"

                        const props = {
                            title: destination,
                            active: state.activeIndex === index,
                            handleClick: () => {
                                router.push(href)
                                toggleSidebar()
                            }
                        }
                        return <MobileNavItem key={`nav-item-${index}`} {...props} />
                    })
                }
            </div>
        )
    }

    return (
        <nav ref={navRef} className={className}>
            <Content />
            <Sidebar />
        </nav>
    )
}

interface NavItemProps {
    title: string
    href: string
    active?: boolean
}
function NavItem({ title, href, active }: NavItemProps) {

    const className = clsx([
        "text-base hover:text-purple-500 transition-colors duration-300",
        active ? "text-purple-500" : "text-white",
    ])

    return (
        <a className={className} href={href}>
            {title}
        </a>
    )
}



interface MobileNavItemProps {
    title: string
    active?: boolean
    handleClick: () => void
}
function MobileNavItem({ title, active, handleClick }: MobileNavItemProps) {

    const className = clsx([
        "text-3xl hover:text-purple-500 transition-colors duration-300",
        active ? "text-purple-500" : "text-white",
    ])

    return (
        <button className={className} onClick={handleClick}>
            {title}
        </button>
    )
}
