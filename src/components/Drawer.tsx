import { Social } from "./Social";
import { SubHeader } from "./SubHeader";

export function Drawer() {
  return (
    <div className="fixed md:hidden w-screen h-16 bg-[#121212] bottom-0 shadow-sm z-10 flex flex-col ">
      <SubHeader
        showicon={true}
        twstyle="flex flex-row text-sm items-end px-5 py-1 gap-4 w-full justify-between decoration-0"
      />
    </div>
  );
}
