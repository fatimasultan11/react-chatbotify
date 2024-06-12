import React, { ReactNode} from 'react';
import "./ChatBotDrawer.css";
import { useBotOptions } from '../../context/BotOptionsContext';
import { Flow } from '../../types/Flow';


const ChatBotDrawer = ({
	isOpenDrawer,
	getCurrPath,
	flow
}:
{
	isOpenDrawer:boolean,
	getCurrPath: () => keyof Flow | null ;
	flow: Flow;
	}) => {
	const { botOptions } = useBotOptions();

	const currPath = getCurrPath();
	if (!currPath) {
		return;
	}
	const block = flow[currPath];

	// if path is invalid, nothing to process (i.e. becomes dead end!)
	if (!block) {
		return;
	}
	
	const headerStyle: React.CSSProperties = {
		background: `linear-gradient(to right, ${botOptions.theme?.secondaryColor },
			${botOptions.theme?.primaryColor})`,
		...botOptions.headerStyle
	}
	return (
		<div>			
			<div className={`rcb-chat-drawer-container ${isOpenDrawer == false ? 'open' : ""}`}>
				<div  style={headerStyle} className="rcb-chat-header-container">					
				</div>
				<div>
					{block.renderDrawerItems as ReactNode ? 
						block.renderDrawerItems as ReactNode : null		
					}
				</div>
			</div>
		</div>
	);
};

export default ChatBotDrawer;
