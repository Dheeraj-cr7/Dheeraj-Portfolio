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
      className=" fixed right-[20px] top-[25px] z-40 p-3
                 flex items-center justify-center cursor-pointer 
                 bg-gray-300 dark:bg-gray-700 rounded-full"
    >
      {themeMode === "light" ? "🌞" : "🌙"}
    </div>
  );
}
