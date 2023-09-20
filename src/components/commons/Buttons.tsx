
interface ButtonProps { children: React.ReactNode, onClick?: () => void }
export function PrimaryButtonOutlined({ children, onClick }: ButtonProps) {

    return (
        <button className="text-purple-500 text-2xl border border-purple-500 p-2 hover:bg-purple-500 hover:text-white" onClick={onClick}>
            {children}
        </button>
    )
}

interface LinkProps {
    children: React.ReactNode,
    href: string,
}
export function LinkOutlined({ children, href }: LinkProps) {
    return (
        <a href={href} className="text-purple-500 text-2xl border border-purple-500 p-2 hover:bg-purple-500 hover:text-white" >
            {children}
        </a>
    )
}