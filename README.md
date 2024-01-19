# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
          work on <addlist.jsx/> notes <Main.jsx/> styles below to match.



    <input
            type="search"
            placeholder="search"
            className="px-5 border-2 border-purple-300 outline-none h-10 w-full rounded-3xl "
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full sm:w-2/3 md:w-1/2 px-6 py-3  bg-gray-900 rounded-2xl  mx-auto  ">
        <div className=" bg-gray-800 text-white  pr-3 overflow-auto h-96 ">
          {todos.map((todo) => {
            return (
              <div key={todo.id}>
                <ListItem todo={todo} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-center relative  pt-4">
        <Link
          className=" shadow-xl hover:bg-purple-950 transition ease-in-out duration-300  p-1 rounded-full scale-150 bg-purple-700 text-white mx-auto "
          to={"add/"}
        >


