import useThemeContext from "../assets/theme";

export default function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useThemeContext();

  const themeToggle = () => {
    themeMode === "dark" ? lightTheme() : darkTheme();
  };

  return (
    <div
      id="themeBtn"
      onClick={themeToggle}
      className="hidden sm:flex fixed right-5 top-6 z-50 p-3
                 items-center justify-center cursor-pointer 
                 bg-gray-300 dark:bg-gray-700 rounded-full"
    >
      {themeMode === "light" || themeMode === null ? "🌞" : "🌙"}
    </div>
  );
}
