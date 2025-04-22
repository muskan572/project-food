export default function Questions(){ 
    return( 
        <div> 
        <div className="flex text-center justify-center m-[10%] text-stone-700  ">
            <div className=" font-bold text-5xl">
                <h1>Have Questions In Mind?</h1>
                <h2>Let Us Help You</h2>
            </div>  
        </div> 
        <div className="flex flex-initial text-center justify-center  bg-stone-100 rounded-3xl  w-[35%] h-16 ml-[32%] mb-3">
            < div >
                <input text="type" placeholder="yourmail@gmail.com" className=" bg-stone-100 text-stone-900 mr-8 ml-2"/> 
                    <button className='text-stone-100 bg-orange-400 font-semibold  w-40 rounded-3xl h-12 mt-2 hover:bg-orange-500 '> Submit </button>  
            </div> 
        </div>
        </div>
    )
}