import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import { Reply } from './reply';
import { CommentType } from '../../vstTypes';
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';

export const Comment = (props: CommentType) => {
    const [votes, setVotes] = useState(props.votes)
    const [replyInputVisible, setReplyInputVisible] = useState(false);
    const [commentRepliesVisible, setCommentRepliesVisible] = useState(true);
    const [replies, setReplies] = useState([])

    useEffect(() => {
    },[replies])

    const showMoreReplies = () => {
        setCommentRepliesVisible(true)
        axios.get(`http://localhost:8108/replies/${props._id}/`)
            .then(res => {
                setReplies([...replies, ...res.data]);
            })
            .catch(err => {
                console.log(err)
            })
    }

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
                <div className='text-secondary-content text-sm'>{props._id} 
                    <span className='text-xs ml-3'>
                    <ReactTimeAgo date={props.created_at}  locale="en-US"/> 
                    </span>
                </div>
                <div className='text-primary-content'>{props.message}</div>
            </div>
        </div>
        <div className='flex flex-row ml-16 items-center'>
            <Button size='small' className='p-button-rounded p-button-text h-6 w-6 p-0' icon='pi pi-angle-up' onClick={()=>{upVote()}}/>
            <div className='mx-1 text-highlight-background'>{votes}</div>
            <Button size='small' className='p-button-rounded p-button-text h-6 w-6 p-0' icon='pi pi-angle-down' onClick={()=>{downVote()}} />
            <Button label='Reply' size='small' className='p-button-rounded p-button-text mx-6 h-5 p-2' icon='pi pi-comment' onClick={()=>{setReplyInputVisible(!replyInputVisible)}}/>
        </div>
        { replyInputVisible &&
            <div className='relative pl-8 ml-8 mt-4'>
                <div className="absolute -top-8 left-0 h-full w-6 border-l-1 border-b-1 rounded-bl-xl border-gray-400"/>
                <Reply parent_id={props._id} replies={replies} setReplies={setReplies}/>
            </div>
        }
        {props.replies &&
            <div className="relative">
                {   
                    props.replies.length > 0 && commentRepliesVisible &&
                    <div className='absolute top-2 left-6'>
                        <Button size='small' className='p-button-rounded p-button-text h-6 w-6 p-0' icon='pi pi-minus-circle' onClick={()=>{setCommentRepliesVisible(false)}}/>
                    </div>

                }
                {   
                    props.replies.length > 0 && !commentRepliesVisible &&
                    <>
                        <div className=' relative flex flex-row left-6 top-2'>
                            <Button size='small' className='p-button-rounded p-button-text h-6 w-6 p-0' icon='pi pi-plus-circle' onClick={()=>{showMoreReplies()}}/>
                            <div> Show More Comments </div>
                        </div>
                    </>
                }
                <div className='ml-12'>
                    { commentRepliesVisible &&
                    replies.map((comment: CommentType) =>{
                        return(
                            
                            <Comment 
                                _id={comment._id}
                                author={comment.author}
                                created_at={comment.created_at} 
                                message={comment.message} 
                                replies={comment.replies}
                                votes={comment.votes}    
                            />
                        )
                    })}
                </div>
            </div>

        }
        </>
    )
}