export default function Navbar() {
  return (
    <header className="relative shadow-2xl ">
      <div className="absolute inset-x-0 top-0 h-16 bg-white bg-opacity-5 backdrop-blur-lg w-full"></div>

      <div className="relative flex justify-between items-center bg-transparent px-4 pt-2 lg:mx-14">
        <img src="/img/logo.png" alt="Logo" className="h-8" />
        <button class="rounded-sm border-none flex items-center justify-center mt-2 active:scale-95 transition-transform duration-150 lg:hidden">
          <img src="/img/Ham.png" alt="Menu" className="w-6 h-5 m-1 " />
        </button>

        <div class="hidden lg:flex space-x-4">
          <button class="px-4 py-2  text-white text-lg rounded">Login</button>
          <button class="px-4 py-2 border border-[#8b93b0] text-white text-lg rounded ">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}