import React from 'react'

export default function Header({imageurl}){
 
    return(
       
        <div className='flex flex-wrap w-[100%]'>
             
            <div className='w-[40%] mt-[170px] pl-[100px]'>  
            <p className='text-stone-600 text-5xl'>
                Your Favourite Food Delivered Hot & Fresh.
            </p>
            <p className='text-stone-500 text-xl mt-7'>
            Healthy switcher chefs do all the prep work, like 
            peeding, chopping & marinating, so you can cook
            a fresh food.
            </p>
            <button className='text-stone-100 bg-orange-400 font-semibold bg-origin-content w-40 rounded-2xl h-8 mt-4 hover:bg-orange-500'>
                Order Now</button>
                </div>
                <div className='w-[60%]'>
            <img src={imageurl} alt="dynamic" className='w-[80%]'/>
            </div>
            
        </div>
    )
}
    

