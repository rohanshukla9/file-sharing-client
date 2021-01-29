function App() {
  return (
    <div className="w-full md:w-8/12 lg:w-6/12 mx-auto px-6 mt-6 md:mt-20">
      <header className="flex flex-wrap md:flex-no-wrap items-center justify-between mb-6">
        <ul className="flex items-center">
          <li>
            <a href="/" className="text-sm inline-block p-3 text-gray-800 ">
              home
            </a>
          </li>
          <li>
            <a href="/" className="text-sm inline-block p-3 text-gray-800 ">
              Your Files
            </a>
          </li>
        </ul>

        <ul className="flex items-center">
          <li>
            <a href="/" className="text-sm inline-block p-3 text-gray-800 ">
              Account
            </a>
          </li>
          <li>
            <a href="/" className="text-sm inline-block p-3 text-gray-800 ">
              Sign in
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
