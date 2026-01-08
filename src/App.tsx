import Fretboard from "./components/Fretboard"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="min-h-screen w-full pt-16 bg-gray-950 bg-opacity-80 bg-blend-multiply bg-[url('/guitar.jpg')] bg-center bg-cover">
      <Nav
        options={[
          { name: "Github", link: "https://github.com/dspedroborges/fretboard", target: "_blank" }
        ]}
      />
      <Fretboard />
    </div>
  )
}

export default App
