import React from 'react'

export default function HeaderComponent() {
  return (
    <div className='h-[150px] bg-[#FBF315]'>
      <div className='text-[40px] font-extrabold border-b-4 border-black flex justify-between p-2'>
        <p>Prospervault Bild</p>
        <p>Suchleiste</p>
        <p>Profil</p>
      </div>
      <div className='border-t-4 border-black flex justify-between p-5'>
        <p>Anmelden</p>
        <p> Online Banking</p>
        <p>Unsere Geschichte</p>
        <p> Börse</p>
        <p> Impressum</p>
      </div>
    </div>
  )
}
