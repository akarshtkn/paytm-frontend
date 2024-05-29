import React, { useEffect, useState } from 'react'
import { AppBarComponent } from '../../components/appbar'
import { BalanceComponent } from '../../components/balance'
import { Users } from '../../components/users'
import axios from 'axios';

function Dashboard() {
  const token = localStorage.getItem("jwt")
  const user = JSON.parse(localStorage.getItem("user"));
  const [balance, setBalance] = useState(0);

  const fetchBalance = async () => {
    const response = await axios.get(`http://localhost:8080/api/v1/account/balance?userId=${user.id}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    setBalance(response.data)
  }

  useEffect(() => {
    fetchBalance()
  }, [user.id])

  return (
    <div>
      <AppBarComponent firstName={user.firstName} lastName={user.lastName} />
      <BalanceComponent amount={balance} />
      <Users />
    </div>
  )
}

export default Dashboard