import { useMediaQuery } from "react-responsive";
import Router from "./Router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { displaySelector } from "./atoms";

function App() {
  const [display, setDisplay] = useRecoilState(displaySelector)
  const desktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const tablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  useEffect(()=>{
    if(desktop) {
      setDisplay('desktop') 
      return
    } else if(tablet) {
      setDisplay('tablet')
      return
    }
  },[])
  return (
    <Router/>
  );
}

export default App;
