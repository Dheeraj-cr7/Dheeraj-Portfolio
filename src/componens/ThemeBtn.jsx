import useThemeContext from "../assets/theme";

export default function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useThemeContext();

  const themeToggle = () => {
    themeMode === "light" ? darkTheme() : lightTheme();
  };

  return (
    <div
      id="themeBtn"
      onClick={themeToggle}
      className="h-[100px] w-[100px] fixed right-[20px] top-[20px] z-40 
                 flex items-center justify-center cursor-pointer text-4xl 
                 bg-gray-300 dark:bg-gray-700 rounded-full"
    >
      {themeMode === "light" ? "🌞" : "🌙"}
    </div>
  );
}
