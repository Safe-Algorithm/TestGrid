import Heading from "./Heading";
import Paragraph from "./Paragraph";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section className="mt-16" id="contact-us">
      <SectionHeading title="Contact Us" />
      <form action="" className="mt-8 p-5">
        <div className="grid grid-cols-2 p-5 sm:w-10/12 m-auto gap-5 border-4 border-black rounded-default card-shadow ">
          <Heading className="text-2xl lg:text-3xl font-bold col-span-2 text-center text-blue my-5">
            Let's connect! Send us a message anytime.
          </Heading>
          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <label htmlFor="name" className="font-bold text-blue">
              <Paragraph>Name</Paragraph>
            </label>
            <input
              className="border p-2 rounded-default border-blue focus:outline-green"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <label htmlFor="email" className="font-bold text-blue">
              <Paragraph>Email</Paragraph>
            </label>
            <input
              className="border p-2 rounded-default border-blue focus:outline-green"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-2">
            <label htmlFor="message" className="font-bold text-blue">
              <Paragraph>Message</Paragraph>
            </label>
            <textarea
              className="border rounded-default p-1 border-blue focus:outline-green"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <button
            className="border border-black bg-green hover:bg-blue hover:text-green transition-colors p-2 font-bold text-black col-span-2 lg:w-[150px] rounded-default"
            type="submit"
          >
            <Heading>Send</Heading>
          </button>
        </div>
      </form>
    </section>
  );
}
