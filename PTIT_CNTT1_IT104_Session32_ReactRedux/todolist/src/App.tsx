import { ListContext } from 'antd/es/list/context'
import './App.css'
import Header from './components/Header'
import ListTodo from './components/ListTodo'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-[70%] flex flex-col gap-3' style={{margin:"0 auto"}}>
      <Header/>
      <ListTodo/>
      <Footer/>   
    </div>
  )
}

export default App
