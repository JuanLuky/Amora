import './styles/global.css'
import Amora from './image/amora.jpeg';

export function App() {
  return (
    <div className='container'>
      <div className='container-img'>
        <img src={Amora}/>
      </div>

      <strong>Amora</strong>
      <p>Gosta de Girassol</p>
      <p>Mãe da Helô</p>
      <p>Futura esposa do @Juan</p>

      <a href="https://www.instagram.com/barretomih_/">Siga-me</a>
    </div>
  )
}
