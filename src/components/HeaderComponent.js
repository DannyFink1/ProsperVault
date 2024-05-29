import React from 'react'

export default function HeaderComponent() {
  return (
    <div className=' h-[90px] sm:h-[160px] w-[100%] bg-[#FBF315] flex flex-col overflow-x-hidden'>
      <div className='text-[50px] font-extrabold sm:border-b-4 border-black flex justify-between p-2'>
        <div className='flex w-[33vw] max-h-[75px]'>
          <div className='hidden sm:inline'>ProsperVault &nbsp;</div>
          <img src="https://res.cloudinary.com/dlwmznflr/image/upload/v1716811414/prosperVault/zpsfumigei4kmncwzaoo.png" alt="logo" className="max-h-[70px] pl-2 sm:pl-0 "></img>
        </div>
        <div className='hidden md:flex  w-[33vw] items-center'>
          <div className='h-[40px] border-black border-[3px] bg-white w-[120%] rounded-full flex items-center p-4'>
            <img src="https://res.cloudinary.com/dlwmznflr/image/upload/v1716811413/prosperVault/ojftqye80tspfblejsrt.webp" alt="search" width="25px"></img>
            <input placeholder='Wonach Suchen Sie?' className='w-[100%] h-[29px] outline-0 text-[20px] pl-2'></input>
            
          </div>
        </div>
        <div className='hidden sm:flex w-[10vw] justify-end items-center pl-3'>
          <img src="https://res.cloudinary.com/dlwmznflr/image/upload/v1716811413/prosperVault/tixqouuqhwjrscsnoizl.png" alt="Profil" className='min-w-[50px] max-w-[50px] min-h-[50px] '></img>
        </div>
        <div className='flex sm:hidden w-[10vw] justify-end items-center pl-3'>
          <img src="https://res.cloudinary.com/dlwmznflr/image/upload/v1716815887/menu_kraqxn.png" alt="Profil" className='min-w-[60px] max-w-[60px] min-h-[60px] '></img>
        </div>
      </div>

    

      <div className='border-black justify-between p-5 hidden sm:flex items-center w-[65%] self-center font-medium h-[65px]'>
        <p className='hover:transition-all hover:border-white hover:border-b-[5px] hover:font-bold h-[40px] w-[150px] flex items-center justify-center m-2'>Anmelden</p>
        <p className='hover:transition-all hover:border-white hover:border-b-[5px] hover:font-bold h-[40px] w-[150px] flex items-center justify-center m-2'>Online Banking</p>
        <p className='hover:transition-all hover:border-white hover:border-b-[5px] hover:font-bold h-[40px] w-[150px] flex items-center justify-center m-2'>Unsere Geschichte</p>
        <p className='hover:transition-all hover:border-white hover:border-b-[5px] hover:font-bold h-[40px] w-[150px] flex items-center justify-center m-2'>Börse</p>
        <p className='hover:transition-all hover:border-white hover:border-b-[5px] hover:font-bold h-[40px] w-[150px] flex items-center justify-center m-2'> Impressum</p>
      </div>
    </div>
  )
}
