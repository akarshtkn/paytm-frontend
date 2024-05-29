import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from '../src/pages/signin/index';
import SignUp from '../src/pages/signup/index';
import Dashboard from '../src/pages/dashboard/index';
import SendMoney from '../src/pages/sendmoney/index';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/send' element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
