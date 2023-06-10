import React from 'react'
import { useState } from 'react';

const Exercice1 = () => {
  // Hooks
  const [temperature, setTemperature] = useState({
    celsius: 0,
    fahrenheit: 0,
    message: "L'eau ne boue pas"
  });


  // Functions
  const handleCelsius = (e) => {
    let c = e.target.value;
    setTemperature({
      celsius: c,
      fahrenheit: convertC2F(c),
      message: water(c)
    })
  }

  const handleFahrenheit = (e) => {
    let f = e.target.value;
    setTemperature({
      celsius: convertF2C(f),
      fahrenheit: f,
      message: water(convertF2C(f))
    })
  }

  const convertC2F = (c) => {
    return ((c * 9 / 5 + 32)).toFixed(2);
  }

  const convertF2C = (f) => {
    return ((f - 32) * (5 / 9)).toFixed(2);
  }

  const water = (celsius) => {
    return celsius >= 100 ? "L'eau boue" : "L'eau ne boue pas";
  }

  // Render
  return (
    <>
      <div>
        <label htmlFor="celsius">Entrez votre température en °C</label>
        <br/>
        <input id='celsius' type="number"
          value={temperature.celsius}
          onChange={(e) => handleCelsius(e)}
        />
      </div>
      <br/>
      <div>
        <label htmlFor="fahrenheit">Entrez votre température en °F</label>
        <br/>
        <input id='fahrenheit' type="number"
          value={temperature.fahrenheit}
          onChange={(e) => handleFahrenheit(e)}
        />
      </div>

      <div>{temperature.message}</div>
    </>
  )
}

export default Exercice1