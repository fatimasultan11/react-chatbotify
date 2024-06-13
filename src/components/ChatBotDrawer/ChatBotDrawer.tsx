import React, { ReactNode} from 'react';
import "./ChatBotDrawer.css";
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

	const currPath = getCurrPath();
	if (!currPath) {
		return;
	}
	const block = flow[currPath];

	// if path is invalid, nothing to process (i.e. becomes dead end!)
	if (!block) {
		return;
	}
	
	return (
		<div>			
			<div className={`rcb-chat-drawer-container ${isOpenDrawer == false ? 'open' : ""}`}>
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
