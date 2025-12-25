'use client';
import { useState } from 'react';
import type { Phrase } from '@/lib/ai-service';

interface ReviewModeProps {
    onCheckComplete: (score: number) => void;
    phrases: Phrase[];
}

export default function ReviewMode({ onCheckComplete, phrases }: ReviewModeProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [finished, setFinished] = useState(false);

    const currentPhrase = phrases[currentIndex];

    const handleNext = () => {
        if (currentIndex < phrases.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setShowAnswer(false);
        } else {
            setFinished(true);
        }
    };

    if (finished) {
        return (
            <div className="text-center space-y-6 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl max-w-md mx-auto border border-slate-100 dark:border-slate-700 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Review Complete!</h2>
                    <p className="text-slate-500 dark:text-slate-400">Great job refreshing your memory.</p>
                </div>
                <button
                    onClick={() => onCheckComplete(100)}
                    className="w-full px-6 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/25 transition-all active:scale-[0.98]"
                >
                    Back to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center text-sm font-medium text-slate-500 dark:text-slate-400 px-1">
                <span>Daily Review</span>
                <span>{currentIndex + 1} / {phrases.length}</span>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden min-h-[420px] flex flex-col relative">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 dark:bg-slate-900">
                    <div
                        className="h-full bg-indigo-500 transition-all duration-300"
                        style={{ width: `${((currentIndex + 1) / phrases.length) * 100}%` }}
                    ></div>
                </div>

                <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-8">
                    <div className="space-y-4 w-full">
                        <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1.5 rounded-full">
                            Translate this
                        </span>
                        <h3 className="text-3xl font-medium text-slate-900 dark:text-white leading-tight">
                            {currentPhrase.chinese}
                        </h3>
                    </div>

                    {showAnswer ? (
                        <div className="space-y-6 w-full animate-in fade-in zoom-in-95 duration-300">
                            <div className="p-5 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800/50">
                                <p className="text-xl font-bold text-indigo-900 dark:text-indigo-200">
                                    {currentPhrase.english}
                                </p>
                            </div>
                            <img
                                src={currentPhrase.imageUrl}
                                alt=""
                                className="w-full h-48 object-cover rounded-xl shadow-inner border border-slate-200 dark:border-slate-700"
                            />
                        </div>
                    ) : (
                        <div className="w-full py-12 flex flex-col items-center justify-center opacity-40">
                            <div className="w-16 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mb-2"></div>
                            <div className="w-8 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                            <p className="mt-4 text-sm font-medium text-slate-500">Thinking...</p>
                        </div>
                    )}
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 z-10">
                    {!showAnswer ? (
                        <button
                            onClick={() => setShowAnswer(true)}
                            className="w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/25 transition-all active:scale-[0.98]"
                        >
                            Reveal Answer
                        </button>
                    ) : (
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={handleNext}
                                className="py-4 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all"
                            >
                                Hard 😬
                            </button>
                            <button
                                onClick={handleNext}
                                className="py-4 rounded-xl bg-green-600 text-white font-bold shadow-lg shadow-green-600/20 hover:bg-green-700 hover:shadow-green-600/40 transition-all active:scale-[0.98]"
                            >
                                Easy 🤩
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
