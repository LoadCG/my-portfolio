"use client";

import { useEffect, useState, useRef } from "react";
import { User } from '@supabase/supabase-js';
import { supabase, ProjectRow } from "../../lib/supabase";
import { HiPlus, HiLogout, HiTrash, HiPencilAlt, HiViewGrid, HiX, HiUpload, HiExternalLink, HiDocumentDownload, HiDocument } from "react-icons/hi";

export default function AdminDashboard() {
    const [projects, setProjects] = useState<ProjectRow[]>([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<ProjectRow | null>(null);

    // UX States
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [activeLangTab, setActiveLangTab] = useState<'pt' | 'en' | 'es'>('pt');

    // Form states
    const [formData, setFormData] = useState({
        title_pt: "", title_en: "", title_es: "",
        desc_pt: "", desc_en: "", desc_es: "",
        image_url: "", link: "", category: "development" as 'design' | 'development'
    });
    const [saving, setSaving] = useState(false);

    // CV Manager States
    const [cvUrl, setCvUrl] = useState<string | null>(null);
    const [cvFileName, setCvFileName] = useState<string | null>(null);
    const [cvFileSize, setCvFileSize] = useState<number | null>(null);
    const [cvUploading, setCvUploading] = useState(false);
    const [cvLoading, setCvLoading] = useState(true);
    const [cvConfirmDelete, setCvConfirmDelete] = useState(false);
    const [isDragOver, setIsDragOver] = useState(false);
    const cvInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const checkUser = async () => {
            const { data } = await supabase.auth.getSession();
            if (!data.session) {
                window.location.href = "/admin";
            } else {
                setUser(data.session.user);
                fetchProjects();
                buscarCurriculo();
            }
        };
        checkUser();
    }, []);

    const showToast = (message: string, type: 'success' | 'error') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const fetchProjects = async () => {
        const { data } = await supabase
            .from('projects')
            .select('*')
            .order('order_index', { ascending: true });

        if (data) setProjects(data);
        setLoading(false);
    };

    const buscarCurriculo = async () => {
        setCvLoading(true);
        const { data } = await supabase.storage.from('curriculum').list('', { limit: 10 });
        const cvFile = data?.find(f => f.name.endsWith('.pdf'));
        if (cvFile) {
            const { data: urlData } = supabase.storage.from('curriculum').getPublicUrl(cvFile.name);
            setCvUrl(urlData.publicUrl);
            setCvFileName(cvFile.name);
            setCvFileSize(cvFile.metadata?.size ?? null);
        } else {
            setCvUrl(null);
            setCvFileName(null);
            setCvFileSize(null);
        }
        setCvLoading(false);
    };

    const fazerUploadCurriculo = async (file: File) => {
        if (!file) return;
        if (file.type !== 'application/pdf' && !file.name.endsWith('.pdf')) {
            showToast('Apenas arquivos PDF são aceitos.', 'error');
            return;
        }
        const MAX_SIZE_MB = 5;
        if (file.size > MAX_SIZE_MB * 1024 * 1024) {
            showToast(`O arquivo excede o limite de ${MAX_SIZE_MB}MB.`, 'error');
            return;
        }
        setCvUploading(true);
        const { error } = await supabase.storage.from('curriculum').upload('cv.pdf', file, {
            contentType: 'application/pdf',
            upsert: true,
        });
        if (error) {
            showToast(`Erro no upload: ${error.message}`, 'error');
        } else {
            showToast('Currículo atualizado com sucesso!', 'success');
            await buscarCurriculo();
        }
        setCvUploading(false);
        if (cvInputRef.current) cvInputRef.current.value = '';
    };

    const deletarCurriculo = async () => {
        if (!cvFileName) return;
        const { error } = await supabase.storage.from('curriculum').remove([cvFileName]);
        if (error) {
            showToast('Erro ao remover o currículo.', 'error');
        } else {
            showToast('Currículo removido.', 'success');
            setCvUrl(null);
            setCvFileName(null);
            setCvFileSize(null);
        }
        setCvConfirmDelete(false);
    };

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        const file = e.dataTransfer.files?.[0];
        if (file) fazerUploadCurriculo(file);
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
        setActiveLangTab('pt');
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
            if (error) {
                showToast("Erro ao atualizar o projeto.", "error");
            } else {
                showToast("Projeto atualizado com sucesso!", "success");
                setIsModalOpen(false);
            }
        } else {
            const { error } = await supabase
                .from('projects')
                .insert([{ ...formData, order_index: projects.length }]);
            if (error) {
                showToast("Erro ao criar o projeto.", "error");
            } else {
                showToast("Projeto criado com sucesso!", "success");
                setIsModalOpen(false);
            }
        }

        setSaving(false);
        fetchProjects();
    };

    const handleDelete = async (id: string, title: string) => {
        if (confirm(`Tem certeza que deseja excluir o projeto "${title}"?`)) {
            const { error } = await supabase.from('projects').delete().eq('id', id);
            if (error) {
                showToast("Erro ao excluir o projeto.", "error");
            } else {
                showToast("Projeto excluído com sucesso!", "success");
                fetchProjects();
            }
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-[#07070a] flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
        </div>
    );

    return (
        <div className="min-h-screen bg-[#07070a] text-white p-6 md:p-12 relative">
            {/* Toast Notification */}
            {toast && (
                <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 rounded-2xl flex items-center gap-3 shadow-2xl backdrop-blur-md border animate-in slide-in-from-top-4 duration-300 ${toast.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                    <span className="font-bold">{toast.message}</span>
                </div>
            )}

            <div className="max-w-6xl mx-auto">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight mb-2">Painel de Controle</h1>
                        <p className="text-slate-400">Logado como: <span className="text-emerald-400 font-medium">{user?.email}</span></p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => openModal()}
                            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-2xl font-bold transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
                        >
                            <HiPlus className="w-5 h-5" />
                            Novo Projeto
                        </button>
                        <button
                            onClick={handleLogout}
                            className="p-3 rounded-2xl border border-white/10 hover:bg-white/5 transition-all text-slate-400 hover:text-red-400"
                            title="Sair"
                        >
                            <HiLogout className="w-6 h-6" />
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

                {/* CV Manager Section */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold flex items-center gap-2 mb-6 text-slate-200">
                        <HiDocument className="text-emerald-500 w-6 h-6" />
                        Currículo
                    </h2>
                    <div className="p-6 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-md">

                        {/* Loading skeleton */}
                        {cvLoading ? (
                            <div className="flex items-center gap-4 animate-pulse">
                                <div className="w-12 h-12 rounded-xl bg-white/5 shrink-0" />
                                <div className="flex-1 space-y-2">
                                    <div className="h-4 bg-white/5 rounded-lg w-1/3" />
                                    <div className="h-3 bg-white/5 rounded-lg w-1/5" />
                                </div>
                            </div>
                        ) : cvUrl && cvFileName ? (
                            /* File exists — show card */
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                                        <HiDocument className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-bold text-white truncate">{cvFileName}</p>
                                        <p className="text-xs text-slate-500">
                                            {cvFileSize ? formatFileSize(cvFileSize) : 'Supabase Storage'}
                                            {' · '}<span className="text-emerald-500/70">Publicado</span>
                                        </p>
                                    </div>
                                </div>

                                {cvConfirmDelete ? (
                                    /* Inline delete confirmation */
                                    <div className="flex items-center gap-2 shrink-0 animate-in slide-in-from-right-4 duration-200">
                                        <span className="text-sm text-slate-400 font-medium hidden sm:block">Confirmar exclusão?</span>
                                        <button
                                            onClick={() => setCvConfirmDelete(false)}
                                            className="px-4 py-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white text-sm font-bold transition-all hover:bg-white/5"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            onClick={deletarCurriculo}
                                            className="px-4 py-2.5 rounded-xl bg-red-500 hover:bg-red-400 text-white text-sm font-bold transition-all active:scale-95"
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 shrink-0">
                                        <a
                                            href={cvUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-slate-300 hover:text-white text-sm font-bold"
                                        >
                                            <HiDocumentDownload className="w-4 h-4" />
                                            Ver PDF
                                        </a>
                                        <label className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all text-emerald-400 text-sm font-bold cursor-pointer ${cvUploading ? 'opacity-50 pointer-events-none' : ''}`}>
                                            {cvUploading ? (
                                                <><div className="w-4 h-4 border-2 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin" /> Enviando...</>
                                            ) : (
                                                <><HiUpload className="w-4 h-4" /> Substituir</>
                                            )}
                                            <input ref={cvInputRef} type="file" accept="application/pdf,.pdf" className="hidden" onChange={e => e.target.files?.[0] && fazerUploadCurriculo(e.target.files[0])} />
                                        </label>
                                        <button
                                            onClick={() => setCvConfirmDelete(true)}
                                            className="p-2.5 rounded-xl border border-white/10 hover:bg-red-500/10 hover:border-red-500/40 transition-all text-slate-500 hover:text-red-400"
                                            title="Remover currículo"
                                        >
                                            <HiTrash className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* No file — drag & drop upload zone */
                            <div
                                onDragOver={e => { e.preventDefault(); setIsDragOver(true); }}
                                onDragLeave={() => setIsDragOver(false)}
                                onDrop={handleDrop}
                                className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-2xl transition-all duration-200 ${
                                    isDragOver
                                        ? 'border-emerald-500/60 bg-emerald-500/10 scale-[1.01]'
                                        : 'border-white/10 bg-transparent'
                                } ${cvUploading ? 'opacity-60 pointer-events-none' : 'cursor-pointer'}`}
                            >
                                {cvUploading ? (
                                    <>
                                        <div className="w-8 h-8 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin mb-3" />
                                        <p className="text-emerald-400 font-bold text-sm">Enviando currículo...</p>
                                    </>
                                ) : (
                                    <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer group">
                                        <HiUpload className={`w-8 h-8 mb-2 transition-colors duration-200 ${isDragOver ? 'text-emerald-400' : 'text-slate-600 group-hover:text-emerald-400'}`} />
                                        <p className={`font-bold text-sm transition-colors duration-200 ${isDragOver ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-300'}`}>
                                            {isDragOver ? 'Solte o arquivo aqui' : 'Arraste o PDF ou clique para selecionar'}
                                        </p>
                                        <p className="text-xs text-slate-600 mt-1">Somente PDF · Máx. 5MB</p>
                                        <input ref={cvInputRef} type="file" accept="application/pdf,.pdf" className="hidden" onChange={e => e.target.files?.[0] && fazerUploadCurriculo(e.target.files[0])} />
                                    </label>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Projects List */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2 mb-6 text-slate-200">
                        <HiViewGrid className="text-emerald-500 w-6 h-6" />
                        Gerenciar Conteúdo
                    </h2>
                    {projects.length === 0 ? (
                        <div className="text-center py-20 border border-white/5 rounded-3xl bg-white/[0.01]">
                            <p className="text-slate-500 mb-4">Nenhum projeto encontrado no banco de dados.</p>
                            <button onClick={() => openModal()} className="text-emerald-400 font-bold hover:underline">Criar o primeiro projeto</button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-4">
                            {projects.map((project) => (
                                <div key={project.id} className="group flex flex-col md:flex-row items-center gap-6 p-4 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all hover:border-emerald-500/20">
                                    <div className="w-full md:w-32 h-20 rounded-xl overflow-hidden bg-black/40 border border-white/5 relative">
                                        <img src={project.image_url} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h4 className="font-bold text-lg text-white mb-1">{project.title_pt}</h4>
                                        <p className="text-sm text-slate-400 line-clamp-2 mb-3">{project.desc_pt}</p>
                                        <div className="flex items-center gap-2 justify-center md:justify-start">
                                            <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border ${project.category === 'design' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
                                                {project.category}
                                            </span>
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noreferrer" className="text-xs text-slate-500 hover:text-white transition-colors truncate max-w-[200px] block">
                                                    {project.link.replace('https://', '')}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 w-full md:w-auto justify-end mt-4 md:mt-0">
                                        <button onClick={() => openModal(project)} className="flex-1 md:flex-none flex items-center justify-center p-3 rounded-xl border border-white/10 hover:bg-emerald-500 hover:border-emerald-500 group/edit transition-all bg-white/[0.02]">
                                            <HiPencilAlt className="w-5 h-5 text-emerald-400 group-hover/edit:text-white" />
                                        </button>
                                        <button onClick={() => handleDelete(project.id, project.title_pt)} className="flex-1 md:flex-none flex items-center justify-center p-3 rounded-xl border border-white/10 hover:bg-red-500 hover:border-red-500 group/del transition-all bg-white/[0.02]">
                                            <HiTrash className="w-5 h-5 text-red-500 group-hover/del:text-white" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Modal Form */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
                        <div className="w-full max-w-4xl bg-[#0a0a0f] border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 my-8 shadow-2xl relative">
                            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                                <HiX className="w-6 h-6" />
                            </button>

                            <div className="mb-8">
                                <h2 className="text-3xl font-bold tracking-tight">{editingProject ? "Editar Projeto" : "Novo Projeto"}</h2>
                                <p className="text-slate-500 mt-2">Preencha os dados do projeto para exibição no portfólio.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                                    {/* Left Column: Language Content */}
                                    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 flex flex-col">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Conteúdo Traduzido</h3>

                                            {/* Language Tabs */}
                                            <div className="flex bg-black/50 p-1 rounded-xl border border-white/5">
                                                {(['pt', 'en', 'es'] as const).map(lang => (
                                                    <button
                                                        key={lang}
                                                        type="button"
                                                        onClick={() => setActiveLangTab(lang)}
                                                        className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${activeLangTab === lang ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                                                    >
                                                        {lang}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4 flex-1 flex flex-col">
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Título ({activeLangTab.toUpperCase()})</label>
                                                <input
                                                    value={formData[`title_${activeLangTab}` as keyof typeof formData]}
                                                    onChange={e => setFormData({ ...formData, [`title_${activeLangTab}`]: e.target.value })}
                                                    placeholder="Ex: Chrysalis E-commerce"
                                                    className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                                                    required
                                                />
                                            </div>
                                            <div className="flex-1 flex flex-col">
                                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Descrição ({activeLangTab.toUpperCase()})</label>
                                                <textarea
                                                    value={formData[`desc_${activeLangTab}` as keyof typeof formData]}
                                                    onChange={e => setFormData({ ...formData, [`desc_${activeLangTab}`]: e.target.value })}
                                                    placeholder="Descreva o projeto..."
                                                    className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white flex-1 min-h-[8rem] resize-none focus:outline-none focus:border-emerald-500/50 transition-colors"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Settings & Media */}
                                    <div className="space-y-6">
                                        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6">
                                            <h3 className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-6">Configurações Gerais</h3>
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Link do Projeto / Repositório</label>
                                                    <input
                                                        value={formData.link}
                                                        onChange={e => setFormData({ ...formData, link: e.target.value })}
                                                        placeholder="https://..."
                                                        className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Categoria</label>
                                                    <select
                                                        value={formData.category}
                                                        onChange={e => setFormData({ ...formData, category: e.target.value as 'design' | 'development' })}
                                                        className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white appearance-none focus:outline-none focus:border-emerald-500/50 transition-colors"
                                                    >
                                                        <option value="development">💻 Desenvolvimento Web</option>
                                                        <option value="design">🎨 Design Gráfico</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6">
                                            <h3 className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-6">Mídia (Thumbnail)</h3>
                                            <div className="relative mb-4">
                                                <HiUpload className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                                <input
                                                    value={formData.image_url}
                                                    onChange={e => setFormData({ ...formData, image_url: e.target.value })}
                                                    placeholder="URL da imagem (ex: /images/development/file.jpg)"
                                                    className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                                                    required
                                                />
                                            </div>

                                            {/* Image Preview Block */}
                                            <div
                                                className={`w-full h-32 rounded-2xl border border-dashed border-white/20 bg-black/30 overflow-hidden flex items-center justify-center relative group ${formData.image_url ? 'cursor-pointer' : ''}`}
                                                onClick={() => formData.image_url && window.open(formData.image_url, '_blank')}
                                                title={formData.image_url ? "Clique para ver a imagem inteira" : ""}
                                            >
                                                {formData.image_url ? (
                                                    <>
                                                        <img
                                                            src={formData.image_url}
                                                            alt="Preview"
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                            onError={(e) => { (e.target as HTMLImageElement).src = 'https://fakeimg.pl/400x200/0a0a0f/333333?text=Link+Inv%C3%A1lido' }}
                                                        />
                                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <span className="text-white text-sm font-bold flex items-center gap-2 drop-shadow-md">
                                                                <HiExternalLink className="w-5 h-5" />
                                                                Ver Imagem Inteira
                                                            </span>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <span className="text-slate-600 text-sm font-medium flex items-center gap-2">
                                                        <HiUpload className="w-5 h-5" />
                                                        Preview da Imagem
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/5 flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="w-1/3 bg-transparent border border-white/10 text-white font-bold py-5 rounded-2xl hover:bg-white/5 transition-all"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={saving}
                                        className="w-2/3 bg-emerald-600 text-white font-bold py-5 rounded-2xl hover:bg-emerald-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-600/20 active:scale-[0.98]"
                                    >
                                        {saving ? "Salvando..." : (editingProject ? "Salvar Alterações" : "Criar Novo Projeto")}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
