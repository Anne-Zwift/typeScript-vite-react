import './App.css';
import { CabinList } from './components/CabinList';
import { ContactForm } from './components/ContactForm';
import { FylkeDisplay } from './components/FylkeDisplay';
import { Greeting } from './components/Greeting';
import { Section } from './components/layout/Section';
import { ApiConfigProvider } from './context/ApiConfigProvider';
import { DataCard } from './components/DataCard';
import type { CarListing, JobListing } from './types/listings.ts';
import { ListingStatusPill } from './components/ListingStatusPill.tsx';
import { RandomGame } from './components/RandomGame.tsx';
import { ProfileCard } from './components/ProfileCard.tsx';
import { Button } from './components/ui/button.tsx';
import { PreferencesPanel } from './components/PreferencesPanel.tsx';

function App() {
  {
    /*mock Car object and a mock JobListing object*/
  }
  const mockCar: CarListing = {
    id: 'c1',
    brand: 'Tesla',
    model: 'Model Y',
    year: 2023,
    price: 399000,
  };
  const mockJob: JobListing = {
    id: 'j1',
    title: 'Senior Frontend Developer',
    company: 'Finn.no AS',
    location: 'Oslo (Hybrid)',
    salary: '850 000 - 1 000 000 kr',
  };

  // Mock data for user profiles
  const users = [
    {
      avatarUrl:
        'https://images.unsplash.com/photo-1783936093098-2daf9e8ef72e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      name: 'Zoe',
      bio: 'Outdoor enthusiasm, favorite game frisbee',
      followers: 3,
      isFollowing: false,
    },
    {
      avatarUrl:
        'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      name: 'Anne-Zwift',
      bio: 'Outdoor enthusiasm, favorite drink dark roasted coffee',
      followers: 3,
      isFollowing: false,
    },
  ];
  return (
    <>
      <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4 mt-10'>
        <div className='text-xl font-medium text-black'>
          Tailwind v4 is working! 🎉 Some previous styling might not...
        </div>
      </div>
      {/*min-h-screen fills the entire height of the screen*/}
      {/*grid and place-items-center center the component perfectly—both vertically and horizontally*/}
      {/*bg-background automatically adjusts the background color for light or dark mode*/}
      <div className='min-h-screen w-full grid place-items-center bg-background p-4'>
        <PreferencesPanel />
      </div>

      <Greeting name='Anne-Zwift' message='' />
      <div className='flex space-x-4 p-8'>
        {users.map((user) => (
          <ProfileCard key={user.name} user={user} />
        ))}
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-bold'>Shadcn + Tailwind v4</h1>
        <div className='flex gap-2'>
          <Button variant='default'>Main Button</Button>
          <Button variant='destructive'>Delete Button</Button>
          <Button variant='outline'>Outline Button</Button>
        </div>
      </div>
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
          name='Oslo'
          population={709037}
          areaSqKm={454}
          imageUrl='https://images.unsplash.com/photo-1433757741270-94a3bcadc2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
        />

        {/* Vestland county data */}
        <FylkeDisplay
          name='Vestland'
          population={641241}
          areaSqKm={33871}
          imageUrl='https://images.unsplash.com/photo-1724914410128-a27332d14092?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
        />
      </div>
      <ApiConfigProvider>
        <div
          style={{
            fontFamily: 'sans-serif',
            maxWidth: '600px',
            margin: '40px auto',
            padding: '0 20px',
          }}>
          <header
            style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
            <h1>Cabin AS</h1>
            <p style={{ color: '#666', fontStyle: 'italic' }}>
              Find your dream cabin in the mountains, by the coast or in the
              woods
            </p>
          </header>
          <main>
            <CabinList />
          </main>
        </div>
      </ApiConfigProvider>
      <ContactForm />
      <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
        <h1>My Mock App for Finn.no</h1>

        {/** Generic DataCard used for a Car */}
        <h2>Car for sale</h2>
        <DataCard
          item={mockCar}
          renderContent={(car) => (
            <div>
              <span
                style={{
                  fontSize: '0.85em',
                  color: '#999',
                  textTransform: 'uppercase',
                }}>
                Car for sale
              </span>
              <h3 style={{ margin: '4px 0' }}>
                {car.brand} {car.model} ({car.year})
              </h3>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#0066cc' }}>
                Price: {car.price.toLocaleString('no-NO')} kr
              </p>
            </div>
          )}
        />
        {/** Generic DataCard used for a Job */}
        <h2>Available positions</h2>
        <DataCard
          item={mockJob}
          renderContent={(job) => (
            <div>
              <span
                style={{
                  fontSize: '0.85em',
                  color: '#999',
                  textTransform: 'uppercase',
                }}>
                Positions
              </span>
              <h3 style={{ margin: '4px 0' }}>{job.title}</h3>
              <p style={{ margin: '0 0 4px 0', color: '#333' }}>
                {job.company} — <em>{job.location}</em>
              </p>
              <p style={{ margin: 0, fontSize: '0.9em', color: '#666' }}>
                Salary: {job.salary} kr/year
              </p>
            </div>
          )}
        />
      </div>
      {/* Discriminated union component demonstrated with all three statuses */}
      <h2>Ad status</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginBottom: '24px',
        }}>
        <ListingStatusPill
          status='ACTIVE'
          lastRenewed='2024-06-01'
          views={142}
        />
        <ListingStatusPill status='SOLD' soldDate='2024-05-20' price={385000} />
        <ListingStatusPill status='EXPIRED' expiryDate='2024-04-15' />
        {/* Random game fetched from Noroff API */}

        <h2
          style={{
            gap: '8px',
            margin: '24px',
          }}>
          Random Games
        </h2>
        <RandomGame />
      </div>
    </>
  );
}

export default App;
