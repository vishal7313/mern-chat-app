import React from 'react'
import { Messages } from './Messages'
import { MessageInput } from './MessageInput'
import { TiMessages } from "react-icons/ti";

export const MessageContainer = () => {
    const selectedConversation = false;
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-slate-500 px-4 py-2 mb-2'>
						<span className='label-text'>To: Vishal Ranjan</span>{" "}
						<span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
        </div>
    )
}

const NoChatSelected = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 Vishal Ranjan ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

