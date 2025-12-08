
// DECLARE UNA VARIABLE DE TIPO CONST PARA CONSUMIR LA URL DE STRAPI
const strapiUrl = import.meta.env.STRAPI_API_URL || 'http://localhost:1337/api/';

export const STRAPI_BASE_URL = strapiUrl.replace('/api', '');

export const STRAPI_URL_IMAGES = STRAPI_BASE_URL;

export const STRAPI_URL = strapiUrl;

export const fetchFromAPI = async (slug: string) => {
    try {
        // --- CAMBIO INTELIGENTE ---
        // Verificamos si el 'slug' ya trae sus propios parámetros (si tiene un '?')
        const urlFinal = slug.includes('?')
            ? `${STRAPI_URL}/${slug}`  // Si ya tiene '?', usamos la URL como esta
            : `${STRAPI_URL}/${slug}?populate=*`; // Si NO tiene '?', se agrega el default

        const response = await fetch(urlFinal);
        const json = await response.json();

        if(!response.ok) {
            throw new Error(json.message || 'Error en la petición');
        }

        // Devolvemos json.data (o json si data no existe, por seguridad)
        return json.data || json;

    } catch (error) {
        console.error('Error en fetchFromAPI:', error);
        return null;
    }
};