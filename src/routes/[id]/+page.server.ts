import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getArticleById } from '$lib/utils/articles';

export const load: PageServerLoad = async ({ params, setHeaders }) => {
    // Set headers to prevent caching
    setHeaders({
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    });

    const article = await getArticleById(params.id);
    
    if (!article) {
        throw error(404, 'Article not found');
    }

    return { article };
}; 