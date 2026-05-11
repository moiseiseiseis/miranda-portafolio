import { supabase } from "../../lib/supabase"; 
import PortafolioClient from "./PortafolioClient"; // Importamos las animaciones

export const revalidate = 0;

export default async function Portafolio() {
  // El servidor hace el trabajo pesado de buscar los datos
  const { data: proyectos, error } = await supabase
    .from('proyectos')
    .select('*')
    .order('fecha_creacion', { ascending: false }); 

  if (error) {
    console.error("Error al cargar los proyectos:", error);
  }

  // Le pasamos los datos a nuestro componente visual
  return <PortafolioClient proyectos={proyectos || []} />;
}