export default function Logo() {
  return (
    <div className="flex-auto md:pl-4 w-1/3 mb-4 mt-8 md:mt-0 md:mb-32 mx-auto md:border-t-0 md:border-r-0 md:border-b-0 md:border-l-32 md:border-l-green">
      <p className=" text-4xl md:text-5xl p-2 md:p-0 font-roboto font-bold text-blue [text-shadow:1px_1px_var(--tw-shadow-color)] md:[text-shadow:2px_2px_var(--tw-shadow-color)] shadow-blue-shadow text-center md:text-left">
        TestGrid
      </p>
      <p className="hidden md:block mt-1 font-roboto font-bold text-xs text-blue-description text-left">
        &ensp;A web domain load and <br />
        &ensp;penetration testing SAAS <br />
        &ensp;platform
      </p>
    </div>
  );
}
