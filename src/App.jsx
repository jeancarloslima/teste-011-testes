import { BotaoFavorito } from "./components/BotaoFavorito"
import BuscadorPaisEPrevisao from "./components/BuscadorPaisEPrevisao"
import { Contador } from "./components/Contador"

function App() {

  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
    {/* <BuscadorPaisEPrevisao /> */}
    <BotaoFavorito />
    <Contador />
    </div>
  )
}

export default App
