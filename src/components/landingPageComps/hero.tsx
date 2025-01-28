// import { Button } from 'primereact/button'
import './landingComp.css'
export const Hero = () => {
    return(
        <>

            <div className="relative w-screen overflow-x-hidden flex justify-center">
                
                <div id="video-frame" className=" relative z-10 video-width overflow-hidden rounded-lg white flex justify-center">
                    <div className='VST-HUB-heading text-6xl z-40 bangers-font flex flex-col invert-color'>
                        <p><b>VST HUB</b></p>
                        <div className=''>FIND YOUR SOUND</div>
                        {/* <div className='mt-20 ml-11'>
                            <Button className='invert-color' label="Get Started" severity="info" text raised />
                        </div> */}
                        
                    </div>
                    <div className=' width-100 overflow-x-hidden video-clip-path min-w-3xl lg:m-10 md:-m-8 m-4 bg-white flex justify-center items-center'>
                        <video 
                            muted
                            loop
                            className='video-99 video-clip-path z-30'
                            autoPlay
                        >
                            <source src='src\assets\audioVideo.mp4' type='video/mp4'/>
                        </video>
                        
                    </div>
                    {/* <div className=" mask-clip-path absolute z-50 size-64 c">

                    </div> */}
                    
                </div>
                
            </div>
            {/* <div className='layer2 spacer'>

            </div> */}
        </>
    )
}