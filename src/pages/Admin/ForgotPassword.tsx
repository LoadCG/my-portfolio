"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { HiMail } from "react-icons/hi";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/admin/reset-password`,
        });

        if (error) {
            setMessage({ type: 'error', text: "Erro ao enviar e-mail. Verifique o endereço e tente novamente." });
        } else {
            setMessage({ type: 'success', text: "Link de recuperação enviado! Verifique sua caixa de entrada." });
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#07070a] px-6">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
                        <HiMail className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Recuperar Senha</h1>
                    <p className="text-slate-400">Enviaremos um link para o seu e-mail</p>
                </div>

                <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
                    <form onSubmit={handleResetPassword} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Email</label>
                            <div className="relative">
                                <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all"
                                    placeholder="seu@email.com"
                                    required
                                />
                            </div>
                        </div>

                        {message && (
                            <div className={`p-4 rounded-xl border text-sm text-center ${message.type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
                                {message.text}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-white text-black font-bold py-4 rounded-2xl hover:bg-slate-200 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed animate-shimmer relative overflow-hidden"
                        >
                            {loading ? "Enviando..." : "Enviar Link de Recuperação"}
                        </button>
                    </form>
                </div>

                <div className="mt-8 text-center">
                    <a href="/admin" className="text-sm text-slate-500 hover:text-white transition-colors">
                        ← Voltar para o Login
                    </a>
                </div>
            </div>
        </div>
    );
}
