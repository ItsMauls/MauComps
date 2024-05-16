import { cn } from "@/lib/cn";

export const PriceCard = ({ data }) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={cn(
                `bg-white p-4 rounded-lg drop-shadow-sm transition duration-300`,
                item.hoverColor
            )}
          >
            <div className={cn(
                `border-l-4 px-3 rounded-t-sm rounded-b-sm`,
                item.borderColor
            )}>
              <p className="text-black font-medium text-base mb-1">{item.name}</p>
              <p className={cn(
                `text-sm font-medium text-gray-500 py-1`,
                item.textColor
              )}>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };