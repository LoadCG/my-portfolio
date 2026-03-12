"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { HiLockClosed } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // supabase auth check if we are in recovery mode.
        // Usually, the tokens are in the hash URL and supabase auto-handles the session.
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                setMessage({ type: 'error', text: 'Link inválido ou expirado. Solicite a recuperação novamente.' });
            }
        };
        checkSession();
    }, []);

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            setMessage({ type: 'error', text: "As senhas não coincidem." });
            return;
        }

        setLoading(true);
        setMessage(null);

        const { error } = await supabase.auth.updateUser({
            password: password
        });

        if (error) {
            setMessage({ type: 'error', text: "Erro ao atualizar a senha. Tente novamente." });
        } else {
            setMessage({ type: 'success', text: "Senha atualizada com sucesso!" });
            setTimeout(() => {
                navigate("/admin");
            }, 2000);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#07070a] px-6">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
                        <HiLockClosed className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Criar Nova Senha</h1>
                    <p className="text-slate-400">Digite sua nova senha de acesso</p>
                </div>

                <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
                    <form onSubmit={handleUpdatePassword} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Nova Senha</label>
                            <div className="relative">
                                <HiLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all"
                                    placeholder="••••••••"
                                    required
                                    minLength={6}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Confirmar Nova Senha</label>
                            <div className="relative">
                                <HiLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all"
                                    placeholder="••••••••"
                                    required
                                    minLength={6}
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
                            {loading ? "Atualizando..." : "Atualizar Senha"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
