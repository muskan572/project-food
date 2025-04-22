export default function Testimonial({image, stars}){
    return(
        <div>  
            <div className=" flex justify-center text-center mt-[10%]">
                <div className="w-[45%] p-10">
                    <div className="text-orange-400 text-2xl font-bold m-5">Testimonial</div>
                    <h1 className="text-stone-700 text-5xl font-bold ">What They Are Saying</h1>
                    <p className="text-stone-400 text-xl m-5">Lorem ipsum dolor sit amet consectetur. Non tincidunt 
                        magna non et elit. Dolor  turpis molestie dui
                        magnis facilisis at fringilla quam.</p>
                </div>  
            </div>
        
            <div className="text-center flex justify-center mb-3">
                <div className="w-[50%] text-center bg-stone-200 rounded-3xl  hover:shadow-md">
                    <div>
                        <img src={image} className="w-[15%] p-4 ml-[40%]"/>
                    </div>
                    <div>
                        <p className="text-stone-400 text-xl w-[70%] p-6 ml-[15%]">Lorem ipsum dolor sit amet consectetur. Non tincidunt 
                        magna non et elit. Dolor  turpis molestie dui
                        magnis facilisis at fringilla quam.</p>
                        <img src={stars} className="ml-[32%]"/>
                        <h1 className="text-2xl font-semibold mb-4 p-3">John Doe</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}