'use client';

import { useState, useEffect } from 'react';
import { StorageService } from '@/lib/storage-service';
import { generateDailyContent, type DailyContent } from '@/lib/ai-service';
import SetupForm from '@/components/SetupForm';
import DailyCard from '@/components/DailyCard';

import ReviewMode from '@/components/ReviewMode';

export default function Home() {
  const [goal, setGoal] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<DailyContent | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedGoal = StorageService.getGoal();
    if (savedGoal) {
      setGoal(savedGoal);
      // Ideally we check if we have content for today, but for now just regenerate/mock load
      loadContent(savedGoal);
    }
  }, []);

  const loadContent = async (targetGoal: string) => {
    setLoading(true);
    try {
      // Here we could check cache first
      const data = await generateDailyContent(targetGoal);
      setContent(data);
    } catch (e) {
      console.error("Failed to load content", e);
    } finally {
      setLoading(false);
    }
  };

  const handleSetup = (newGoal: string) => {
    StorageService.saveGoal(newGoal);
    setGoal(newGoal);
    loadContent(newGoal);
  };

  const handleReset = () => {
    StorageService.saveGoal('');
    setGoal(null);
    setContent(null);
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-indigo-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!goal) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <SetupForm onComplete={handleSetup} />
        </div>
      </main>
    );
  }

  if (isReviewing && content?.phrases) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 py-12 px-4 transition-colors">
        <ReviewMode
          phrases={content.phrases}
          onCheckComplete={() => setIsReviewing(false)}
        />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors selection:bg-indigo-100 dark:selection:bg-indigo-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">Daily Curriculum</h1>
              <p className="text-slate-500 text-sm flex items-center gap-2">
                Focus: <span className="font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-xs">{goal}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsReviewing(true)}
                className="text-sm px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
              >
                Start Review Quiz
              </button>
              <button
                onClick={handleReset}
                className="text-sm px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 hover:border-red-200 transition-colors"
              >
                Reset Focus
              </button>
            </div>
          </header>

          {loading ? (
            <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-6">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-slate-200 dark:border-slate-800 rounded-full"></div>
                <div className="absolute top-0 w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <div className="text-center space-y-1">
                <p className="text-lg font-medium text-slate-800 dark:text-white">Designing your lesson...</p>
                <p className="text-sm text-slate-400">Curating phrases using AI</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
              {content?.phrases.map((phrase, idx) => (
                <DailyCard key={idx} phrase={phrase} index={idx} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
