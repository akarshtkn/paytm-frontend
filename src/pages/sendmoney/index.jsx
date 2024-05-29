import { useSearchParams } from "react-router-dom";
import { ButtonComponent } from "../../components/button";
import { InputBox } from "../../components/inputbox";
import { useState } from "react";
import axios from "axios";

export default function SendMoney(){
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id")
  const name = searchParams.get("name")
  const token = localStorage.getItem("jwt")
  const user = JSON.parse(localStorage.getItem("user"));
  const [amount, setAmount] = useState(0);

  const handleMoneyTransfer = async () => {
    await axios.post("http://localhost:8080/api/v1/account/transfer", {
      fromUserId : user.id,
      toUserId : id,
      amount : amount},
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }

    return(
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="flex flex-col justify-center h-full">
                <div className="w-96 h-min space-y-8 p-8 bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col items-center">
                    <h2 className="font-bold text-3xl">
                        Send Money
                    </h2>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-green-500 text-white">
                            {name.charAt(0).toUpperCase()}
                        </div>
                        <div className="font-semibold">
                            {name}
                        </div>
                    </div>
                    <InputBox label={"Amount (in Rs)"} placeholder={"Enter Amount"} onChange={(e) => setAmount(e.target.value)} />
                    <ButtonComponent label={"Initiate Transfer"} color={true} 
                      onClick={() => handleMoneyTransfer()}/>
                </div>
            </div>
        </div>
    )
}