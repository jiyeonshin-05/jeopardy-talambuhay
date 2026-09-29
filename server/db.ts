import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const lifeQuestions: Question[] = sortQuestions([
    {
    points: 100,
    question: 'How many siblings does Jiyeon have?',
    imgSrc: '/sibling.png',
    answer: 'One',
},
    {
        points: 200,
        question: 'Where does Jiyeon live?',
        imgSrc: '/westchester.jpg',
        answer: 'Westchester'
    },
    {
        points: 300,
        question: 'What sport does Jiyeon do competitively?',
        imgSrc: '/iceskating.jpg',
        answer: 'Ice skating',
    },
   {
        points: 400,
        question: 'Where did Jiyeon live when she was 2?',
        imgSrc: '/manhattan.jpeg',
        answer: 'New York City',
    }
]);

const favoritesQuestions: Question[] = sortQuestions([
    {
        points: 200,
        question: "What is Jiyeon's favorite color palette?",
        imgSrc: '/pastel.png',
        answer: 'Pastel',
    },
    {
        points: 100,
        question: "What is Jiyeon's favorite season?",
        imgSrc: '/autumn.webp',
        answer: 'Autumn',
    },
    {
        points: 300,
        question: "What is Jiyeon's favorite dessert?",
        imgSrc: '/sorbet.jpg',
        answer: 'Ice cream',
    },
    {
        points: 400,
        question: "What is Jiyeon's favorite book genre?",
        imgSrc: '/dystopian.jpeg',
        answer: 'Dystopian',
    }
]);

const triviaQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: "What is Jiyeon's favorite school subject?",
        imgSrc: '/science.jpg',
        answer: 'Science',
    },
    {
        
         points: 200,
        question: "What is Jiyeon's ethnicity?",
        imgSrc: '/korean.jpeg',
        answer: 'Korean',
      
    },
    {
         
        points: 400,
        question: "What is Jiyeon's MBTI?",
        imgSrc: '/esfj.jpeg',
        answer: 'ESFJ',
        
    },
    {
       points: 300,
        question: "What is Jiyeon's zodiac sign (November 5)?",
        imgSrc: '/scorpio.webp',
        answer: 'Scorpio',
    }
]);

const categories = [
    {
        title: "Jiyeon's Life",
        questions: lifeQuestions
    },
    {
        title: "Jiyeon's Favorites",
        questions: favoritesQuestions
    },
    {
        title: "Random Trivia",
        questions: triviaQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}