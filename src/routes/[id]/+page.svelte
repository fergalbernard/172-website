<script lang="ts">
    import type { PageData } from './$types';
    import { base } from '$app/paths';
    
    export let data: PageData;
</script>

<div class="py-8">
    <div class="container">
        <a href="{base}/" class="text-sage-light hover:text-cream transition-colors">← Back to articles</a>
        
        <article class="prose prose-invert max-w-none">
            <h1 class="text-4xl font-bold text-coral mb-4">{data.article.title}</h1>
            <div class="text-sage-light mb-8">
                {new Date(data.article.date).toLocaleDateString()}
            </div>
            
            <div class="text-cream/90">
                {@html data.article.content}
            </div>
        </article>
    </div>
</div> 