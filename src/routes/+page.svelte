<script lang="ts">
    import type { PageData } from './$types';
    import { base } from '$app/paths';
    
    export let data: PageData;
</script>

<div class="min-h-screen py-8">
    <div class="container">
        <h1 class="text-4xl font-bold text-slate-900 mb-8">Latest Articles</h1>
        
        <div class="space-y-6">
            {#each data.articles as article}
                <article class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                    <a href="{base}/{article.id}" class="block">
                        <h2 class="text-2xl font-semibold text-slate-900 mb-2">{article.title}</h2>
                        <p class="text-slate-600 mb-4">{article.excerpt}</p>
                        <div class="text-sm text-slate-500">
                            {new Date(article.date).toLocaleDateString()}
                        </div>
                    </a>
                </article>
            {/each}
        </div>
    </div>
</div>
