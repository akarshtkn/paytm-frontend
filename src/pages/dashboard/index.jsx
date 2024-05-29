import React from 'react'
import { AppBarComponent } from '../../components/appbar'
import { BalanceComponent } from '../../components/balance'
import { Users } from '../../components/users'

function Dashboard() {
  return (
    <div>
      <AppBarComponent user={"Akarsh"} />
      <BalanceComponent amount={"10000"} />
      <Users />
    </div>
  )
}

export default Dashboard