import clsx from 'clsx'
import dynamic from 'next/dynamic'

interface ButtonProps { children: React.ReactNode, onClick?: () => void, className?: string }
export function PrimaryButtonOutlined({ children, onClick, className }: ButtonProps) {
    const compClassName = clsx(
        [
            "text-purple-500 text-2xl border border-purple-500 p-2 hover:bg-purple-500 hover:text-white",
            className
        ]
    )
    return (
        <button className={compClassName} onClick={onClick}>
            {children}
        </button>
    )
}



const socialMediaClassName = 'fill-purple-500 hover:fill-white'

interface LinkProps {
    children: React.ReactNode,
    href: string,
    className?: string
}
export function LinkOutlined({ children, href, className }: LinkProps) {
    const compClassName = clsx(
        [className,
            "text-purple-500 text-2xl border border-purple-500 p-2 hover:bg-purple-500 hover:text-white"
        ]
    )
    return (
        <a href={href} className={compClassName} >
            {children}
        </a>
    )
}

export function GithubLink({ href,className }: { href: string ,className?:string}) {
    const GithubIcon = dynamic(
        () => import('@mui/icons-material/GitHub').then(module => module),
    )

    const iconClassName = clsx([
        className,
        socialMediaClassName,
    ])

    return (
        <LinkOutlined href={href} ><GithubIcon className={iconClassName} /></LinkOutlined>
    )

}
