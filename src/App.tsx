import Featured from "./components/dashboard/Featured";
import Insights from "./components/dashboard/Insights";

function App() {
  return (
    <div className="bg-background min-h-[100vh] ">
      <div className="h-16 bg-black text-white flex justify-between px-5 items-center">
        <i className="fa-solid fa-bars"></i>
        <span>user@company.com</span>
      </div>
      <div className="lg:w-[95vw] mx-auto">
        <div className="flex justify-between  my-12">
          <h1 className="text-3xl font-bold text-accent-foreground">
            Dashboard
          </h1>
          <a
            href=""
            className="text-primary border-4 px-7 rounded-full border-primary"
          >
            Copy link
          </a>
        </div>
        <Featured />
        <Insights />

        <div className="bg-gray-600 my-10 py-36 rounded-xl"></div>
      </div>
      <div className="bg-[#0f0d2d] h-96 pl-12 pt-24 flex items-baseline justify-between">
        <h4 className="bg-white text-[#0f0d2d] text-lg inline px-4 tracking-[.5rem] font-extrabold">
          STYLITICS
        </h4>
        <div className="w-[60%] flex justify-evenly">
          <div className="flex flex-col gap-5 text-slate-400">
            <span className="text-xs">Account Manager</span>
            <span className="font-bold text-slate-300">Jamie Williams</span>
            <span className="text-xs font-bold">
              Jamie.William@stylitics.com
            </span>
          </div>
          <div className="flex flex-col gap-5 text-slate-400">
            <span className="font-bold">Technical Documentation</span>
            <span className="font-bold ">Platform</span>
            <span className="font-bold ">Stylitics.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
