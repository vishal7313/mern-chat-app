import React from 'react'
import { Conversation } from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'

export const Conversations = () => {
    const {loading, conversations } = useGetConversation();
    console.log("Conversations:", conversations);
    return (
        <div className='py-2 flex flex-col overflow-auto'>
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
        </div>
    )
}
