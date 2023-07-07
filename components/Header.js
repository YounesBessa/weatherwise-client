import logo from '../public/images/logo.png'
import Image from 'next/image'
import { useRouter } from 'next/router'


function Header() {

  const router = useRouter();
  return (
    <div className='main'>
        <div className='container'>
            <div onClick={()=>router.push('/')} className=" h-[64px] flex justify-center items-center cursor-pointer gap-2">
                <Image width={28} height={28} src={logo} alt="Weather Logo" />
                <h2 className='text-lg font-semibold tracking-wider'>WeatherWise</h2>
            </div>
        </div>
    </div>
  )
}

export default Header