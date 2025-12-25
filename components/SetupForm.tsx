'use client';
import { useState } from 'react';
import { FEATURED_COURSES } from '../lib/curriculum-data';

interface SetupFormProps {
    onComplete: (goal: string) => void;
}

export default function SetupForm({ onComplete }: SetupFormProps) {
    const [goal, setGoal] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (goal.trim()) {
            onComplete(goal);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                    English <span className="text-indigo-600 dark:text-indigo-400">Daily</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    Your personal language coach. Choose a course or define your own.
                </p>
            </div>

            <div className="w-full max-w-2xl space-y-6">
                {/* Featured Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {FEATURED_COURSES.map((course) => (
                        <button
                            key={course.id}
                            onClick={() => onComplete(course.id)}
                            className="relative overflow-hidden group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all text-left shadow-sm hover:shadow-md"
                        >
                            <div className={`absolute top-0 left-0 w-1.5 h-full ${course.color} transition-all group-hover:w-2`} />
                            <div className="space-y-1 pl-2">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {course.name}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    {course.description}
                                </p>
                            </div>
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </div>
                        </button>
                    ))}
                </div>

                <div className="relative flex items-center gap-4 py-2">
                    <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">or customize</span>
                    <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
                </div>

                <form onSubmit={handleSubmit} className="w-full relative">
                    <div className="relative group">
                        <input
                            type="text"
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                            placeholder="e.g. Discussing Artificial Intelligence..."
                            className="w-full px-5 py-4 pl-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-sm group-hover:shadow-md"
                        />
                        <button
                            type="submit"
                            disabled={!goal.trim()}
                            className="absolute right-2 top-2 bottom-2 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-sm transition-all active:scale-95 disabled:opacity-0 disabled:pointer-events-none"
                        >
                            Start
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
