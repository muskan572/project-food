export default function Footer({twitter, linkedin, youtube, facebook}){
    return(
        < div className="flex text-center justify-center flex-col ml-[15%] mt-[10%] mb-[10%] w-[70%]  bg-slate-50 rounded-3xl">
            <div className="text-xl font-bold w-[20%] ">
                <h1>FOODIE</h1>
            </div>
            <div className="flex flex-initial ml-[6%] mt-[2%]">
                <img src={twitter} className="hover:shadow-md"/>
                <img src={linkedin} className="hover:shadow-md"/>
                <img src={youtube} className="hover:shadow-md"/>
                <img src={facebook} className="hover:shadow-md"/>
            </div>
            <div className="flex flex-initial justify-center text-xl font-semibold text-stone-700  gap-5">
            <div className="flex flex-col">
                <a href="quality">Quality</a>
                <a href="help">Help</a>
                <a href="share">Share</a>
                <a href="careers">Careers</a>
                <a href="work">Work</a>
                <a href="testimonials">Testimonials</a>
            </div>
            <div className="flex flex-col">
                <h1>244-5333-7783</h1>
                <a href="e-mail">hello@food.com</a>
                <a href="e-mail">press@food.com</a>
                <a href="e-mail">contact@food.com</a>
            </div>
            <div  iv className="flex flex-col">
                <a href="Terms & Conditions">Terms & Conditions</a>
                <a href="Privacy policy">Privacy policy</a>
            </div>
            </div>
        </div>
    )
}