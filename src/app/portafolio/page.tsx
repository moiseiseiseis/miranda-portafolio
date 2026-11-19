import { proyectos } from "../../data/proyectos";
import PortafolioClient from "./PortafolioClient";

export default function Portafolio() {
  return <PortafolioClient proyectos={proyectos} />;
}
