export default function Footer({ twitter, linkedin, youtube, facebook }) {
  return (
    <div className="flex text-center justify-center flex-col ml-[15%] mt-[10%] mb-[10%] w-[70%]  bg-slate-50 rounded-3xl">
      <div className="text-xl font-bold w-[20%] ">
        <h1>FOODIE</h1>
      </div>
      <div className="flex flex-initial ml-[2%] mt-[2%]">
        <img src={twitter} className="hover:shadow-md" alt="twitter" />
        <img src={linkedin} className="hover:shadow-md" alt="linkedin" />
        <img src={youtube} className="hover:shadow-md" alt="youtube" />
        <img src={facebook} className="hover:shadow-md" alt="fb" />
      </div>
      <div className="flex flex-initial justify-center text-xl font-semibold text-stone-700  gap-5">
        <div className="flex flex-col mt-[-10%]">
          <a href="quality">Quality</a>
          <div className=" flex flex-col mt-5">
            <a href="help">Help</a>
            <a href="share">Share</a>
            <a href="careers">Careers</a>
            <a href="work">Work</a>
            <a href="testimonials">Testimonials</a>
          </div>
        </div>
        <div className="flex flex-col mt-[-10%]">
          <h1>244-5333-7783</h1>
          <div className=" flex flex-col mt-5">
            <a href="e-mail">hello@food.com</a>
            <a href="e-mail">press@food.com</a>
            <a href="e-mail">contact@food.com</a>
          </div>
        </div>
        <div iv className="flex flex-col mt-[-10%]">
          <a href="Terms & Conditions">Terms & Conditions</a>
          <div className=" flex flex-col mt-5">
            <a href="Privacy policy">Privacy policy</a>
            <a href="Refund policy">Refund policy</a>
            <a href="Shipping policy">Shipping policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
