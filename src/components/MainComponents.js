import React from 'react';

export default function MainComponent() {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-center">
            <div className='flex justify-center items-center h-[60vh]'>
                <p>*Bilder + Text*</p>
            </div>
            <div className="mt-4">
                <p>PROSPERVAULT - KUNDENZUFRIEDENHEIT ZÄHLT AM MEISTEN!</p>
                <p>Mit über 400.000 Kunden und 2.000 Bankstellen ist Prospervault eine der erfolgreichsten Online Banking Anbieter auf der Welt! Profitieren auch Sie von unseren Benefits und werde auch ein Prosper!</p>
                <div className='border-l-2 border-[#FBF315] mt-2'>
                    <div className='ml-4'>
                        <p>Sicherheit</p>
                    </div>
                    <div className='ml-4'>
                        <p>Argentinien-Urlaub? Kein Problem</p>
                    </div>
                    <div className='ml-4'>
                        <p>Revolutionäre Lösungen</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
