import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section className="mt-16">
      <SectionHeading title="Contact Us" />
      <form action="" className="mt-8 p-5">
        <div className="grid grid-cols-2 p-5 sm:w-10/12 m-auto gap-5 border-4 border-black rounded-default card-shadow ">
          <p className="font-bold col-span-2 text-center text-lg text-blue my-5">
            Let's connect! Send us a message anytime.
          </p>
          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <label htmlFor="name" className="font-bold text-blue">
              Name
            </label>
            <input
              className="border border-black p-2 rounded-default"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <label htmlFor="email" className="font-bold text-blue">
              Email
            </label>
            <input
              className="border border-black p-2 rounded-default"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-2">
            <label htmlFor="message" className="font-bold text-blue">
              Message
            </label>
            <textarea
              className="border border-black rounded-default"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <button
            className="border border-black bg-green p-2 font-bold text-black col-span-2 lg:w-[150px] rounded-default"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
