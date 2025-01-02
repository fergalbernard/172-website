<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="min-h-screen py-8">
    <div class="container">
        <a href="/" class="text-slate-600 hover:text-slate-900 mb-8 inline-block">← Back to articles</a>
        
        <article class="prose prose-slate max-w-none">
            <h1 class="text-4xl font-bold text-slate-900 mb-4">{data.article.title}</h1>
            <div class="text-slate-500 mb-8">
                {new Date(data.article.date).toLocaleDateString()}
            </div>
            
            {@html data.article.content}
        </article>
    </div>
</div> 