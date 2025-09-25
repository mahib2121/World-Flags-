import { Suspense } from 'react';
import './App.css';
import Countries from './Compo/Countries';


const FechCunt = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Countries FechCunt={FechCunt} />
      </Suspense>
    </>
  );
}

export default App;