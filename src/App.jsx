import './styles/global.css'
import Amora from './image/ag.png';

export function App() {
  return (
    <div className='container'>
      <div className='container-img'>
        <img src={Amora}/>
      </div>

      <strong>Rhayane Falcão</strong>
      <p>Gosta de Ovo com orégano</p>
      <p>Curte Harry Potter</p>
      <p>Parabéns 🥳</p>

      <a href="https://www.instagram.com/indx_rh/">Siga-me</a>
    </div>
  )
}
