import { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar';


function App() {
  const [theme, setTheme] = useState(0);
  return (
    < >
      <Navbar heading="Java" textColor={theme === 0 ? "dark":'light' } themeColor={theme === 0 ? "light":'dark'} onSelect={() => null}></Navbar>
    </>
  );
}

export default App;
