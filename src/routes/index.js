import asyncComponent from "./AsyncComponent";
const Home = asyncComponent(() => import("../components/Home"));
const PokemonDetail = asyncComponent(() => import("../components/PokemonDetail"));






const appRoutes = [
  {
    path: "/pokemondetail/:id",
    component: PokemonDetail,
  },
  {
    path: "/",
    component: Home,
  },
 
];

export default appRoutes;
