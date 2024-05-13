import Heading from "./Heading";
import SidebarLink from "./SidebarLink";

export default function Sidebar() {
  return (
    <aside className="bg-white border-r w-60 p-3 pl-0 flex flex-col gap-8 items-center">
      <Heading className="font-extrabold text-blue mb-4 text-center">
        TESTGRID
      </Heading>
      <ul className="flex flex-col gap-8">
        <SidebarLink
          name="Penetration Testing"
          path="penetration"
          icon=""
          activeIcon="src/assets/Pen-active.svg"
        />
        <SidebarLink
          name="Limit Testing"
          path="limit"
          icon="src/assets/Limit.svg"
          activeIcon="src/assets/Limit-active.svg"
        />
        <SidebarLink
          name="Testing Results"
          path="result"
          icon="src/assets/Result.svg"
          activeIcon="src/assets/Result-active.svg"
        />
        <SidebarLink
          name="Billing"
          path="billing"
          icon="src/assets/Billing.svg"
          activeIcon="src/assets/Billing-active.svg"
        />
      </ul>
    </aside>
  );
}
