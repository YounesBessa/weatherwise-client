import { useState, useEffect} from "react"
import PublicLayout from "../components/PublicLayout"
import {AiOutlineUser, AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import Link from "next/link"
import { userRegister } from "../action/auth"
import { useRouter } from "next/router"
import { error, successAlert } from "../nextToast/toast"
import { decodedToken } from "../action/verifyToken"


function Register() {

    const router = useRouter()

    useEffect(()=>{
      const info = decodedToken();
      if(info){
        router.push('/')
      }
    })

    const [user, setUser] = useState({
      userName : '',
      email : '',
      password : '',
      confirmPassword : '',
    });

    const inputHandel = (e) =>{
        setUser({
          ...user,
          [e.target.name] : e.target.value
        })
      }

    const userReg = async (event) =>{
        event.preventDefault()
          const res = await userRegister(user)

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
                            <span className="flex flex-1 justify-center text-lightText"><AiOutlineUser size={22}/></span>
                            <input 
                            className="w-[230px] text-lightText bg-transparent h-10 outline-none" 
                            type="text" 
                            placeholder="Enter Your Name"
                            value={user.userName} 
                            onChange={inputHandel} 
                            name='userName'
                            />
                        </div>
                        <div className="flex w-[280px] relative items-center justify-between h-10 border-b border-gray-400">
                            <span className="flex flex-1 justify-center text-lightText"><AiOutlineMail size={22}/></span>
                            <input 
                            className="w-[230px] text-lightText bg-transparent h-10 outline-none" 
                            value={user.email} 
                            onChange={inputHandel} 
                            name='email'
                            placeholder="Enter Your Email" />
                        </div>
                        <div className="flex w-[280px] relative items-center justify-between h-10 border-b border-gray-400">
                            <span className="flex flex-1 justify-center text-lightText"><RiLockPasswordLine size={22}/></span>
                            <input 
                            className="w-[230px] text-lightText bg-transparent h-10 outline-none" 
                            type="password" 
                            placeholder="Password"
                            value={user.password} 
                            onChange={inputHandel} 
                            name='password'
                            />
                        </div>
                        <div className="flex w-[280px] relative items-center justify-between h-10 border-b border-gray-400">
                            <span className="flex flex-1 justify-center text-lightText"><RiLockPasswordLine size={22}/></span>
                            <input 
                            className="w-[230px] text-lightText bg-transparent h-10 outline-none" 
                            type="Password" 
                            value={user.confirmPassword} 
                            onChange={inputHandel} 
                            name='confirmPassword'
                            placeholder="Confirm Password" />
                        </div>
                        <div className="flex w-[280px] relative items-center gap-3 ml-4">
                            <input className=" text-lightText bg-transparent h-5 outline-none" type="checkbox" name=""  />
                            <span className="text-sm underline text-gray-400">Terms and Conditions</span>
                        </div>
                        <div className="flex item-center justify-center h-8 rounded-md cursor-pointer active:bg-teal-950 w-[280px] bg-teal-900">
                            <input className="text-lightText text-lg font-semibold bg-transparent outline-none"onClick={userReg} type="Submit" name="" id="" value='SIGN UP' />
                        </div>
                        <div className="flex justify-center items-center" >
                            <p className="text-xs tracking-wide text-lightText">You have an account &nbsp; <Link href='/login' ><span className="underline cursor-pointer">Sign in</span></Link>  </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PublicLayout>
  )
}

export default Register