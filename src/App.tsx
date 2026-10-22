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
          <img src="https://images.unsplash.com/photo-1673112574931-76fe4f5869fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Vigelandsparken" style={{maxWidth: '100%'}} />
         </Section>
      </div>
    </>
  )
}

export default App
