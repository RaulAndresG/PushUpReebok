import Nav from './componete/nav'
import Panel from './componete/pagina'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes y Route



import './App.css';   

function App() {
  return (
    <Router>
      <div className="App"> 
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Panel />} />
          </Routes>
        </div>
        <div>
        </div>
      </div>
    </Router>
  );
}


export default App;

