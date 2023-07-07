import Links from './Links'
import {footerLink} from './lib/data.js'

function Footer() {
  return (
    <div className='main'>
        <div className='container'>
            <div className="w-full flex justify-between">
              {
                footerLink.map((link)=>(
                  <Links key={link.key} link={link} />
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Footer