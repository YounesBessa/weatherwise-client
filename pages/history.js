import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {CiTempHigh} from 'react-icons/ci'
import {WiHumidity} from 'react-icons/wi'
import { forecastWeather } from '../action/weather'


function History() {

  const [weather, setWeather] = useState([]);

  useEffect(async()=>{
      const weatherData = await forecastWeather()
      const mainData = weatherData?.data
      setWeather(mainData)
  },[])


  return (
    <Layout>
      <div className='relative h-[calc(100vh-142px)]  bg-bgBlack text-lightText -mt-[1px]'>
        <div className='max-w-screen-md mx-auto px-5 py-2 flex flex-col'>
            <div className='flex justify-center '>
              <h2 className='text-lg font-semibold text-center border-b-2 tracking-wide'>Last week's history</h2>
            </div>
          <div className='flex flex-col mt-5'>
            <div className='flex items-center'>
              <div className='flex-1 flex items-center '>
                <h2 className='text-base font-semibold border-b-2'>July</h2>
              </div>
              <div className='w-[160px] flex justify-between items-center'>
                <span><TiWeatherPartlySunny size={27}/></span>
                <span><CiTempHigh size={32}/></span>
                <span className='-mr-3'><WiHumidity size={42}/></span>
              </div>
            </div>
            <div className='flex mt-5 items-center'>
              <div className='flex-1 flex flex-col gap-8'>
                {
                  weather?.map((day, index)=>(
                    <h2 key={index} className='text-base font-semibold'>{day.dayname}</h2>
                  ))
                }
              </div>
              <div className='flex flex-col gap-8' >
                {
                    weather?.map((dayweather, val)=>(
                      <div key={val} className='w-[160px] flex justify-between items-center'>
                        <span className='text base font-semibold'>{Math.floor(dayweather.lighting)} LX</span>
                        <span className='text base font-semibold'>{Math.floor(dayweather.temperature)}&deg;C</span>
                        <span className='text base font-semibold'>{Math.floor(dayweather.humidity)}%</span>
                      </div>
                    ))
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default History
