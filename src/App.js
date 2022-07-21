import './App.css';
import { CartProvider } from './componentes/context/CartContext';

import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="App">
     <CartProvider>
        <AppRouter/>
     </CartProvider>
      

    </div>
  );
}

export default App;
