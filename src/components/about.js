export default function About({imageAbout}){
    return(
        <div className="flex flex-wrap justify-center">
            <div className="w-[50%]">
            <img src={imageAbout} alt="aboutImage" className="w-[100%] "/>
            </div>
        <div className="w-[35%] p-5 gap-2 m-9 mr-10">
            
            <h2 className="text-orange-400 font-bold text-xl">About</h2>
            <p className='text-stone-600 text-5xl'>Food Is An Important Part Of A Balanced Diet</p>
            <p className='text-stone-500 text-xl mt-7'>Lorem ipsum dolor sit amet consectetur. Non tincidunt 
                magna non et elit. Dolor  turpis molestie dui
                magnis facilisis at fringilla quam.
                Non tincidunt magna non et elit. Dolor turpis molestie 
                dui magnis facilisis at fringilla quam.
            </p>
            <div>
                <button className='text-stone-100 bg-orange-400 font-semibold bg-origin-content w-40 rounded-3xl h-9 mt-4 mr-8 hover:bg-orange-500'>Learn more</button>
                <button className='text-stone-700 font-semibold bg-origin-content w-40 rounded-3xl h-9 mt-4 mr-8 hover:text-stone-950'>Watch video</button>
            </div>
            
        </div>
        </div>
    )
}