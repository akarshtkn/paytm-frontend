import { UserListing } from "../userlisting";

const users = [{id:1, firstName: "akarsh"},
    {id:2, firstName: "shamili"},
    {id:3, firstName: "ronnie"},
    {id:4, firstName: "yash"},
    {id:5, firstName: "vrinda"},
]

export function Users(){
    return(
        <div className="flex flex-col p-4 gap-2">
            <div className="font-semibold text-2xl">
                Users
            </div>
            <input type="text" placeholder="Search users..." className="border rounded-md w-full p-2" />
            <UserListing users={users} />
        </div>
    )
}