import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "../src/SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  const [errorMsg, setErrorMsg] = useState(""); // Add state for error message

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "5dcba6259b7ec8518169132865f7adb2";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let weatherCondition = jsonResponse.weather[0].main; // Extract main weather condition (e.g., "Clouds")
      let iconUrl = `https://openweathermap.org/img/wn/${weatherCondition}@2x.png`; // Placeholder for icon URL fetching

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0],
        iconUrl: iconUrl, // Add iconUrl to the result
      };
      return result;
    } catch (err) {
      setErrorMsg("No such place found!"); // Set error message
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("");
    setErrorMsg("");

    updateInfo((await getWeatherInfo()) || {});
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          sx={{ "& .MuiInputBase-input": { color: "black" } }}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {/* Placeholder for error message display */}
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      </form>
    </div>
  );
}
