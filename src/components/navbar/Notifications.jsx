import { notif } from "@/constants/notifications"
import { cn } from "@/lib/cn";

export const Notifications = ({className}) => {
    return (
        <>
        {notif.map((val, idx) => {         
            return <button key={idx} className={cn("text-gray-500 text-xl px-2 last:border-r-2 border-black", className)}>{val.logo}</button>
            })}
        </>
    )
}