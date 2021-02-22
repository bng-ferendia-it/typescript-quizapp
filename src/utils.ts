/**
 * Quite obvious. We need to shuffle a list of questions for this quiz app.
 * @param array
 */
export const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5);
