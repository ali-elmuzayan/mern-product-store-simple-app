import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Box} from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Box minH={"100vh"}>
            <div>Hello welcome</div>
        </Box>
    </>
  )
}

export default App
