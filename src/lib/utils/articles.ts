import { dev } from '$app/environment';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface Article {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
}

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

export async function getAllArticles(): Promise<Article[]> {
    const fileNames = fs.readdirSync(articlesDirectory);
    const allArticlesData = await Promise.all(fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(async fileName => {
            const id = fileName.replace(/\.md$/, '');
            const fullPath = path.join(articlesDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);
            
            return {
                id,
                content: await marked(content),
                title: data.title,
                date: data.date,
                excerpt: data.excerpt
            } as Article;
        }));

    return allArticlesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticleById(id: string): Promise<Article | undefined> {
    try {
        const fullPath = path.join(articlesDirectory, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            id,
            content: await marked(content),
            title: data.title,
            date: data.date,
            excerpt: data.excerpt
        };
    } catch (error) {
        if (!dev) console.error(`Error loading article ${id}:`, error);
        return undefined;
    }
} 