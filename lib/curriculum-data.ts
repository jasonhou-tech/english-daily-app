
import type { DailyContent } from './ai-service';

export interface StaticCourse {
    id: string;
    name: string;
    description: string;
    color: string;
    content: DailyContent;
}

export const FEATURED_COURSES: StaticCourse[] = [
    {
        id: "survival-english",
        name: "Survival English",
        description: "Essential phrases for everyday life.",
        color: "bg-emerald-500",
        content: {
            id: "static-survival-01",
            date: new Date().toLocaleDateString(),
            phrases: [
                {
                    english: "Could you speak a little slower, please?",
                    chinese: "您可以说慢一点吗？",
                    imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=Slow+Please",
                    audioUrl: ""
                },
                {
                    english: "I am sorry, I don't understand.",
                    chinese: "对不起，我听不懂。",
                    imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=Dont+Understand",
                    audioUrl: ""
                },
                {
                    english: "Where is the nearest restroom?",
                    chinese: "最近的洗手间在哪里？",
                    imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=Restroom",
                    audioUrl: ""
                },
                {
                    english: "How much does this cost?",
                    chinese: "这个多少钱？",
                    imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=How+Much",
                    audioUrl: ""
                },
                {
                    english: "Can I pay by credit card?",
                    chinese: "我可以用信用卡支付吗？",
                    imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=Credit+Card",
                    audioUrl: ""
                },
                {
                    english: "I would like a glass of water, please.",
                    chinese: "请给我一杯水。",
                    imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=Water+Please",
                    audioUrl: ""
                },
                {
                    english: "Excuse me, do you speak English?",
                    chinese: "打扰一下，您会说英语吗？",
                    imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=Speak+English",
                    audioUrl: ""
                },
                {
                    english: "My name is Jason.",
                    chinese: "我的名字是 Jason。",
                    imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=My+Name",
                    audioUrl: ""
                },
                {
                    english: "Nice to meet you.",
                    chinese: "很高兴见到你。",
                    imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=Nice+To+Meet",
                    audioUrl: ""
                },
                {
                    english: "Thank you very much.",
                    chinese: "非常感谢。",
                    imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=Thank+You",
                    audioUrl: ""
                }
            ]
        }
    },
    {
        id: "travel-101",
        name: "Travel 101",
        description: "Airport, hotel, and navigation basics.",
        color: "bg-blue-500",
        content: {
            id: "static-travel-01",
            date: new Date().toLocaleDateString(),
            phrases: [
                {
                    english: "Here is my passport.",
                    chinese: "这是我的护照。",
                    imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Passport",
                    audioUrl: ""
                },
                {
                    english: "I have a reservation under the name Smith.",
                    chinese: "我预订了房间，名字是 Smith。",
                    imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Reservation",
                    audioUrl: ""
                },
                {
                    english: "What time is check-out?",
                    chinese: "退房时间是几点？",
                    imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Check+Out",
                    audioUrl: ""
                },
                {
                    english: "Could you call a taxi for me?",
                    chinese: "能帮我叫辆出租车吗？",
                    imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Taxi",
                    audioUrl: ""
                },
                {
                    english: "Is breakfast included?",
                    chinese: "包含早餐吗？",
                    imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Breakfast",
                    audioUrl: ""
                },
                {
                    english: "Which way is the train station?",
                    chinese: "火车站往哪边走？",
                    imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Train+Station",
                    audioUrl: ""
                },
                {
                    english: "I lost my luggage.",
                    chinese: "我的行李丢了。",
                    imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Lost+Luggage",
                    audioUrl: ""
                },
                {
                    english: "Can I see the menu, please?",
                    chinese: "请给我看一下菜单好吗？",
                    imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Menu",
                    audioUrl: ""
                },
                {
                    english: "Do you have free Wi-Fi?",
                    chinese: "这里有免费 Wi-Fi 吗？",
                    imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=WiFi",
                    audioUrl: ""
                },
                {
                    english: "Take me to this address, please.",
                    chinese: "请带我去这个地址。",
                    imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Address",
                    audioUrl: ""
                }
            ]
        }
    }
];
