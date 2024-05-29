export function UserListing({users}){
    return(
        <div className="flex flex-col gap-6 p-4">
            {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-slate-200">
                            U{user.id}
                        </div>
                        <div className="font-medium text-sms">
                            {user.firstName}
                        </div>
                    </div>
                    <button className="rounded-md bg-black text-white px-4 py-1.5">
                        Send Money
                    </button>
                </div>
            ))}
        </div>
    )
}