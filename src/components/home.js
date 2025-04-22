export default function Home(){
    return(
        <div className="bg-transparent justify-evenly">
      <div className="flex flex-wrap p-10"> 
      <div className="w-[30%] font-mono font-extrabold text-3xl text-orange-500 pl-[100px]">FOODIE</div>
      <div className="w-[60%] text-stone-950 flex space-x-6  gap-20 text-center font-sans">
        <a href="HOME " className="hover:text-orange-500">Home</a>
        <a href="About" className="hover:text-orange-500">About</a>
        <a href="Testimonials" className="hover:text-orange-500">Testimonials</a>
        <a href="Contact" className="hover:text-orange-500">Contact</a>
        
      </div>

      <div className="w-[10%] flex float-end ">
        <button className='text-stone-50 bg-orange-400 font-semibold bg-origin-content w-40 rounded-3xl h-10 hover:bg-orange-500'>Booking Now</button>
      </div>
      </div>
    </div>
    )
}