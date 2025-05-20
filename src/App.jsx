import { UseRef } from './hooks/Useref'
import { Useid } from './hooks/UseId'
// import './App.css'
import { Propdrill } from './Propdrilling/Propdrill'
import {BioProvider} from './Propdrilling/Contextapi';
import {Home} from './Propdrilling/Home';
 import { About } from './Propdrilling/About';
import { Contact } from './Propdrilling/Contact';
function App() {


  return (
    <>
      {/* <UseRef/> */}
      {/* <Useid/>   */}
      {/* <Propdrill/> */}
      <BioProvider>
        <Home/>
        <About/>
        <Contact/>
      </BioProvider>
    </>
  )
}

export default App
