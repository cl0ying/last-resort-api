import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 sticky top-0 bg-gray-100 p-4 z-10">
        The Last Resort
      </h1>
    </div>
  )
}

export default App
