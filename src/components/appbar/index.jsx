export function AppBarComponent({user}){
    return(
        <div className="shadow flex justify-between items-center h-14 p-4">
            <div className="flex font-bold text-2xl">
                Payments App
            </div>
            <div className="flex gap-4">
                <div className="pt-2.5">Hello, {user}</div>
                <button className="flex justify-center items-center rounded-full h-10 w-10 bg-slate-200">U</button>
            </div>
        </div>
    )
}