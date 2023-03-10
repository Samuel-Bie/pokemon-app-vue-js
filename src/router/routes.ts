import TheAbout from "@/views/TheAbout.vue";
import TheHome from "@/views/TheHome.vue";

const routes = [
  {
    path: "/",
    alias: "/home",
    component: TheHome,
  },
  {
    path: "/about/:id",
    component: TheAbout,
    props: true,

    // { default: true, sidebar: false },
  },
];

export default routes;
