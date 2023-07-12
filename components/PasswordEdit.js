import {toast} from 'react-toastify'
import {useState} from 'react'
import {RxCross1} from 'react-icons/rx'
import { passUpdate } from '../action/user'
import { useRouter } from 'next/router'
// import {error , successAlert} from '../nextToast/toast'

function PasswordEdit({setPasswordModel, id}) {
  
    const router = useRouter();
    const [password , setPassword] = useState({password: '', newPassword : ''})

    const inputHandel = (e) =>{
        setPassword({
          ...password,
          [e.target.name] : e.target.value
        })
      }

    const updatePass = async(e)=>{
        e.preventDefault();
      const res =  await passUpdate(password, id)
      router.push('/')
    }

  return (
    <div className='absolute bg-transparent w-full h-full flex items-center justify-center' >
        <div className='bg-slate-950 text-white h-80 w-3/4 flex flex-col gap-5 justify-center items-center relative'>
            <span className='absolute right-2 top-2 cursor-pointer' onClick={()=>setPasswordModel(false)} ><RxCross1/></span>
            <h1 className='text-lg font-bold' >Edit Password</h1>
            <form onSubmit={updatePass} className=' flex flex-col gap-3' >
              <div className='flex flex-col gap-1'>
                <label className='text-base font-medium'>Old Password</label>
                <input 
                  className='rounded-md h-8 w-60 outline-none text-sm text-black px-4' 
                  onChange={inputHandel} 
                  type="password" placeholder="Old Password"  
                  name="password"
                  value={password.userpassword}
                  required
                  />
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-base font-medium'>New Password</label>
                <input 
                  className='rounded-md h-8 w-60 outline-none text-sm text-black px-4' 
                  onChange={inputHandel} 
                  type="password" placeholder="New Password"  
                  name="newPassword"
                  value={password.userpassword}
                  required
                  />
              </div>
              <input className='cursor-pointer py-1 px-5 bg-blue-600 rounded-md' type="submit" value="Update" />
            </form>
        </div>
    </div>
  )
}

export default PasswordEdit