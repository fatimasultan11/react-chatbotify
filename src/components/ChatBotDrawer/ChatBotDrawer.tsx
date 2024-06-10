import React from 'react';
import "./ChatBotDrawer.css";
import { useBotOptions } from '../../context/BotOptionsContext';
import { Flow } from '../../types/Flow';

const ChatBotDrawer = ({
	isOpenDrawer,
	getCurrPath,
	flow
}:
{
	toggleDrawer: () => void, isOpenDrawer:
	boolean,
	getCurrPath: () => keyof Flow | null;
	flow: Flow;
	}) => {
	const { botOptions } = useBotOptions();

	const currPath = getCurrPath();
	const block = flow[currPath];
	
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
					{block.renderDrawerItems ? 
						block.renderDrawerItems : null		
					}
				</div>
			</div>
		</div>
	);
};

export default ChatBotDrawer;
