import { messages } from '../shared/messages.js';

export const printMessage = (payload) => {
    const { type, text } = payload;
    console.log(messages[type](text));
}