import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar/Navbar';
import Error404 from './pages/Error404';
import Dashboard from './pages/Dashboard/Dashboard';
import Options from './components/Options';
import Parametres from './components/Parametres';
import Stats from './components/Stats';
import ShowBook from './pages/ShowBook';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* path : le chemin de la route, element : la page qui sera chargee lorsque cette route sera atteinte */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/** ceci est un exemple de nested route,des routes dans une route,ou nous avons cetaines parties qui ne changeent jamais comme le menu(voir element dahsboard) le reste se situera la ou est situé Outlet */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/** index est l'equivalent de / , on veut donc dire que /dashboard/ menera vers Options */}
          <Route index element={<Options />} />
          <Route path="parametres" element={<Parametres />} />
          <Route path="stats" element={<Stats />} />
        </Route>
        {/** :id permet de declarer que c'est un parametre,donc que la valeur va changer,et qui dit valeur qui change dit dynamic route */}
        <Route path="/books/:id" element={<ShowBook />} />
        {/** * permet de recuperer les liens non compris dans les liens precedants et donc declarer une erreur 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
