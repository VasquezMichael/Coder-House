import logo from './logo.svg';
import {Navbar} from './components/Navbar'
import { ChakraProvider, Heading } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Navbar/>
    </ChakraProvider>
  );
}

export default App;
