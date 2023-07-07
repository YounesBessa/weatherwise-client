import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../public/images/logo.png'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {CiTempHigh} from 'react-icons/ci'
import {WiHumidity} from 'react-icons/wi'
import { decodedToken } from '../action/verifyToken'
import { findUser } from '../action/user'
import { currentWeather } from '../action/weather'

function MainHome() {

  const [username, setusername] = useState('')
  const [weather , setWeather] = useState('')

  useEffect(() => {
    async function fetchData() {
      const user = decodedToken();
  
      const data = await findUser(user?.id);
      const name = data?.user?.userName;
      setusername(name);
  
      const weatherData = await currentWeather();
      const currentData = weatherData?.data[0];
      setWeather(currentData);
    }
  
    fetchData();
  }, []);
  


  return (
    <div className="main">
      <div className="max-w-screen-md flex flex-col text-lightText mx-auto px-4">
        <div className='flex flex-col justify-start'>
          <h2 className='text-lg font-semibold'>Hello, &nbsp;<span className='text-gray-400 capitalize'>{username}</span></h2>
        </div>
        <div className='pt-8'>
            <div className='flex flex-col justify-center items-center gap-1'>
              <h2 className='text-lg font-semibold'>Monday</h2>
              <h2 className='text-lg font-semibold text text-gray-400'>July 10, 2023</h2>
            </div>
            <div className='flex justify-center items-center  gap-1 mt-5'>
              <p className='text-base font-semibold text-lightText'>Paris</p>
              <small className='text-xs font-medium text-gray-400 mt-1'>France</small>
            </div>
            <div className='flex items-center justify-center pt-8'>
              <Image src={logo} priority height={150} width={150} alt="Logo" />
            </div>
            <div className='flex justify-between items-center pt-12 ml-3'>
              <div className='flex flex-col gap-1 '>
                  <TiWeatherPartlySunny size={32} />
                  <span className='text-lg font-semibold'>{weather.lighting} LX</span>
              </div>
              <div className='flex flex-col gap-1'>
                <CiTempHigh size={38}/>
                <span className='text-lg font-semibold'>{weather.temperature}&deg;C</span>
              </div>
              <div className='flex flex-col gap-1 -mt-[6px]'>
                <WiHumidity className='relative -left-[2px]' size={50}/>
                <span className='text-lg font-semibold'>{weather.humidity}%</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default MainHome

