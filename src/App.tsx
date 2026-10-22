import './App.css';
import { FylkeDisplay } from './components/FylkeDisplay';
import { Greeting } from './components/Greeting';
import { Section } from './components/layout/Section';

function App() {
  return (
    <>
      <Greeting name='Anne-Zwift' message='' />
      <div>
        <Section title='Explore Oslo'>
          <p>Visit the Opera by the fjord or maybe the Vigeland universe</p>
          <img
            src='https://images.unsplash.com/photo-1673112574931-76fe4f5869fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
            alt='Vigelandsparken'
            style={{ maxWidth: '100%' }}
          />
        </Section>
      </div>
      <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
            {/* Oslo county data */}
      <FylkeDisplay
        name="Oslo"
        population={709037}
        areaSqKm={454}
        imageUrl="https://images.unsplash.com/photo-1433757741270-94a3bcadc2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
      />

      {/* Vestland county data */}
      <FylkeDisplay
        name="Vestland"
        population={641241}
        areaSqKm={33871}
        imageUrl='https://images.unsplash.com/photo-1724914410128-a27332d14092?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
      />
      </div>
    </>
  );
}

export default App;
