import { proyectosVisibles } from "../../data/proyectos";
import PortafolioClient from "./PortafolioClient";

export default function Portafolio() {
  return <PortafolioClient proyectos={proyectosVisibles} />;
}
