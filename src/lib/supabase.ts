import { createClient } from '@supabase/supabase-js';
// Importamos los tipos generados automáticamente en el paso anterior
import { Database } from '../types/supabase';

// Leemos las variables de entorno que guardaste en .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Medida de seguridad: Si Next.js no encuentra las credenciales, nos avisa de inmediato
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Faltan las variables de entorno de Supabase. Revisa tu archivo .env.local');
}

// Creamos y exportamos el cliente de Supabase inyectándole la interfaz <Database>
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);