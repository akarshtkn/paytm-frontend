import axios from "axios";
import { useEffect, useState } from "react"
import { ButtonComponent } from "../button";
import { useNavigate } from "react-router-dom";

export function Users(){
    const token = localStorage.getItem("jwt")
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const [users,setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/user/get?filter=${filter}&userId=${currentUser.id}`,
            {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                setUsers(response.data)
            })
        
    }, [filter])

    return(
        <div className="flex flex-col p-4 gap-2">
            <div className="font-semibold text-2xl">
                Users
            </div>
            <input onChange={(e) => setFilter(e.target.value)} type="text" placeholder="Search users..." className="border rounded-md w-full p-2" />
            <div className="flex flex-col gap-6">
            {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-slate-200">
                            {user.firstName.charAt(0).toUpperCase() + user.lastName.charAt(0).toUpperCase()}
                        </div>
                        <div className="font-medium text-sms">
                            {user.firstName}
                        </div>
                    </div>
                    <button className="rounded-md bg-black text-white px-4 py-1.5"
                        onClick={() => navigate('/send?id=' + user.id + "&name=" + user.firstName)}>
                        Send Money
                    </button>
                </div>
            ))}
        </div>
        </div>
    )
}