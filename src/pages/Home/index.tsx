import React from "react";
import { useTheme } from "../theme";

const HomePage = () => {
  const { theme, toggleTheme , themeColors } :any = useTheme();

  return (
    <div
      className={`example_container ${theme === "light" ? "theme-light" : "theme-dark"} flex items-start justify-center h-screen`}>
      <div className="flex flex-col items-center mt-8">
        <div className="flex gap-5 xl:flex-row md:flex-col xs:flex-col ">
          <div className={`${theme === 'light' ? 'bg-light-A_div_bg' : 'bg-dark-A_div_bg' } w-[10rem] h-[10rem] border rounded-lg flex items-center justify-center text-xl`}> A div </div>
          <div className={`${theme === 'light' ? 'bg-light-B_div_bg' : 'bg-dark-B_div_bg' } w-[10rem] h-[10rem] border rounded-lg flex items-center justify-center text-xl`}> B div </div>
          <div className={`${theme === 'light' ? 'bg-light-C_div_bg' : 'bg-dark-C_div_bg' } w-[10rem] h-[10rem] border rounded-lg flex items-center justify-center text-xl`}> C div </div>
        </div>
        <button
          onClick={toggleTheme}
          className={`text-xl w-fit rounded-xl my-8 py-1 px-4 ${themeColors[theme].buttonColor}`}>
          Toggle Theme
        </button>
      </div>
      <div className="absolute bottom-0 pb-6">Made with ❤️ by Aniket Jain</div>
    </div> 
  );
};

export default HomePage;
