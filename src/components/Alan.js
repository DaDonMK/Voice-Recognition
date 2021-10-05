import React, {useEffect, useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import axios from 'axios'
import Header from './Header'

const alanKey = 'b1241bc1995ab5ef709b223ee2ba57452e956eca572e1d8b807a3e2338fdd0dc/stage'
const weatherKey = '85ae73c8dbb8e5fe8cf51bf0e607f330'

function Allen() {

  var currentTime = new Date().toLocaleTimeString()
  var currentDate = new Date().toLocaleDateString()

  useEffect(() => {
    
    alanBtn({
      key: alanKey,
      onCommand: ({command}) => {
        switch(command){
          case("What time is it?"):
            alanBtn().playText(currentTime);
            break
          case("What date is it?"):
            alanBtn().playText(currentDate);
            break
          case('What is the weather today?'):
            (async () => {
              const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=${weatherKey}`)
              alanBtn().playText(data.data.weather[0].description + ' in Dallas today');
            })()
            break
          default:
            alanBtn().playText("Please try again");
        }
      }
    })

  },[])

  return (
    <div className="App">
      <Header />
      <p>Voice Recognition Mock</p>
    </div>
  );
}

export default Allen;
