import { Flow } from '../../types/Flow';

declare const ChatBotDrawer: ({ isOpenDrawer, getCurrPath, flow }: {
    isOpenDrawer: boolean;
    getCurrPath: () => keyof Flow | null;
    flow: Flow;
}) => import("react/jsx-runtime").JSX.Element | undefined;
export default ChatBotDrawer;
