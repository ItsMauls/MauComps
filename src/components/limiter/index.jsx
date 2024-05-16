export const Limiter = () => {
    return (
        <div className="flex items-center gap-x-3">
            <h2 className="text-gray-500">1-10 dari 45</h2>
            <select name="limiter" className="border-gray-200 border px-5 text-center mx-auto py-3 rounded-lg">
                <option value="10">10</option>
                <option value="10">20</option>
                <option value="10">30</option>
            </select>
        </div>
    )
}