
import { Avatar } from 'primereact/avatar';
import { Editor } from 'primereact/editor';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { useAppSelector } from '../../utils/hooks';
import { CommentType } from '../../vstTypes';
import axios from 'axios';
import 'primeicons/primeicons.css';
import { ProgressSpinner } from 'primereact/progressspinner';

type headerCommentProps = {
    addCommentsFromAPI: (apiComments: CommentType[]) => void
}

export const HeaderComment = (props: headerCommentProps) => {

    const productStore = useAppSelector((store) => store.product);

    const [userComment, setUserComment] = useState("");
    const [advancedEditor, setAdvancedEditor] = useState(false);
    const [postingComment, setPostingComment] = useState(false)

    const postComment = () => {
        setPostingComment(true)
        if(userComment){
            axios.post(`http://localhost:8108/comment/`, {
                message: userComment,
                user_id: '5eb7cf5a86d9755df3a6c593',
                product_id: productStore.id,
            })
            .then(res => {
                props.addCommentsFromAPI([res.data])
                setUserComment("")
                setPostingComment(false)
            })
            .catch(err => {
                console.log(err)
            })
        }      
    }

    return(
    <>
        <div className='w-full flex flex-row justify-start pt-8 items-start'>
            <div className='h-full'>
                <Avatar
                    image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                    shape="circle"
                    className=" mx-4 my-1"
                />
            </div>
            <span className="p-float-label w-full  ">      
                {!advancedEditor &&
                <>
                    <InputText className='w-full'id="Comment" value={userComment} onChange={(e) => setUserComment(e.target.value)} />
                    <label htmlFor="Comment">Post Comment</label>
                </>
                }
                {advancedEditor &&
                    <>
                            <Editor value={userComment} style={{minHeight:'120px'}} onTextChange={(e) => setUserComment(e.htmlValue?? "")}/>

                    </>
                }
            </span>
        </div>
        <div className='w-full flex flex-row justify-between my-2'>
            { postingComment &&
                <div className='text-xs text-secondary-content flex flex-row items-center'>
                    <ProgressSpinner className='h-6 w-6 px-4 ml-24' />Posting Comment...
                </div>
            }
            { !postingComment && //maintains spacing
                <div className='invisible'> 
                    placeholder 
                </div>
            }
            <div>
                <Button disabled={postingComment} label={`${advancedEditor ? 'Basic' : 'Advanced'}`} onClick={()=>{setAdvancedEditor(!advancedEditor)}} className="p-button-outlined p-button-rounded  text-s py-0 px-2 mx-2" />
                <Button disabled={postingComment} label="Post" onClick={()=>{postComment()}} className="p-button-raised p-button-rounded  text-s py-0 px-3 " icon=" pi pi-send"/>
            </div>
        </div>
    </>
    )
}