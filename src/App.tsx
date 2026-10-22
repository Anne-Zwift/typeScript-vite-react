import './App.css';
import { Greeting } from './components/Greeting';
import { Section } from './components/layout/Section';

function App() {
 
  return (
    <>
      <Greeting name="Anne-Zwift" message="" />
      <div>
        <Section title='Explore Oslo'>
          <p>Visit the Opera by the fjord or maybe the Vigeland universe</p>
          <img src="https://lh3.googleusercontent.com/grass-cs/AABkmLfz-gAZnNNAolgyKQm2r5vyl1ux0KMHpszlcVOfJPUb4UlzOBBUbsIZXLWNo2A9ZR65Hb2QzL9HJzFVY_NRDOayMO0Nxm-Dj1OUjnehf3syKOzrotgDpOC0_FJMeHkJgISuPQDG=w270-h312-n-k-no" alt="Vigelandsparken" style={{maxWidth: '100%'}} />
         </Section>
      </div>
    </>
  )
}

export default App
