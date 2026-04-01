export interface MetadataResult {
    title: string;
    description: string;
    image: string;
}

/**
 * Busca metadados OpenGraph de uma URL (ideal para Behance, Dribbble, etc.)
 * Utiliza a API pública gratuíta do Microlink.
 */
export async function fetchMetadata(url: string): Promise<MetadataResult | null> {
    try {
        if (url.includes('behance.net')) {
            // Behance is blocking standard scrapers like microlink.
            // Using a CORS proxy to fetch the raw HTML and parse meta tags manually.
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
            const response = await fetch(proxyUrl);
            if (!response.ok) return null;
            
            const data = await response.json();
            const html = data.contents;
            
            if (!html) return null;

            // Simple regex to extract og tags
            const getMetaTag = (property: string) => {
                const match = html.match(new RegExp(`<meta[^>]*property=["']${property}["'][^>]*content=["']([^"']+)["'][^>]*>`, 'i'));
                return match ? match[1] : '';
            };

            const getTitleMeta = () => {
                const match = html.match(/<title>([^<]+)<\/title>/i);
                return match ? match[1] : '';
            };

            const title = getMetaTag('og:title') || getTitleMeta() || '';
            const description = getMetaTag('og:description') || '';
            const image = getMetaTag('og:image') || '';

            // Clean up titles like "Project Name on Behance"
            const cleanTitle = title.replace(' on Behance', '').trim();

            if (cleanTitle || image) {
                return {
                    title: cleanTitle,
                    description: description,
                    image: image
                };
            }
        }

        // Fallback to microlink for other sites (like GitHub)
        const response = await fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}`);
        if (!response.ok) return null;

        const data = await response.json();

        if (data.status === 'success' && data.data) {
            return {
                title: data.data.title || '',
                description: data.data.description || '',
                image: data.data.image?.url || data.data.logo?.url || '',
            };
        }
        return null;
    } catch (error) {
        console.error("Erro ao buscar metadados:", error);
        return null;
    }
}

/**
 * Traduz um texto para o idioma desejado usando a API pública do Google Translate.
 * @param text O texto a ser traduzido.
 * @param targetLang O código do idioma de destino (ex: 'en', 'es').
 * @param sourceLang O código do idioma de origem (padrão: 'pt').
 */
export async function translateText(text: string, targetLang: string, sourceLang: string = 'pt'): Promise<string> {
    if (!text.trim()) return '';

    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
        const response = await fetch(url);

        if (!response.ok) return text; // Fallback para o texto original se der erro

        const data = await response.json();

        // A resposta da API gtx retorna um array de arrays onde a primeira posição contém as partes traduzidas
        let translatedText = '';
        if (Array.isArray(data) && Array.isArray(data[0])) {
            data[0].forEach((item: unknown) => {
                if (Array.isArray(item) && typeof item[0] === 'string') {
                    translatedText += item[0];
                }
            });
        }

        return translatedText || text;
    } catch (error) {
        console.error("Erro na tradução automática:", error);
        return text;
    }
}
