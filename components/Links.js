import Link from "next/link"
import { useRouter } from 'next/router'

function Links({link}) {

  const router = useRouter()

  return (
    <div>
        <Link href={link.link} passHref>
            <span className={` ${router.pathname == link.link ? 'text-[#7af59b] duration-200 transition-all': 'text-white'} flex flex-col items-center cursor-pointer`}>
                <span className={` ${router.pathname == link.link ? 'scale-110': ''} text-[28px]`}>{link.icon}</span>
                {link.name}
            </span>
        </Link>
    </div>
  )
}

export default Links