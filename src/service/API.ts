import {Tracing} from "trace_events";
import QuestionCard from "../components/QuestionCard";
import {shuffleArray} from "../utils";

/**
 * This is a simple question service. It creates the Questions type object,
 * has a question state based on the answers and
 * fetches the questions over a remote API endpoint.
 */

/**
 * Question difficulty enum used for fetching easier or more difficult questions over the API endpoint.
 */

/**
 * The question object.
 */
export type Question = {
    category: Tracing;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};

/**
 * Answers based question state.
 */
export type QuestionState = Question & { answers: string[] };

/**
 * The actual API fetch method for the quiz questions.
 *
 * @param amount
 * @param difficulty
 */
export const fetchQuizQuestions = async (
    amount: number,
    difficulty: string
) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=24&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer,
        ]),
    }));
};
