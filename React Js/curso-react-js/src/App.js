
import {Navbar} from './components/Navbar'
//import { ChakraProvider, Heading } from '@chakra-ui/react'
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting = 'Bienvenidos a DripCode' />
    </>

  );
}

export default App;
