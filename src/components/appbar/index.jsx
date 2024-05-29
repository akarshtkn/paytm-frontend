export function AppBarComponent({firstName, lastName}){
    return(
        <div className="shadow flex justify-between items-center h-14 p-4">
            <div className="flex font-bold text-2xl">
                Payments App
            </div>
            <div className="flex gap-4">
                <div className="pt-2.5">Hello {firstName.charAt(0).toUpperCase() + firstName.slice(1)}</div>
                <button className="flex justify-center items-center rounded-full h-10 w-10 bg-slate-200">
                    {firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()}
                </button>
            </div>
        </div>
    )
}