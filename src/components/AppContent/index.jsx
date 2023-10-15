import React from "react"
import "../AppContent/appContent.css"
import smallCloudIcon from "../../assets/cloud.png"
import smallHazeIcon from "../../assets/haze.png"
import smallHumidityIcon from "../../assets/humidity.png"
import smallInfoIcon from "../../assets/info.png"
import smallMaxTempIcon from "../../assets/maxTemp.png"
import smallMinTempIcon from "../../assets/minTemp.png"
import smallPressureIcon from "../../assets/pressure.png"
import smallSpeedometerIcon from "../../assets/speedometer.png"
import smallRainIcon from "../../assets/storm.png"
import smallSunnyIcon from "../../assets/sunny.png"
import smallSunRiseIcon from "../../assets/sunrise.png"
import smallSunSetIcon from "../../assets/sunset.png"

// Function to format the date to 'YYYY-MM-DD HH:MM:SS' format
function formatDate(date) {
  // const year = date.getFullYear();
  // const month = String(date.getMonth() + 1).padStart(2, "0");
  // const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  // const seconds = String(date.getSeconds()).padStart(2, "0");
  // return `${year}-${month}-${day} ${hours}:${minutes}`;
  return ` ${hours}:${minutes}`
}

const AppContent = ({data}) => {
  // Convert to Date objects
  const sunriseDate = new Date(data?.sys?.sunrise * 1000)
  const sunsetDate = new Date(data?.sys?.sunset * 1000)
  // Convert to human-readable formats
  const sunriseReadable = formatDate(sunriseDate)
  const sunsetReadable = formatDate(sunsetDate)
  return (
    <div className="weather">
      {data && data && (
        <div className="weather__info">
          <h1 className="weather__items--city" title={data.name}>
            {data.main ? <span>{parseInt(data.main.temp - 275)}°</span> : null}
            {data.name}{" "}
          </h1>
          <div className="weather__items">
            {sunriseReadable ? (
              <h3 className="weather__items--sunrise" title="sunrise">
                <img
                  style={{width: "50px"}}
                  src={smallSunRiseIcon}
                  alt="sunrise"
                />
                <span className="weather--info">{sunriseReadable} </span>
              </h3>
            ) : null}

            {sunsetReadable ? (
              <h3 className="weather__items--sunset" title="sunset">
                <img
                  style={{width: "50px"}}
                  src={smallSunSetIcon}
                  alt="sunset"
                />
                <span className="weather--info">{sunsetReadable} </span>
              </h3>
            ) : null}
            {data.main ? (
              <h3 className="weather__items--temp" title="minimumTemperature">
                <img
                  style={{width: "50px"}}
                  src={smallMinTempIcon}
                  alt="mintemp"
                />
                <span className="weather--info">
                  {parseInt(data.main.temp_min - 275)}°
                </span>
              </h3>
            ) : null}
            {data.main ? (
              <h3 className="weather__items--temp" title="maximumTemperature">
                <img
                  style={{width: "50px"}}
                  src={smallMaxTempIcon}
                  alt="maxtemp"
                />
                <span className="weather--info">
                  {parseInt(data.main.temp_min - 275)}°
                </span>
              </h3>
            ) : null}

            {data.weather ? (
              <h3 className="weather__items--desc" title="descripiton">
                <img
                  style={{width: "30px"}}
                  src={smallInfoIcon}
                  alt="description"
                />
                <span className="weather--info">
                  {data.weather[0].main === "Clouds" ? (
                    <img style={{width: "60px"}} src={smallCloudIcon} />
                  ) : data.weather[0].main === "Rain" ? (
                    <img style={{width: "60px"}} src={smallRainIcon} />
                  ) : data.weather[0].main === "Clear" ? (
                    <img style={{width: "60px"}} src={smallSunnyIcon} />
                  ) : data.weather[0].main === "Haze" ? (
                    <img style={{width: "60px"}} src={smallHazeIcon} />
                  ) : null}
                </span>
              </h3>
            ) : null}

            {data.main ? (
              <h3 className="weather__items--humidity" title="humidity">
                <img
                  style={{width: "50px"}}
                  src={smallHumidityIcon}
                  alt="humidity"
                />
                <span className="weather--info">{data.main.humidity}%</span>
              </h3>
            ) : null}

            {data.main ? (
              <h3 className="weather__items--pressure" title="pressure">
                <img
                  style={{width: "50px"}}
                  src={smallPressureIcon}
                  alt="pressure"
                />
                <span className="weather--info">{data.main.pressure}hPa</span>
              </h3>
            ) : null}

            {data.wind ? (
              <h3 className="weather--speed" title="windSpeed">
                <img
                  style={{width: "50px"}}
                  src={smallSpeedometerIcon}
                  alt="speed"
                />
                <span className="weather--info">{data.wind.speed}km/h </span>
              </h3>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}

export default AppContent
