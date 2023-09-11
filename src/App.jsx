import './css/App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer';

function App() {

  return (
    <>
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a Elixir Parfum"/>
    </div>
    </>
  )
}

export default App
