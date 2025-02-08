import { Avatar } from 'primereact/avatar';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Editor } from 'primereact/editor';
import { InputText } from 'primereact/inputtext';
export const Reply = () => {

    const [userComment, setUserComment] = useState("");
    const [advancedEditor, setAdvancedEditor] = useState(false);
    
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
        <Button label="Post" onClick={()=>{console.log('post')}} className="p-button-raised p-button-rounded  text-s py-0 px-3 " icon=" pi pi-send"/>
        </div>
    </div>
    </>
    )
}