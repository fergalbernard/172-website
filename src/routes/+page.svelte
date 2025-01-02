<script lang="ts">
    import type { PageData } from './$types';
    import { base } from '$app/paths';
    
    export let data: PageData;
</script>

<div class="min-h-screen py-8">
    <div class="container">
        <h1 class="text-4xl font-bold text-coral mb-8 pl-4">Latest Articles</h1>
        
        <div class="space-y-6">
            {#each data.articles as article}
                <article class="article-card">
                    <a href="{base}/{article.id}" class="block">
                        <h2 class="text-2xl font-semibold text-cream mb-2">{article.title}</h2>
                        <p class="text-cream/80 mb-4">{article.excerpt}</p>
                        <div class="text-sm text-sage-light">
                            {new Date(article.date).toLocaleDateString()}
                        </div>
                    </a>
                </article>
            {/each}
        </div>
    </div>
</div>
