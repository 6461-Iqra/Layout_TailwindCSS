import "./App.css";

function App() {
  return (
    <>
    <div className="App">
      <h1 className="text-4xl font-bold underline font-serif text-center text-blue-600/100 dark:text-sky-400/"> Layout Using Tailwind-CSS  </h1>
      <h3 className="text-2xl font-serif text-center text-blue-600/75 dark:text-sky-400/75"> First Layout</h3>

     <div className="p-14">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-lg w-full h-svh">
        <img
            src="/src/pic1.png"
            alt="Large"
            className="w-full h-full object-cover rounded-xl"
          />
      </div>

      <div className="rounded-lg w-full h-full">
        <img
            src="/src/pic2.png"
            alt="Large"
            className="w-full h-50 object-cover rounded-xl mb-5"
          />

        <div className="grid  md:grid-cols-2 gap-4 h-1/3">
          <img
            src="/src/pic4.png"
            alt="Large"
            className="w-full h-50 object-cover rounded-xl"
          />
          <img
            src="/src/pic5.png"
            alt="Large"
            className="w-full h-50 object-cover rounded-xl"
          />
        </div>

          <img
            src="/src/pic3.png"
            alt="Large"
            className="w-full h-50 object-cover rounded-xl"
          />
      </div>
     </div>
    </div>

    <hr className="mb-14 text-blue-600/75 dark:text-sky-400/100"></hr>
    <h3 className="text-2xl font-serif text-center text-blue-600/75 dark:text-sky-400/75"> Second Layout</h3>
    <div className="p-10">
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
    <div className="rounded-lg w-full h-full">
        <img
            src="/src/pic2.png"
            alt="Large"
            className="w-full h-1/2 object-cover rounded-xl mb-2"
          />
          <img
            src="/src/pic3.png"
            alt="Large"
            className="w-full h-1/2 object-cover rounded-xl"
          />
      </div>



        <div className="rounded-lg w-full h-svh">
        <img
            src="/src/pic1.png"
            alt="Large"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="rounded-lg w-full h-full">
        <img
            src="/src/pic2.png"
            alt="Large"
            className="w-full h-50 object-cover rounded-xl mb-5"
          />

        <div className="grid  md:grid-cols-2 gap-4 h-1/3">
          <img
            src="/src/pic4.png"
            alt="Large"
            className="w-full h-50 object-cover rounded-xl"
          />
          <img
            src="/src/pic5.png"
            alt="Large"
            className="w-full h-50 object-cover rounded-xl"
          />
        </div>

          <img
            src="/src/pic3.png"
            alt="Large"
            className="w-full h-50 object-cover rounded-xl"
          />
      </div>

      </div>
      </div>
    </div>
    </>
  );
}

export default App;
