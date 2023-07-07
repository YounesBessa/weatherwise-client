import { useEffect } from "react"
import Header from "./Header"
import Footer from './Footer'
import { useRouter } from "next/router"
import { decodedToken } from "../action/verifyToken"
export default function Layout({ children }) {

  const router = useRouter()

  useEffect(()=>{
    const info = decodedToken();
    if(info == null && !info){
      router.push('/login')
    }
  })

    return (
      <div className="h-screen">
        <div className="w-full top-0"><Header /></div>
        <main >{children}</main>
        <div className="fixed h-[80px] flex items-center bg-bgBlack w-full bottom-0"><Footer /></div>
      </div>
    )
  }