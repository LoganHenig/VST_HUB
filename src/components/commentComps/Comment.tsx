import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { Reply } from './reply';
import { CommentType } from '../../vstTypes';




export const Comment = (props: CommentType) => {
    const [votes, setVotes] = useState(props.votes)
    const [replyVisible, setReplyVisible] = useState(false);

    const upVote = () => {
        setVotes(props.votes + 1);
    }
    const downVote = () => {
        setVotes(props.votes - 1);
    }
    return(
        <>
        <div className="w-full flex flex-row">
            <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                shape="circle"
                className="m-auto mx-4"
            />
            <div className="w-full flex flex-col">
                <div className='text-secondary-content text-sm'>{props.author.name}<span className='text-xs'>1 week ago</span></div>
                <div className='text-primary-content'>{props.text}</div>
            </div>
        </div>
        <div className='flex flex-row ml-16 items-center'>
            <Button size='small' className='p-button-rounded p-button-text h-6 w-6 p-0' icon='pi pi-angle-up' onClick={()=>{upVote()}}/>
            <div className='mx-1 text-highlight-background'>{votes}</div>
            <Button size='small' className='p-button-rounded p-button-text h-6 w-6 p-0' icon='pi pi-angle-down' onClick={()=>{downVote()}} />
            <Button label='Reply' size='small' className='p-button-rounded p-button-text mx-6 h-5 p-2' icon='pi pi-comment' onClick={()=>{setReplyVisible(!replyVisible)}}/>
        </div>
        { replyVisible &&
            <div className='relative pl-8 ml-8 mt-4'>
                <div className="absolute -top-8 left-0 h-full w-6 border-l-1 border-b-1 rounded-bl-xl border-gray-400"/>
                <Reply/>
            </div>
        }
        {props.replys &&
            <div className='ml-12'>
                {
                props.replys.map((comment) =>{
                    return(
                        <Comment 
                            author={comment.author} 
                            text={comment.text} 
                            replys={comment.replys}
                            votes={comment.votes}    
                        />
                    )
                })}
            </div>

        }
        </>
    )
}