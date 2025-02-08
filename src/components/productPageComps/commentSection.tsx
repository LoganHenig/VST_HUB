import 'react-comments-section/dist/index.css'
import { HeaderComment } from '../commentComps/headerComment'
import { Comment } from '../commentComps/Comment'
import { CommentType } from '../../vstTypes'

export const VstCommentSection = () => {
    const tempComments: CommentType[] = 
    [
        {
            text: "Comment 1",
            votes: 12,
            author: { name: "logan.henig@gamil.com" },
            replys: [
                {
                    text: "Comment 2",
                    votes: 43,
                    author: { name: "logan.henig@gamil.com" },
                    replys: [
                        
                    ]
                },
                {
                    text: "Comment 5",
                    votes: 47,
                    author: { name: "logan.henig@gamil.com" },
                    replys: [
                        
                    ]
                },
                {
                    text: "Comment 2",
                    votes: 3,
                    author: { name: "logan.henig@gamil.com" },
                    replys: [
                        {
                            text: "Comment 2",
                            votes: 3,
                            author: { name: "logan.henig@gamil.com" },
                            replys: [
                                
                            ]
                        },
                        {
                            text: "Comment 2",
                            votes: 3,
                            author: { name: "logan.henig@gamil.com" },
                            replys: [
                                
                            ]
                        }
                    ]
                }
            ]

        },
        {
            text: "Comment 1",
            votes: 12,
            author: { name: "logan.henig@gamil.com" },
            replys: []
        }
    ]
    return (
        <>
            <div className="comments-container flex flex-col w-full">
                <div className='text-4xl'>103 Comments</div> 
                <HeaderComment/>
                <div className="w-full flex flex-col">
                    {tempComments.map((comment:CommentType)=>{
                        return(
                            <div className="mb-4">
                                <Comment 
                                    text={comment.text} 
                                    votes={comment.votes}
                                    author={comment.author} 
                                    replys={comment.replys}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
        )
    }
