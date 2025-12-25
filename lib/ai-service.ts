import { FEATURED_COURSES } from './curriculum-data';

export interface Phrase {
  english: string;
  chinese: string;
  imageUrl: string;
  audioUrl: string;
  keywords?: {
    word: string;
    phonetic: string;
  }[];
}

export interface DailyContent {
  id: string;
  date: string;
  phrases: Phrase[];
}

export async function generateDailyContent(goal: string): Promise<DailyContent> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 600));

  // 1. Check for Static Content Match
  // We match against Course Name or ID
  const staticCourse = FEATURED_COURSES.find(c =>
    c.name.toLowerCase() === goal.toLowerCase() ||
    c.id === goal
  );

  if (staticCourse) {
    return staticCourse.content;
  }

  // 2. Fallback to Mock AI Generation (for custom goals)
  return {
    id: new Date().toISOString(),
    date: new Date().toLocaleDateString(),
    phrases: Array.from({ length: 10 }).map((_, i) => ({
      english: `This is mock phrase ${i + 1} about "${goal}"`,
      chinese: `这是关于"${goal}"的模拟短语 ${i + 1}`,
      // Use a placeholder image service that generates distinct images
      imageUrl: `https://placehold.co/600x400?text=${encodeURIComponent(`Image ${i + 1}`)}`,
      audioUrl: "",
      keywords: [
        { word: "mock", phonetic: "/mɒk/" },
        { word: "phrase", phonetic: "/freɪz/" }
      ]
    })),
  };
}
