import profileImg from '../assets/avatar-jessica.jpeg'


function Header() {
  return (
    <header className='flex flex-col items-center mb-7'>
        <img src={profileImg} alt="Jessica Randall" className='rounded-full h-24 w-24 block mb-8'/>
        <h1 className='font-bold text-center text-2xl text-white'>Jessica Randall </h1>
        <h3 className='text-green text-sm text-center mb-6 font-medium'>London, United Kingdom </h3>
        <p className='text-base text-slate-100 text-center'>"Front-end developer and avid reader."</p>
    </header>
  )
}

export default Header
