
import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
export default function SlideshowComponent() {


    return (
        <Slide>
            <div className="each-slide-effect">
                <div className=" min-h-[400px] relative" >
                    <img src='https://res.cloudinary.com/dlwmznflr/image/upload/v1716964001/slide1_e6otag.png' alt="img1" className='w-[100vw]'></img>
                    <div className='absolute top-1'>1</div>
                </div>
            </div>
            <div className="each-slide-effect h-[400px]">
                <div className="w-[100vw] h-[400px] relative" >
                    <img src='https://res.cloudinary.com/dlwmznflr/image/upload/v1716964001/sldie3_ed8cl8.png' alt='img2' className='w-[100vw]'></img>
                    <div className='absolute top-1'>2</div>
                </div>
            </div>
            <div className="each-slide-effect h-[400px]">
                <div className="w-[100vw] h-[400px] relative" >
                    <img src='https://res.cloudinary.com/dlwmznflr/image/upload/v1716964001/slide2_znbsj6.png' alt='img3' className='w-[100vw]'></img>
                    <div className='absolute top-1'>3</div>
                </div>
            </div>
            <div className="each-slide-effect h-[400px]">
                <div className="w-[100vw] h-[400px] relative" >
                    <img src='https://res.cloudinary.com/dlwmznflr/image/upload/v1716964001/slide4_eijki5.png' alt='img4' className='w-[100vw]'></img>
                    <div className='absolute top-1'>4</div>
                </div>
            </div>
            
        </Slide>
    );
};


