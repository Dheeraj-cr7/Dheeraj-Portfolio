import Navbar from './componens/Navbar'
import Footer from './componens/Footer'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

// theme
import { ThemeProvider } from './assets/theme'
import ThemeBtn from './componens/ThemeBtn'

const App = () => {
  const [themeMode, setThemeMode] = useState(null);

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  useEffect(() => {
    const mode = JSON.parse(localStorage.getItem("mode"))
    if (mode) setThemeMode(mode)
  }, [])

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
    localStorage.setItem("mode", JSON.stringify(themeMode))
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        {/* Context Provider must wrap children */}
          <ThemeBtn />
          <div className='bg-[#ddddf7] dark:bg-black w-full h-full'>
            <Navbar />
            <Outlet />
            <Footer />
          </div>
      </ThemeProvider>
    </>
  );
};

export default App;
