export default function Work({ meals, cursor_pointer, delivery_truck }) {
  return (
    <div>
      <div className=" flex justify-center text-center mt-[20%]">
        <div className="w-[40%] p-10">
          <div className="text-orange-400 text-2xl font-bold m-5">Work</div>
          <h2 className="text-stone-700 text-5xl font-bold ">How It Works</h2>
          <p className="text-stone-400 text-xl m-5">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap  justify-center ">
        <div className="bg-stone-200 m-10 p-6 w-[18%] rounded-xl hover:shadow-2xl">
          <img src={meals} alt="meals" />
          <h1 className="text-stone-600 text-xl font-semibold ">Pick Meals</h1>
          <p className="pt-6">
            Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis
            duis elementum interdum facilisi bibendum.
          </p>
        </div>

        <div className="bg-stone-200 m-10 p-6 w-[18%] rounded-xl hover:shadow-2xl">
          <img src={cursor_pointer} alt="cursor pointer" />
          <h1 className="text-stone-600 text-xl font-semibold">
            Choose How often
          </h1>
          <p className="pt-6">
            Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis
            duis elementum interdum facilisi bibendum.
          </p>
        </div>

        <div className="bg-stone-200 m-10 p-6 w-[18%] rounded-xl hover:shadow-2xl">
          <img src={delivery_truck} alt="delivery truck" />
          <h1 className="text-stone-600 text-xl font-semibold">
            Fast Deliveries
          </h1>
          <p className="pt-6">
            Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis
            duis elementum interdum facilisi bibendum.
          </p>
        </div>
      </div>
    </div>
  );
}
