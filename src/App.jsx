import Navbar from './componens/Navbar'
import Background from './assets/Background'
import Footer from './componens/Footer'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

// theme
import { ThemeProvider } from './assets/theme'
import ThemeBtn from './componens/ThemeBtn'

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="w-full h-full absolute z-[-1] p-0 m-0 bg-white dark:bg-black transition-colors duration-300">
          <Background
            dotSize={3}
            gap={15}
            baseColor="#44355F"
            activeColor="#2196F3"
            proximity={150}
            shockRadius={100}
            shockStrength={5}
            resistance={750}
            returnDuration={1.2}
          />
        </div>

        {/* Context Provider must wrap children */}
          <ThemeBtn />
          <div>
            <Navbar />
            <Outlet />
            <Footer />
          </div>
      </ThemeProvider>
    </>
  );
};

export default App;
