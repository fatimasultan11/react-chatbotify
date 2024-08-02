import { Options } from '../types/Options';
import { Flow } from '../types/Flow';

/**
 * Initializes providers for chatbot.
 *
 * @param flow conversation flow for the bot
 * @param options options to setup the bot
 */
declare const ChatBot: ({ flow, options }: {
    flow?: Flow;
    options?: Options;
}) => import("react/jsx-runtime").JSX.Element;
export default ChatBot;
