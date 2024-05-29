export function BalanceComponent({amount}){
    return(
        <div className="flex items-center p-4">
            <div className="font-semibold text-2xl">
                Your Balance
            </div>
            <div className="font-semibold text-xl ml-8">
                ${amount}
            </div>
        </div>
    )
}