export function NavbarDark() {
  return (
    <div className="grid  w-full place-items-center rounded-lg p-6 lg:overflow-visible">
      <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] ">
        <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-white bg-gray-900 border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <a
              href="#"
              className="ml-7 mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased text-xl"
            >
              Forecast Finder
            </a>
            <div className="relative  h-8 w-auto  min-w-[288px]">
              <input
                type="search"
                placeholder="Search"
                className="peer h-full w-auto rounded-[10px] border border-blue-gray-200 border-bold !border-blue-gray-400 bg-transparent px-5 py-2 pl-10 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-blue-gray-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <div className="!absolute px-4 top-[10px]">
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                    stroke="#CFD8DC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <button
                className="select-none rounded-3xl bg-gray-900
                 text-gray-900 py-2 px-5 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Search
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden mr-4 lg:block">
                <ul className="flex flex-col gap-4 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                  <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    <a href="#" className="flex items-center">
                      Pages
                    </a>
                  </li>
                  <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    <a href="#" className="flex items-center">
                      Account
                    </a>
                  </li>
                  <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    <a href="#" className="flex items-center">
                      Blocks
                    </a>
                  </li>
                  <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    <a href="#" className="flex items-center">
                      Docs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-x-1">
                <button
                  className="hidden px-4 py-2 font-sans text-xs font-bold text-center text-yellow-20 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                  type="button"
                >
                  <span>Log In</span>
                </button>
                <button
                  className="hidden select-none rounded-3xl bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                  type="button"
                >
                  <div>Sign in</div>
                </button>
              </div>
              <button
                className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                type="button"
              >
                <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
