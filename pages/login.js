import {useState, useEffect} from 'react'
import PublicLayout from '../components/PublicLayout';
import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import Link from 'next/link'
import { userLogin } from '../action/auth';
import { error, successAlert } from '../nextToast/toast';
import { useRouter } from 'next/router';
import { decodedToken } from '../action/verifyToken';

function Login() {

  const router = useRouter()

  useEffect(()=>{
    const info = decodedToken();
    if(info ){
      router.push('/')
    }
  })

    const [user, setUser] = useState({
      email : '',
      password : ''
    });
    
    const inputHandel = (e) =>{
      setUser({
        ...user,
        [e.target.name] : e.target.value
      })
    }
  
    const userLog = async(event) =>{
      event.preventDefault()
        const res = await userLogin(user)
        if(res.success === true){
          successAlert(res)
          router.push('/')
        }else{
          error(res)
        }
  } 

  return (
    <PublicLayout>
        <div className="w-full h-[calc(100vh-63px)] -mt-[1px] bg-bgBlack ">
            <div className="max-w-screen h-full-md mx-auto flex items-center px-4">
                <div className="w-full flex justify-center items-center mt-20">
                    <form className="flex flex-col gap-5">
                        <div className="flex w-[280px] relative items-center justify-between h-10 border-b border-gray-400">
                            <span className="flex flex-1 justify-center text-lightText"><AiOutlineMail size={22}/></span>
                            <input 
                            className="w-[230px] text-lightText bg-transparent h-10 outline-none focus:bg-transparent" 
                            type="email" 
                            value={user.userName} 
                            onChange={inputHandel} 
                            name='email'
                            placeholder="Enter Your Email" />
                        </div>
                        <div className="flex w-[280px] relative items-center justify-between h-10 border-b border-gray-400">
                            <span className="flex flex-1 justify-center text-lightText"><RiLockPasswordLine size={22}/></span>
                            <input className="w-[230px] text-lightText bg-transparent h-10 outline-none focus:bg-transparent" 
                            type="password" 
                            value={user.password} 
                            onChange={inputHandel} 
                            name='password'
                            placeholder="Password" />
                        </div>
                        <div className="flex item-center justify-center h-8 rounded-md cursor-pointer active:bg-teal-950 w-[280px] bg-teal-900">
                            <input className="text-lightText text-lg font-semibold bg-transparent outline-none cursor-pointer" onClick={userLog} type="Submit" name="" id="" value='SIGN IN' />
                        </div>
                        <div className="flex justify-center items-center" >
                            <p className="text-xs tracking-wide text-lightText">Create a new account &nbsp; <Link href='/register' ><span className="underline cursor-pointer">Sign up</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PublicLayout>
  )
}

export default Login