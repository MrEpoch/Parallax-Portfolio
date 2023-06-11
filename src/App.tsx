import './App.css'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import darkPath from "./assets/dark_path.jpg";
import city from "./assets/starry_sky.svg";
import { useEffect, useRef } from 'react';


function App() {
 
  const ParallaxRef = useRef<IParallax>(null);
  
  return (
    <Parallax ref={ParallaxRef} pages={4}>
       <ParallaxLayer 
        factor={3}
        offset={0}
        speed={1}
        style={{
            backgroundImage: `url(${darkPath})`,
            backgroundSize: 'cover',
            filter: 'blur(1px) grayScale(50%)'
            }}>
       </ParallaxLayer> 
        <ParallaxLayer style={{ display: "flex", justifyContent: "center", alignItems:"center" }} onClick={() => ParallaxRef.current?.scrollTo(3)} offset={1} sticky={{ start: 1, end: 2 }}  speed={0.5}> 
            <img style={{ width: "200px", height: "200px", marginRight: "40%", rotate: "-30deg" }} src={city} />
        </ParallaxLayer>

       <ParallaxLayer offset={0} speed={0.5} >
            <h2>Web dev is soo much enjoyable</h2>
       </ParallaxLayer>
    </Parallax>
  )
}

export default App
