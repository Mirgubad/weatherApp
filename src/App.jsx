import {useEffect, useState} from "react"
import "./App.css"
import AppContent from "./components/AppContent"
import axios from "axios"
import SearchInput from "./components/SearchInput"
import AppHeader from "./components/AppHeader"
import CountryCode from "./components/CountryCode"
import rain from "./assets/rain.jpg"
import cloud from "./assets/cloud.jpg"
import haze from "./assets/haze.jpg"
import sunShine from "./assets/sunshine.jpg"
import {TailSpin} from "react-loader-spinner"

function App() {
  const [query, setQuery] = useState("Sabirabad")
  const [weather, setWeather] = useState([])
  const [description, setDescription] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const key = "8d348a62ee12b2bb05648ea0a4a52078"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}`

  const fetchData = async () => {
    const fetchedData = await axios.get(url)
    try {
      if (fetchedData.status === 200) {
        setDescription(
          fetchedData.data.weather[0] ? fetchedData.data.weather[0].main : null
        )
        setWeather(fetchedData.data)
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error.message)
      setQuery("Sabirabad")
    }
  }
  console.log(weather)

  useEffect(() => {
    fetchData()
  }, [query])

  let searchValue = ""
  const handleChange = (e) => {
    searchValue = e.target.value
  }

  const handleSubmit = () => {
    if (searchValue.length > 2) {
      setQuery(searchValue)
    }
  }

  return isLoading ? (
    <div className="loader__container">
      <TailSpin />
    </div>
  ) : (
    <section
      style={{
        backgroundImage: `url(${
          description === "Clear"
            ? sunShine
            : description === "Clouds"
            ? cloud
            : description === "Haze"
            ? haze
            : description === "Rain"
            ? rain
            : null
        })`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <AppHeader>
          <SearchInput
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            value={query}
          />
          <CountryCode weather={weather.sys ? weather.sys.country : null} />
        </AppHeader>
        <AppContent data={weather} />
      </div>
    </section>
  )
}

export default App
