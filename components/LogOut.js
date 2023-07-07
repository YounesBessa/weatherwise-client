import { useRouter } from "next/router";

function LogOut({setLog}){

    const router = useRouter();

    const logOut = ()=>{
        localStorage.clear();
        router.push('/login')
    }

  return (
    <div className='absolute bg-transparent w-full h-full flex items-center justify-center' >
        <div className='bg-slate-950 text-white h-auto w-auto flex flex-col gap-4 px-8 py-5 justify-center items-center relative rounded-md'>
            <h1 className='text-lg font-bold '>Are You sure Log Out!</h1>
            <div className='flex justify-between gap-5'>
                <span onClick={()=> setLog(false)} className='py-1 px-5 text-base font-medium bg-blue-500 rounded-md cursor-pointer'>No</span>
                <span onClick={logOut} className='py-1 px-5 text-base font-medium bg-red-500 rounded-md cursor-pointer'>Yes</span>
            </div>
        </div>
    </div>
  )
}

export default LogOut