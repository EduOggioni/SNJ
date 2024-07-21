import { LogoName } from "./LogoName";
import { Social } from "./Social";
import { SubHeader } from "./SubHeader";

export function Header() {
  return (
    <>
      <header className="bg-[#121212] shadow-sm h-14 w-full top-0 flex justify-left z-10 md:justify-between md:h-16 md:static">
        <LogoName />
        <Social
          twstyle="mr-60 gap-4 items-center hidden md:flex"
          iconsize={28}
        />
      </header>
      <div className="bg-[#212121] shadow-sm shadow-black h-12 w-full hidden sticky top-0 md:block md:h-16">
        <SubHeader
          showicon={false}
          twstyle="h-full mx-60 flex text-xl justify-between items-center font-bold md:flex-row md:text-2xl"
        />
      </div>
    </>
  );
}
