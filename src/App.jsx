import Navbar from './componens/Navbar'
import Footer from './componens/Footer'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

// theme
import { ThemeProvider } from './assets/theme'
import ThemeBtn from './componens/ThemeBtn'

const App = () => {
  const [themeMode, setThemeMode] = useState(null);

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");
  const toggleTheme = () => setThemeMode(prev => prev === "dark" ? "light" : "dark");

  useEffect(() => {
    const mode = JSON.parse(localStorage.getItem("mode"))
    if (mode) setThemeMode(mode)
  }, [])

  useEffect(() => {
    if (!themeMode) return
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
    localStorage.setItem("mode", JSON.stringify(themeMode))
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme, toggleTheme }}>
      <ThemeBtn />
      <Toaster
        toastOptions={{
          style: {
            borderRadius: "8px",
            background: themeMode === "dark" ? "#1a1a1a" : "#fff",
            color: themeMode === "dark" ? "#fff" : "#333",
          },
        }}
      />

      <div className='bg-[#ddddf7] dark:bg-black w-full h-full font-archivo'>
        <Navbar toggleTheme={toggleTheme} />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
