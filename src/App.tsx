import Featured from "./components/dashboard/Featured";
import Insights from "./components/dashboard/Insights";

function App() {
  return (
    <div className="bg-background min-h-[100vh] ">
      <div className="h-16 bg-black text-white flex justify-between px-5 items-center">
        <i class="fa-solid fa-bars"></i>
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
    </div>
  );
}

export default App;
