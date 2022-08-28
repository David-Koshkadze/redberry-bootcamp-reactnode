import TopPager from "./components/TopPager"
import InfoPage from "./pages/InfoPage"
import LaptopDetails from "./pages/LaptopDetails"
import List from "./pages/List"

function App() {
  return (
    <>
      <TopPager activeItem={1} />
      {/* <InfoPage /> */}
      <LaptopDetails />
      {/* <List /> */}
    </>
  )
}

export default App
