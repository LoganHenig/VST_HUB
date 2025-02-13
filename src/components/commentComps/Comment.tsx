import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import { Reply } from './reply';
import { CommentType } from '../../vstTypes';
import ReactTimeAgo from 'react-time-ago'

import axios from 'axios';
import { SkeletonComment } from '../skeletonComment';
import { skip } from 'node:test';

export const Comment = (props: CommentType) => {

    const LIMIT = 6
    const [offset, setOffset] = useState(0);

    const [votes, setVotes] = useState(props.votes)
    const [replyInputVisible, setReplyInputVisible] = useState(false);
    const [commentRepliesVisible, setCommentRepliesVisible] = useState(false);
    const [replies, setReplies] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        console.log(replies)
    },[replies])

    const showMoreReplies = () => {
        setCommentRepliesVisible(true)
        setLoading(true)
        axios.get(`http://localhost:8108/replies/${props._id}/`, {
            params: {
                limit: LIMIT,
                skip: offset,
            }
        })
            .then(res => {
                setReplies([...replies, ...res.data]);
                setLoading(false)
                setOffset(offset + LIMIT)
            })
            .catch(err => {
                setLoading(false)
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
                <Reply parent_id={props._id} replies={replies} setReplies={setReplies} setRepliesVisible={setCommentRepliesVisible}/>
            </div>
        }
        
        {   commentRepliesVisible && replies.length > 0 &&
        <div className='flex flex-col ml-16 mb-4'>
            <div>
                <Button label="Hide Replies" onClick={()=>{setCommentRepliesVisible(!commentRepliesVisible)}} className="p-button-raised p-button-rounded  text-xs py-0 px-2  " icon=" pi pi-angle-up"/>
            </div>
        </div>
        }

                <div className='ml-12'>
                    { commentRepliesVisible &&
                    replies.map((comment: CommentType) =>{
                        return(
                            
                            <Comment 
                                key={comment._id}
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
                {loading &&
                <>
                    <SkeletonComment/>
                    <SkeletonComment/>  
                </>                  
                }
            

        
        <div className='flex flex-col ml-16 mb-4'>
            {   !commentRepliesVisible && (props.replies.length > 0 || replies.length > 0) &&
                <div>
                    <Button label="View Replies" onClick={()=>{showMoreReplies()}} className="p-button-raised p-button-rounded  text-xs py-0 px-2  " icon=" pi pi-angle-down"/>
                </div>
            }      
            {   props.replies.length > replies.length && commentRepliesVisible && 
                <div>
                    <Button label="View More Replies" onClick={()=>{showMoreReplies()}} className="p-button-raised p-button-rounded  text-xs py-0 px-2  " icon=" pi pi-angle-down"/>
                </div>              
            }
        </div>
        </>
    )
}