import Header from "./Header"
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from '../nextToast/tostify'

export default function PublicLayout({ children }) {
    return (
      <div className="h-screen">
        <div className="w-full top-0"><Header /></div>
        <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
        <main >{children}</main>
      </div>
    )
  }