import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
dotenv.config();

const supabaseUrl =
  process.env.VITE_SUPABASE_URL || "https://eqzwanwnflgbadxrrlxb.supabase.co";
const supabaseAnonKey =
  process.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxendhbnduZmxnYmFkeHJybHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NjQ3NjQsImV4cCI6MjA4ODM0MDc2NH0.D-tj-lAa2KUYeA0mhD0CHLQA_UrzzdHBVRCVRThERkA";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function registerAdmin() {
  console.log("Registrando administrador no Supabase...");

  const { data, error } = await supabase.auth.signUp({
    email: "cauangabrielfac@gmail.com",
    password: "Cgsrn0907@portfolio",
  });

  if (error) {
    if (error.message.includes("User already registered")) {
      console.log("✅ Usuário já registrado com esse email. Pode fazer login!");
    } else {
      console.error("❌ Erro ao registrar:", error.message);
    }
  } else {
    console.log("✅ Usuário registrado com sucesso no Supabase!");
    console.log(
      "Dependendo da sua configuração no Supabase, talvez você precise confirmar o email. Se as confirmações por email estiverem desativadas lá, você já pode logar.",
    );
  }
}

registerAdmin();
