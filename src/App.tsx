// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Home} from './pages/Home/Home'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 



function App() {
  // const [count, setCount] = useState(0)

  const queryClient = new QueryClient();

  return (
  
    // <div className='top-0 left-0 w-full h-full '>

    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //       <h1 className="text-3xl font-bold mb-8">预223测市场</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
      <QueryClientProvider client={queryClient}>
        <Home/>
      </QueryClientProvider>
    // </div>
  )
  // return 
}

export default App
