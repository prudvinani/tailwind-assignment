
import { useEffect, useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Lastdata from './Component/Lastdata'
import Maincom from './Component/Maincom'
import Profile from './Component/Profile'
import { MdOutlineMenu } from "react-icons/md";
import { GiCancel } from "react-icons/gi";


const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

function App() {
const [SidebarOpen,setSidebarOpen]=useState(true)
const isDesktop=useMediaQuery('(min-width:768px)')

useEffect(()=>{
if(isDesktop==false){
  setSidebarOpen(false)
}else{
  setSidebarOpen(true)
}
},[isDesktop])
  return (
<div className='flex w-full bg-white'  >

  <Header SidebarOpen={SidebarOpen} setSidebarOpen={setSidebarOpen}/>
  <Maincom SidebarOpen={SidebarOpen}/>
</div>
  )
}

export default App
