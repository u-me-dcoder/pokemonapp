import asyncComponent from "./AsyncComponent";
const Home = asyncComponent(() => import("../components/Home"));
const PokemonDetail = asyncComponent(() => import("../components/PokemonDetail"));
const Loading = asyncComponent(() => import("../components/Loading"));






const appRoutes = [
  {
    path: "/pokemondetail/:id",
    component: PokemonDetail,
  },
  {
    path: "/loading",
    component: Loading,
  },
  {
    path: "/",
    component: Home,
  },
 
];

export default appRoutes;
