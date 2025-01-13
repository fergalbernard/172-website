import { writable } from 'svelte/store';

export const isCensoringEnabled = writable(true);

export function censorText(text: string, censoredWords: string[] = []): string {
    if (!censoredWords || censoredWords.length === 0) return text;
    
    let censoredText = text;
    censoredWords.forEach(word => {
        const regex = new RegExp(word, 'gi');
        const replacement = `<span class="bg-midnight-light px-1 rounded text-black" style="background: #000;">${'█'.repeat(word.length)}</span>`;
        censoredText = censoredText.replace(regex, replacement);
    });
    
    return censoredText;
} 