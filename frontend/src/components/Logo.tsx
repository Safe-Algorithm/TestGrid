export default function Logo() {
  return (
    <div className="flex-auto md:pl-4 w-1/3 mb-4 md:mb-32 mx-auto border border-black md:border-t-0 md:border-r-0 md:border-b-0 md:border-l-32 md:border-l-green">
      <p className=" text-2xl md:text-5xl p-2 md:p-0 font-roboto font-bold text-blue [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-blue text-center md:text-left border-t-4 border-t-blue border-r-4 border-r-blue border-b-4 border-b-green border-l-4 border-l-green md:border-none">
        TestGrid
      </p>
      <p className="hidden md:block mt-1 font-roboto font-bold text-xs text-blue text-left">
        &ensp;A web domain load and <br />
        &ensp;penetration testing SAAS <br />
        &ensp;platform
      </p>
    </div>
  );
}
