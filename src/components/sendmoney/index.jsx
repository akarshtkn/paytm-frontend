import { ButtonComponent } from "../button";
import { InputBox } from "../inputbox";

export function SendMoneyComponent(){
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
                            U
                        </div>
                        <div className="font-semibold">
                            Akarsh
                        </div>
                    </div>
                    <InputBox label={"Amount (in Rs)"} placeholder={"Enter Amount"} />
                    <ButtonComponent label={"Initiate Transfer"} color={true} />
                </div>
            </div>
        </div>
    )
}