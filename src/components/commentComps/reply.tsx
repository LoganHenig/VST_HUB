import { Avatar } from 'primereact/avatar';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Editor, EditorTextChangeEvent } from 'primereact/editor';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { useAppSelector } from '../../utils/hooks';
import { CommentType } from '../../vstTypes';

type replyProp = {
    parent_id: string,
    addReplyFromAPI: (apiComment: CommentType, parent_id: string) => void,
    setRepliesVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Reply = (props: replyProp) => {

    const [postingComment, setPostingComment] = useState(false)
    const [userComment, setUserComment] = useState("");
    const [advancedEditor, setAdvancedEditor] = useState(false);
    const productStore = useAppSelector((store) => store.product);


    const postReply = () => {
        setPostingComment(true)
        axios.post(`http://localhost:8108/replies/${props.parent_id}/`, {
            message: userComment,
            user_id: '5eb7cf5a86d9755df3a6c593',
            product_id: productStore.id,
            is_reply: true
        })
            .then(res => {
                props.addReplyFromAPI(res.data, props.parent_id)
                props.setRepliesVisible(true)
                setUserComment("")
                setPostingComment(false)
            })
            .catch(err => {
                console.log(err)
                setPostingComment(false)
            })
    }   

    return(
    <>
    <div className="w-full pt-2">
        <div className="w-full flex flex-row">
            <div className='h-full'>
                <Avatar
                    image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                    shape="circle"
                    className="m-auto mx-4"
                />
            </div>
            <span className="p-float-label w-full">      
                {!advancedEditor &&
                <>
                    <InputText className='w-full'id="Comment" value={userComment} onChange={(e) => setUserComment(e.target.value)} />
                    <label htmlFor="Comment">Post Comment</label>
                </>
                }
                {advancedEditor &&
                    <>
                            <Editor style={{minHeight:'120px'}} onTextChange={(e: EditorTextChangeEvent) => setUserComment(e.htmlValue?? "")}/>

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
                <Button disabled={postingComment} label="Post" onClick={()=>{postReply()}} className="p-button-raised p-button-rounded  text-s py-0 px-3 " icon=" pi pi-send"/>
            </div>
        </div>
    </div>
    </>
    )
}