import { UseRef } from './hooks/Useref'
import { Useid } from './hooks/UseId'
// import './App.css'
import { Propdrill } from './Propdrilling/Propdrill'
import {BioProvider} from './Propdrilling/Contextapi';
import {Home} from './Propdrilling/Home';
 import { About } from './Propdrilling/About';
import { Contact } from './Propdrilling/Contact';
import { ReducerComp } from './hooks/UseReducer';
import { ImproveUseReducer } from './hooks/ImproveUseReducer';
import { ReactMemo } from './hooks/Memo/ReactMemo';
import { UseMemo } from './hooks/Memo/UseMemo';

function App() {


  return (
    <>
      {/* <UseRef/> */}
      {/* <Useid/>   */}
      {/* <Propdrill/> */}
      {/* <BioProvider>
        <Home/>
        <About/>
        <Contact/>
      </BioProvider> */}
      {/* <ReducerComp/> */}
      {/* <ImproveUseReducer/> */}
      <ReactMemo/>
      {/* <UseMemo/> */}
    </>
  )
}

export default App
