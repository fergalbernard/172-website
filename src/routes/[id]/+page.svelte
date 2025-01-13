<script lang="ts">
    import type { PageData } from './$types';
    import { base } from '$app/paths';
    import { isCensoringEnabled, censorText } from '$lib/stores/censor';
    
    export let data: PageData;

    $: article = {
        ...data.article,
        content: $isCensoringEnabled ? censorText(data.article.content, data.article.censoredWords) : data.article.content
    };
</script>

<div class="py-8">
    <div class="container">
        <a href="{base}/" class="text-sage-light hover:text-cream transition-colors">← Back to articles</a>
        
        <article class="prose prose-invert max-w-none">
            <h1 class="text-4xl font-bold text-coral mb-4">{data.article.title}</h1>
            <div class="text-sage-light mb-8">
                {new Date(article.date).toLocaleDateString()}
            </div>
            
            <div class="text-cream/90">
                {@html article.content}
            </div>
        </article>
    </div>
</div> 