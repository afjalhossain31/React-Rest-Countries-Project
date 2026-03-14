import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'


// fetch data / promise 
const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())


function App() {
  return (
    <>
     {/* suspense fallback */} 
      <Suspense fallback={<p>Afjal vai loading....</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
