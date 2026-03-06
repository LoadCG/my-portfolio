"use client";

import { useEffect, useState } from "react";
import { supabase, ProjectRow } from "../../lib/supabase";
import { HiPlus, HiLogout, HiTrash, HiPencilAlt, HiViewGrid, HiX, HiUpload } from "react-icons/hi";

export default function AdminDashboard() {
    const [projects, setProjects] = useState<ProjectRow[]>([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<ProjectRow | null>(null);

    // Form states
    const [formData, setFormData] = useState({
        title_pt: "", title_en: "", title_es: "",
        desc_pt: "", desc_en: "", desc_es: "",
        image_url: "", link: "", category: "development" as 'design' | 'development'
    });
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const checkUser = async () => {
            const { data } = await supabase.auth.getSession();
            if (!data.session) {
                window.location.href = "/admin";
            } else {
                setUser(data.session.user);
                fetchProjects();
            }
        };
        checkUser();
    }, []);

    const fetchProjects = async () => {
        const { data } = await supabase
            .from('projects')
            .select('*')
            .order('order_index', { ascending: true });

        if (data) setProjects(data);
        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.href = "/admin";
    };

    const openModal = (project: ProjectRow | null = null) => {
        if (project) {
            setEditingProject(project);
            setFormData({
                title_pt: project.title_pt, title_en: project.title_en, title_es: project.title_es,
                desc_pt: project.desc_pt, desc_en: project.desc_en, desc_es: project.desc_es,
                image_url: project.image_url, link: project.link, category: project.category
            });
        } else {
            setEditingProject(null);
            setFormData({
                title_pt: "", title_en: "", title_es: "",
                desc_pt: "", desc_en: "", desc_es: "",
                image_url: "", link: "", category: "development"
            });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        if (editingProject) {
            const { error } = await supabase
                .from('projects')
                .update(formData)
                .eq('id', editingProject.id);
            if (error) alert("Erro ao atualizar!");
        } else {
            const { error } = await supabase
                .from('projects')
                .insert([{ ...formData, order_index: projects.length }]);
            if (error) alert("Erro ao criar!");
        }

        setSaving(false);
        setIsModalOpen(false);
        fetchProjects();
    };

    const handleDelete = async (id: string) => {
        if (confirm("Tem certeza que deseja excluir este projeto?")) {
            await supabase.from('projects').delete().eq('id', id);
            fetchProjects();
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-[#07070a] flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
        </div>
    );

    return (
        <div className="min-h-screen bg-[#07070a] text-white p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight mb-2">Painel de Controle</h1>
                        <p className="text-slate-400">Bem-vindo, {user?.email}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => openModal()}
                            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-2xl font-bold transition-all active:scale-95"
                        >
                            <HiPlus className="w-5 h-5" />
                            Novo Projeto
                        </button>
                        <button
                            onClick={handleLogout}
                            className="p-3 rounded-2xl border border-white/10 hover:bg-white/5 transition-all"
                        >
                            <HiLogout className="w-6 h-6 text-red-400" />
                        </button>
                    </div>
                </header>

                {/* Bento Grid Analytics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="md:col-span-2 p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-md">
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Total de Projetos</h3>
                        <div className="text-5xl font-bold text-white tracking-tighter">{projects.length}</div>
                    </div>
                    <div className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-md">
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Design</h3>
                        <div className="text-3xl font-bold text-blue-400">{projects.filter(p => p.category === 'design').length}</div>
                    </div>
                    <div className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-md">
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Dev</h3>
                        <div className="text-3xl font-bold text-emerald-400">{projects.filter(p => p.category === 'development').length}</div>
                    </div>
                </div>

                {/* Projects List */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                        <HiViewGrid className="text-emerald-500" />
                        Gerenciar Conteúdo
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                        {projects.map((project) => (
                            <div key={project.id} className="group flex flex-col md:flex-row items-center gap-6 p-4 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                                <div className="w-full md:w-32 h-20 rounded-xl overflow-hidden bg-black/40">
                                    <img src={project.image_url} alt="" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h4 className="font-bold text-lg text-white">{project.title_pt}</h4>
                                    <p className="text-sm text-slate-500 uppercase tracking-widest text-[10px]">{project.category}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => openModal(project)} className="p-3 rounded-xl border border-white/10 hover:bg-emerald-500/10 transition-all">
                                        <HiPencilAlt className="w-5 h-5 text-emerald-400" />
                                    </button>
                                    <button onClick={() => handleDelete(project.id)} className="p-3 rounded-xl border border-white/10 hover:bg-red-500/10 transition-all">
                                        <HiTrash className="w-5 h-5 text-red-400" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal Form */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
                        <div className="w-full max-w-4xl bg-[#0a0a0f] border border-white/10 rounded-[2.5rem] p-8 md:p-12">
                            <div className="flex justify-between items-center mb-10">
                                <h2 className="text-2xl font-bold">{editingProject ? "Editar Projeto" : "Novo Projeto"}</h2>
                                <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-full hover:bg-white/10">
                                    <HiX className="w-6 h-6" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Titles */}
                                    <div className="space-y-4">
                                        <h3 className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Títulos</h3>
                                        <input value={formData.title_pt} onChange={e => setFormData({ ...formData, title_pt: e.target.value })} placeholder="Título (PT)" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white" required />
                                        <input value={formData.title_en} onChange={e => setFormData({ ...formData, title_en: e.target.value })} placeholder="Title (EN)" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white" required />
                                        <input value={formData.title_es} onChange={e => setFormData({ ...formData, title_es: e.target.value })} placeholder="Título (ES)" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white" required />
                                    </div>
                                    {/* Descriptions */}
                                    <div className="space-y-4">
                                        <h3 className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Descrições</h3>
                                        <textarea value={formData.desc_pt} onChange={e => setFormData({ ...formData, desc_pt: e.target.value })} placeholder="Descrição (PT)" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white h-12" required />
                                        <textarea value={formData.desc_en} onChange={e => setFormData({ ...formData, desc_en: e.target.value })} placeholder="Description (EN)" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white h-12" required />
                                        <textarea value={formData.desc_es} onChange={e => setFormData({ ...formData, desc_es: e.target.value })} placeholder="Descripción (ES)" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white h-12" required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                    <div className="space-y-4">
                                        <h3 className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Link & Categoria</h3>
                                        <input value={formData.link} onChange={e => setFormData({ ...formData, link: e.target.value })} placeholder="Link do Projeto" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white" />
                                        <select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value as any })} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white appearance-none">
                                            <option value="development">Desenvolvimento</option>
                                            <option value="design">Design Gráfico</option>
                                        </select>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Thumbnail URL</h3>
                                        <div className="relative">
                                            <HiUpload className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                            <input value={formData.image_url} onChange={e => setFormData({ ...formData, image_url: e.target.value })} placeholder="https://..." className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white" required />
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" disabled={saving} className="w-full bg-white text-black font-bold py-5 rounded-3xl hover:bg-slate-200 transition-all disabled:opacity-50">
                                    {saving ? "Salvando..." : (editingProject ? "Salvar Alterações" : "Criar Projeto")}
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
