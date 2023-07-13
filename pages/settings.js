import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import {AiOutlineUser, AiOutlineLogout, AiOutlineMail,AiOutlineEdit} from 'react-icons/ai'
import {MdPassword} from 'react-icons/md'
import {FaUserEdit} from 'react-icons/fa'
import { decodedToken } from '../action/verifyToken'
import { findUser } from '../action/user'
import UserEdit from '../components/UserEdit'
import LogOut from '../components/LogOut'
import EmailEdit from '../components/EmailEdit'
import PasswordEdit from '../components/PasswordEdit'


function Settings() {
 
  const [user, setUser] = useState('')
  const [username, setusername] = useState('')
  const [email, setEmail] = useState('')
  const {id} = user;

  const [userModel , setUserModel] = useState(false)
  const [emailModel, setEmailModel] = useState(false)
  const [passwordModel , setPasswordModel] = useState(false)
  const [log , setLog] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        const user = decodedToken();
        setUser(user);
  
        const data = await findUser(user.id);
        const { userName, email } = data?.user;
        setEmail(email);
        setusername(userName);
      } catch (error) {
        // Handle any errors that occur during data fetching
        console.error(error);
      }
    })();
  }, []);

  return (
    <Layout>
      <div className='relative h-[calc(100vh-142px)]  bg-bgBlack text-lightText -mt-[1px]' >
        {userModel && <UserEdit id={id}  userName={username} setUserModel={setUserModel} /> }
        {emailModel && <EmailEdit id={id} useremail={email} setEmailModel={setEmailModel} />}
        {passwordModel && <PasswordEdit id={id} setPasswordModel={setPasswordModel} /> }
        {log && <LogOut setLog={setLog} /> }
        <div className='max-w-[500px] md:max-w-[1280px] md:px-10 mx-auto px-5 py-2' >
          <div className='flex flex-col gap-9'>
            <div className='flex justify-center '>
              <h2 className='text-lg font-semibold text-center border-b-2 tracking-wider'>Settings</h2>
            </div>
            <div className=''><h2 className='text-lg font-semibold tracking-wide'>Account</h2></div>
            <div className='flex gap-2 items-center'>
              <div className='w-10 h-10 bg-[#71a3f5] rounded-full flex justify-center items-center'>
                <span><AiOutlineUser size={25}/></span>
              </div>
              <span className='text-bage font-medium text-gray-400'>Username</span>
              <span className='w-auto border-b-[1px] text-gray-400 ml-1'>{username}</span>
              <span className='cursor-pointer ' onClick={()=> setUserModel(true)} ><FaUserEdit size={20} /></span>
            </div>

            <div className='flex gap-2 items-center'>
              <div className='w-10 h-10 bg-[#71a3f5] rounded-full flex justify-center items-center'>
                <span><AiOutlineMail size={25}/></span>
              </div>
              <span className='text-bage font-medium text-gray-400'>Email</span>
              <span className='w-auto border-b-[1px] text-gray-400 ml-1'>{email}</span>
              <span className='cursor-pointer ' onClick={()=> setEmailModel(true)} ><AiOutlineEdit size={20} /></span>
            </div>

            <div className='flex gap-2 items-center'>
              <div className='w-10 h-10 bg-[#71a3f5] rounded-full flex justify-center items-center'>
                <span><MdPassword size={25}/></span>
              </div>
              <span className='text-bage font-medium text-gray-400'>Password</span>
              <span className='w-auto border-b-[1px] text-gray-400 ml-1'>Change Pass</span>
              <span className='cursor-pointer ' onClick={()=> setPasswordModel(true)} ><AiOutlineEdit size={20} /></span>
            </div>

            <div className='flex gap-2 items-center'>
              <div className='w-10 h-10 rounded-full flex justify-center items-center bg-[#633a52]'>
                <span onClick={()=> setLog(true)} className='text-gray-400 cursor-pointer'><AiOutlineLogout size={25} /></span>
              </div>
              <span onClick={()=> setLog(true)} className='text-base font-medium text-gray-400 cursor-pointer'>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Settings