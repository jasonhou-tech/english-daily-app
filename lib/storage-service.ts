
const STORAGE_KEYS = {
    GOAL: 'app_goal',
    HISTORY: 'app_history',
};

export const StorageService = {
    saveGoal: (goal: string) => {
        if (typeof window === 'undefined') return;
        localStorage.setItem(STORAGE_KEYS.GOAL, goal);
    },

    getGoal: (): string | null => {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem(STORAGE_KEYS.GOAL);
    },

    saveDailyContent: (content: any) => {
        if (typeof window === 'undefined') return;
        // For now just save the last one, later we can append to history
        localStorage.setItem('last_daily_content', JSON.stringify(content));
    },

    getLastDailyContent: () => {
        if (typeof window === 'undefined') return null;
        const data = localStorage.getItem('last_daily_content');
        return data ? JSON.parse(data) : null;
    }
};
