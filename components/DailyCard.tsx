'use client';
import type { Phrase } from '@/lib/ai-service';

interface DailyCardProps {
    phrase: Phrase;
    index: number;
}

export default function DailyCard({ phrase, index }: DailyCardProps) {
    const handlePlay = () => {
        // Placeholder for audio play
        alert(`Playing audio for: ${phrase.english}`);
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-900/50 transition-all duration-300 group">
            <div className="relative aspect-video w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                <img
                    src={phrase.imageUrl}
                    alt={`Illustration for: ${phrase.english}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />
                <button
                    onClick={handlePlay}
                    className="absolute bottom-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-slate-800/90 text-indigo-600 backdrop-blur-sm shadow-sm hover:scale-110 active:scale-95 transition-all"
                    aria-label="Play pronunciation"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                </button>
            </div>

            <div className="p-5 flex flex-col h-full">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-full">
                        Phrase {index + 1}
                    </span>
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white leading-tight">
                        {phrase.english}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        {phrase.chinese}
                    </p>
                </div>
            </div>
        </div>
    );
}
