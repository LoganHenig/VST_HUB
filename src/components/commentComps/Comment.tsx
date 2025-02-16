import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import { Reply } from './reply';
import { CommentType } from '../../vstTypes';
import { SkeletonComment } from '../skeletonComment';
import ReactTimeAgo from 'react-time-ago'
import DOMPurify from 'dompurify';
import axios from 'axios';

type commentProps = {
    comment_id: string,
    comments: Map<string, CommentType>,
    addReplyFromAPI: (apiComment: CommentType, parent_id: string) => void,
    addCommentFromAPI: (apiComments: CommentType[]) => void
}

export const Comment = (props: commentProps) => {

    const LIMIT = 6
    const [offset, setOffset] = useState(0);

    const [votes, setVotes] = useState(0)
    const [replyInputVisible, setReplyInputVisible] = useState(false);
    const [commentRepliesVisible, setCommentRepliesVisible] = useState(false);
    const [loading, setLoading] = useState(false)
    const [comment, setComment] = useState<CommentType>()

    useEffect(() => {
        setComment(props.comments.get(props.comment_id))
    },[props])

    useEffect(() => {
        if(comment?.votes){
            setVotes(comment.votes)
        }
    },[comment])

    const areAllRepliesVisible = (): boolean => {
        if(!comment?.replies || comment.replies.length === 0) return true       // comment has no replies
        return comment.replies.every(replyId => props.comments.has(replyId))    // check if every reply id is in comments hashset
    }

    const showMoreReplies = () => {
        setCommentRepliesVisible(true)
        setLoading(true)
        axios.get(`http://localhost:8108/replies/${comment?._id}/`, {
            params: {
                limit: LIMIT,
                skip: offset,
            }
        })
            .then(res => {
                props.addCommentFromAPI(res.data)
                setLoading(false)
                setOffset(offset + LIMIT)
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }

    const upVote = () => {
        if(comment?.votes){
            setVotes(comment.votes + 1);
        }
    }
    const downVote = () => {
        if(comment?.votes){
            setVotes(comment.votes - 1);
        }
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
                <div className='text-secondary-content text-sm'>{comment?._id} 
                    <span className='text-xs ml-3'>
                        { comment &&
                            <ReactTimeAgo date={comment?.created_at}  locale="en-US"/> 
                        }
                    </span>
                </div>
                <div className='text-primary-content' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(comment?.message?? "")}}/>
            </div>
        </div>
        <div className='flex flex-row ml-16 items-center'>
            <Button size='small' rounded text className='h-6 w-6 p-0' icon='pi pi-angle-up' onClick={()=>{upVote()}}/>
            <div className='mx-1 text-highlight-background'>{votes}</div>
            <Button size='small' rounded text className='h-6 w-6 p-0' icon='pi pi-angle-down' onClick={()=>{downVote()}} />
            <Button label='Reply' rounded text size='small' className='mx-6 h-5 p-2' icon='pi pi-comment' onClick={()=>{setReplyInputVisible(!replyInputVisible)}}/>
        </div>
        { replyInputVisible &&
            <div className='relative pl-8 ml-8 mt-4'>
                <div className="absolute -top-8 left-0 h-full w-6 border-l-1 border-b-1 rounded-bl-xl border-gray-400"/>
                <Reply parent_id={comment?._id?? ""} addReplyFromAPI={props.addReplyFromAPI} setRepliesVisible={setCommentRepliesVisible}/>
            </div>
        }
        
        {   commentRepliesVisible && (comment?.replies?.length?? 0) > 0 &&
        <div className='flex flex-col ml-16 mb-4'>
            <div>
                <Button label="Hide Replies" rounded raised onClick={()=>{setCommentRepliesVisible(!commentRepliesVisible)}} className="text-xs py-0 px-2  " icon=" pi pi-angle-up"/>
            </div>
        </div>
        }

                <div className='ml-12'>
                    { commentRepliesVisible &&
                        comment?.replies.map((replyId: string) => props.comments.get(replyId)) //gets the comments by id of reply
                        .filter((reply): reply is CommentType => !!reply)                      //removes null values
                        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())// sorting by newest first for now
                        .map((reply) => (
                            <Comment 
                            comment_id={reply?._id}
                            comments={props.comments}
                            addReplyFromAPI={props.addReplyFromAPI}
                            addCommentFromAPI={props.addCommentFromAPI}/>
                        ))
                    }
                </div>
                {loading &&
                <>
                    <SkeletonComment/>
                </>                  
                }
            

        
        <div className='flex flex-col ml-16 mb-4'>
            {   !commentRepliesVisible && ((comment?.replies?.length?? 0) > 0) &&  //if no replies are visible
                <div>
                    <Button label="View Replies" raised rounded onClick={()=>{showMoreReplies()}} className="text-xs py-0 px-2" icon=" pi pi-angle-down"/>
                </div>
            }      
            {   !areAllRepliesVisible() && commentRepliesVisible && // if replies are visible but more can be pulled from db
                <div>
                    <Button label="View More Replies" raised rounded onClick={()=>{showMoreReplies()}} className="text-xs py-0 px-2" icon=" pi pi-angle-down"/>
                </div>              
            }
        </div>
        </>
    )
}