import { cn } from "@/lib/cn"

export const Button = ({
    className,
    icon,
    children
}) => {
    return ( 
        <button className={cn('py-3 rounded-xl px-6 flex items-center gap-x-1', className)}><span className="text-xl">{icon ?? ''}</span> {children}</button>
    )
}