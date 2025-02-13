import { Avatar } from 'primereact/avatar';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Editor } from 'primereact/editor';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { useAppSelector } from '../../utils/hooks';

type replyProp = {
    parent_id: string,
    replies: any,
    setReplies: any,
}

export const Reply = (props: replyProp) => {

    const [userComment, setUserComment] = useState("");
    const [advancedEditor, setAdvancedEditor] = useState(false);
    const productStore = useAppSelector((store) => store.product);


    const postReply = () => {
        console.log(props)
        axios.post(`http://localhost:8108/replies/${props.parent_id}/`, {
            message: userComment,
            user_id: '5eb7cf5a86d9755df3a6c593',
            product_id: productStore.id,
            is_reply: true
        })
            .then(res => {
                console.log(res.data)
                props.setReplies([...props.replies, res.data])
                setUserComment("")
            })
            .catch(err => {
                console.log(err)
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
            
                        <span className="p-float-label w-full  ">      
                            {!advancedEditor &&
                            <>
                                <InputText className='w-full'id="Comment" value={userComment} onChange={(e) => setUserComment(e.target.value)} />
                                <label htmlFor="Comment">Post Comment</label>
                            </>
                            }
                            {advancedEditor &&
                                <>
                                        <Editor style={{minHeight:'120px'}}/>
            
                                </>
                            }
                        </span>
        </div>
        <div className='w-full flex flex-row justify-end my-2'>
        <Button label={`${advancedEditor ? 'Basic' : 'Advanced'}`} onClick={()=>{setAdvancedEditor(!advancedEditor)}} className="p-button-outlined p-button-rounded  text-s py-0 px-2 mx-2" />
        <Button label="Post" onClick={()=>{postReply()}} className="p-button-raised p-button-rounded  text-s py-0 px-3 " icon=" pi pi-send"/>
        </div>
    </div>
    </>
    )
}