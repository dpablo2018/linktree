import './indie.css'
import './App.css';

import Picture from './picture.jsx'
import Name from './name';
import Icons from './icons';
import Button1 from './button1';


function App() {
  return (
    <div className="App ">

      
      <div className='  '>
        {/*Making circle for Personal Pic */}
        
        <Picture />
        

        <Name></Name>
       
        <Icons></Icons>

        <Button1 />
        
      </div>


    </div>
  );
}

export default App;
