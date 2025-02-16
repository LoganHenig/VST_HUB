import 'react-comments-section/dist/index.css'
import { HeaderComment } from '../commentComps/headerComment'
import { Comment } from '../commentComps/Comment'
import { CommentType } from '../../vstTypes'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../utils/hooks'
import axios from 'axios';

export const VstCommentSection = () => {

    const addCommentsFromAPI = (apiComments: CommentType[]) => {
        setComments((prevComments) => {
            const updatedComments = new Map(prevComments);
        
            apiComments.forEach((comment) => {
              updatedComments.set(comment._id, comment);
            });
            return updatedComments;
          });
    }
    const addReplyFromAPI = (apiComment: CommentType, parent_id: string) => {
        setComments((prevComments) => {
            const updatedComments = new Map(prevComments);
            updatedComments.set(apiComment._id, apiComment);
            if(updatedComments.has(parent_id)){
                const parent = updatedComments.get(parent_id)
                if(parent){
                    const updatedReplies = parent.replies ? [...parent.replies, apiComment._id] : [apiComment._id]
                    updatedComments.set(parent_id, {
                        ...parent, 
                        replies: updatedReplies
                    })
                }
            }
            return updatedComments;
          });
    }

    const [comments, setComments] = useState<Map<string, CommentType>>(new Map());
    const productStore = useAppSelector((store) => store.product);

    useEffect(() =>{
        axios.get (`http://localhost:8108/comment/`, {
            params: {
                is_reply: false,
                product_id: productStore.id,
                order_by: 'created_at'
            }
        })
        .then(res => {
            addCommentsFromAPI (res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[productStore.id])

    return (
        <>
            <div className="comments-container flex flex-col w-full">
                <div className='text-4xl'>103 Comments</div> 
                <HeaderComment addCommentsFromAPI={addCommentsFromAPI}/>
                <div className="w-full flex flex-col">
                    {comments && Array.from(comments.values())
                    .filter((comment: CommentType) => !comment.is_reply)
                    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                    .map((comment: CommentType)=>{
                        return(
                            <div className="mb-4">
                                <Comment 
                                    comment_id={comment._id}
                                    comments={comments}
                                    addReplyFromAPI={addReplyFromAPI}
                                    addCommentFromAPI={addCommentsFromAPI}
                                />
                            </div>
                        )
                    })}
                    { comments.size === 0 && 
                        <div className='pl-16 text-lg'>No comments yet, be the first to post!</div>
                    }
                </div>
            </div>
            <div className='min-h-80 invisible'>
                    creates space below comment sections
            </div>
        </>
        )
    }
