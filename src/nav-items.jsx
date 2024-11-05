import { HomeIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import AdultsBooking from "./pages/AdultsBooking.jsx";
import ChildrenBooking from "./pages/ChildrenBooking.jsx";
import EventsBooking from "./pages/EventsBooking.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Adults Booking",
    to: "/adults-booking",
    page: <AdultsBooking />,
  },
  {
    title: "Children Booking",
    to: "/children-booking",
    page: <ChildrenBooking />,
  },
  {
    title: "Events Booking",
    to: "/events-booking",
    page: <EventsBooking />,
  },
];