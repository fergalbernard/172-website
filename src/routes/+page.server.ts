import type { PageServerLoad } from './$types';
import { getAllArticles } from '$lib/utils/articles';

export const load: PageServerLoad = async ({ setHeaders }) => {
    // Set headers to prevent caching
    setHeaders({
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    });

    const articles = await getAllArticles();
    return { articles };
}; 