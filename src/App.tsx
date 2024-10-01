import { Home } from './pages/Home'
import { Skills } from './pages/Skills'
import { Experiences } from './pages/Experiences'
import { Contact } from './pages/Contact'
import { Routes, Route, NavLink } from 'react-router-dom';
import { Theme1 } from './pages/Theme1';
import { Theme2 } from './pages/Theme2';
import { Theme3 } from './pages/Theme3';
import { Theme4 } from './pages/Theme4';

function App() {
  return (
    <div className="h-[100vh]">
      <header className='flex justify-around items-center h-[10vh] border-b-4 border-[#e9e9e9]'>
        <h1 className='text-4xl font-bold'>William.</h1>

        <nav>
          <NavLink className='mr-10 p-2 font-medium' style={({isActive}) => ({color: isActive ? 'rgb(59 130 246)' : '#000000'})} to={ '/' }>Présentation</NavLink>
          <NavLink className='mr-10 p-2 font-medium' style={({isActive}) => ({color: isActive ? 'rgb(59 130 246)' : '#000000'})} to={ '/skills' }>Compétences</NavLink>
          <NavLink className='mr-10 p-2 font-medium' style={({isActive}) => ({color: isActive ? 'rgb(59 130 246)' : '#000000'})} to={ '/experiences' }>Expériences</NavLink>
          <NavLink className='mr-10 py-2 px-6 font-medium rounded-full' style={({isActive}) => ({ backgroundColor: isActive ? 'rgb(59 130 246)' : '#ffffff', color: isActive ? '#ffffff' : 'rgb(59 130 246)', border: isActive ? '2px solid transparent' : '2px solid rgb(59 130 246)'})} to={ '/contact' }>Me contacter</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path='/portfolio' element={ <Home/> }/>
        <Route path='/skills' element={ <Skills/> }/>
        <Route path='/experiences' element={ <Experiences/> }/>
        <Route path='/contact' element={ <Contact/> }/>
        <Route path='/theme1' element={ <Theme1/> }/>
        <Route path='/theme2' element={ <Theme2/> }/>
        <Route path='/theme3' element={ <Theme3/> }/>
        <Route path='/theme4' element={ <Theme4/> }/>
      </Routes>
    </div>
  );
}

export default App;