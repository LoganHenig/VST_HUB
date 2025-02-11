import 'react-comments-section/dist/index.css'
import { HeaderComment } from '../commentComps/headerComment'
import { Comment } from '../commentComps/Comment'
import { CommentType } from '../../vstTypes'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import axios from 'axios';
import { setCommentsInStore } from '../../utils/reduxSlices/productSlice'

export const VstCommentSection = () => {

    const [comments, setComments] = useState<CommentType[]>([])
    const productStore = useAppSelector((store) => store.product);
    const dispatch = useAppDispatch();
    useEffect(() =>{

        axios.get (`http://localhost:8108/comment/${productStore.id}`)
        .then(res => {
            dispatch(setCommentsInStore(res.data.comments));
        })
        .catch(err => {
            dispatch(setCommentsInStore([]))
            console.log(err)
        })
    },[productStore.id])

    useEffect(() => {
            setComments([...productStore.comments])
    },[productStore])
    return (
        <>
            <div className="comments-container flex flex-col w-full">
                <div className='text-4xl'>103 Comments</div> 
                <HeaderComment/>
                <div className="w-full flex flex-col">
                    {comments && comments.map((comment:CommentType)=>{
                        return(
                            <div className="mb-4">
                                <Comment 
                                    message={comment.message} 
                                    votes={comment.votes}
                                    author={{name: 'test user'}} 
                                    replys={comment.replys}/>
                            </div>
                        )
                    })}
                    { comments.length === 0 && 
                        <div className='pl-16 text-lg'>No comments yet, be the first to post!</div>
                    }
                </div>
            </div>
            <div className='min-h-80'>

            </div>
        </>
        )
    }
