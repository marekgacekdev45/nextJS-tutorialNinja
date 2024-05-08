import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/dojo-logo.png'

export default function Navbar() {
  return (
    <nav className=''>
      <Image src={Logo} alt='logo helpdesk logo' width={70} quality={100} placeholder='blur'/>
    <h1>Dojo Helpdesk</h1>
  
        <Link href='/'>Home</Link>
        <Link href='/tickets'>Tickets</Link>
    
</nav>
  )
}
