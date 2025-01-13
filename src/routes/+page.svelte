<script lang="ts">
    import type { PageData } from './$types';
    import { base } from '$app/paths';
    import { isCensoringEnabled, censorText } from '$lib/stores/censor';
    
    export let data: PageData;

    $: articles = data.articles.map(article => ({
        ...article,
        excerpt: $isCensoringEnabled ? censorText(article.excerpt, article.censoredWords) : article.excerpt
    }));
</script>

<div class="py-8">
    <div class="container">
        <h1 class="text-4xl font-bold text-coral mb-8">Latest Articles</h1>
        
        <div class="space-y-6">
            {#each articles as article}
                <article class="article-card">
                    <div class="block">
                        <a href="{base}/{article.id}" class="block mb-4">
                            <h2 class="text-2xl font-semibold text-cream mb-2">{article.title}</h2>
                            <p class="text-cream/80">{@html article.excerpt}</p>
                        </a>
                        <div class="flex justify-between items-center text-sm">
                            <div class="text-sage-light">
                                {new Date(article.date).toLocaleDateString()}
                            </div>
                            <a href="{base}/profiles" class="text-coral hover:text-coral/80 transition-colors">
                                By {article.author}
                            </a>
                        </div>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</div>
