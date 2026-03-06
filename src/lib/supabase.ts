import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Missing Supabase environment variables. Admin features will be disabled.",
  );
}

export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "");

export type ProjectRow = {
  id: string;
  created_at: string;
  title_pt: string;
  title_en: string;
  title_es: string;
  desc_pt: string;
  desc_en: string;
  desc_es: string;
  image_url: string;
  link: string;
  category: "design" | "development";
  order_index: number;
};
