import {useState} from 'react'
import {RxCross1} from 'react-icons/rx'
import { userUpdate } from '../action/user'
import { useRouter } from 'next/router'

function EmailEdit({useremail, setEmailModel, id}) {
  
    const router = useRouter();
    const [email , setEmail] = useState({email: ''})

    const inputHandel = (e) =>{
        setEmail({
          ...email,
          [e.target.name] : e.target.value
        })
      }


    const update = async(e)=>{
        e.preventDefault();
        await userUpdate(email, id)
        router.push('/')
        
    }

  return (
    <div className='absolute bg-transparent w-full h-full flex items-center justify-center' >
        <div className='bg-slate-950 text-white h-80 w-3/4 flex flex-col gap-5 justify-center items-center relative'>
            <span className='absolute right-2 top-2 cursor-pointer' onClick={()=>setEmailModel(false)} ><RxCross1/></span>
            <h1 className='text-lg font-bold' >Edit Email</h1>
            <form onSubmit={update} className=' flex flex-col gap-3' >
              <div className='flex flex-col gap-1'>
                <label className='text-base font-medium'>Email</label>
                <input 
                  className='rounded-md h-8 w-60 outline-none text-sm text-black px-4' 
                  onChange={inputHandel} 
                  type="email" placeholder={useremail}  
                  name="email"
                  value={email.useremail}
                  required
                  />
              </div>
              <input className='cursor-pointer py-1 px-5 bg-blue-600 rounded-md' type="submit" value="Update" />
            </form>
        </div>
    </div>
  )
}

export default EmailEdit