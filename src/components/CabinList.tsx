import { useState, useEffect, useContext } from 'react';
import type { ChangeEvent } from 'react';
import { ApiConfigContext } from '../context/ApiConfigContext';
import type { Cabin } from '../types/cabin';

// Static test data that simulates responses from an API
const MOCK_CABINS: Cabin[] = [
  { id: 1, name: 'Granstua', region: 'Skogen', pricePerNight: 1200 },
  { id: 2, name: 'Fjellro', region: 'Fjellheimen', pricePerNight: 1800 },
  { id: 3, name: 'Bølgeblikk', region: 'Kysten', pricePerNight: 1500 },
  { id: 4, name: 'Toppheim', region: 'Fjellheimen', pricePerNight: 2200 },
  { id: 5, name: 'Havbris', region: 'Kysten', pricePerNight: 1600 },
];

export function CabinList() {
  const config = useContext(ApiConfigContext);

  // 2. Create all local states with the correct TypeScript types
  const [cabins, setCabins] = useState<Cabin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectRegion, setSelectRegion] = useState<string | null>(null);

  // 3. Use useEffect to "fetch" data when the component is displayed (mounts)
  useEffect(() => {
    // Logs the URL to the console as requested by the task
    console.log('Fetching Cabins from API base-URL:', config.baseUrl);

    // Simulates an asynchronous API call that takes 1 second
    const timer = setTimeout(() => {
      try {
        // If everything goes well, the cabins are saved and the loading screen is turned off
        setCabins(MOCK_CABINS);
        setLoading(false);
      } catch {
        setError('Could not load Cabins.');
        setLoading(false);
      }
    }, 1000);

    // Optional cleanup (clears the timer if the user leaves the page before the second has elapsed)
    return () => clearTimeout(timer);
  }, [config.baseUrl]); // Rerun if baseUrl unexpectedly changes

  // 4. Handle changes in the dropdown menu
  const handleRegionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    // If the user selects "All", the state is set to null (no filtering)
    setSelectRegion(value === 'Alle' ? null : value);
  };

  // 5. Filter the cabins based on what the user has selected
  const filteredCabins =
    selectRegion && selectRegion !== 'Alle'
      ? cabins.filter((c) => c.region === selectRegion)
      : cabins;

  const regions = ['Alle', ...new Set(cabins.map((cabin) => cabin.region))];

  // 6. Determine what should be displayed on the screen
  if (loading) return <p>Loading available Cabins...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Available Cabins</h2>
      {/* Drop-down menu for selecting a region */}
      <div>
        <label htmlFor='region-select' style={{ marginRight: '10px' }}>
          Choose Region
        </label>
        <select
          id='region-select'
          value={selectRegion ?? 'Alle'}
          onChange={handleRegionChange}
          style={{ padding: '5px' }}>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {/* List of cabins on the screen */}
      {filteredCabins.length === 0 ? (
        <p>No Cabins found at this region.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {filteredCabins.map((cabin) => (
            <li
              key={cabin.id}
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                marginBottom: '10px',
                borderRadius: '4px',
              }}>
              <strong>{cabin.name}</strong> ({cabin.region}) -{' '}
              {cabin.pricePerNight} kr / night
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
