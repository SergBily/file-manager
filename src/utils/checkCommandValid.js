import { validCommandsPatterns } from "../shared/validCommandsPatterns.js";

export const checkCommandValid = (payload) => {
    const [ command ] = payload;
    const hasCommand = !!validCommandsPatterns[command] && validCommandsPatterns[command].length === payload.length;
    return hasCommand;
};