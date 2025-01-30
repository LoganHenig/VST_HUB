import './landingComp.css'
export const Hero = () => {
    return(
        <>

            <div className="relative w-screen overflow-x-hidden flex justify-center">
                
                <div id="video-frame" className=" relative z-10 video-width overflow-hidden rounded-lg white flex justify-center">
                    <div className='VST-HUB-heading text-7xl z-40 bangers-font flex flex-col invert-color'>
                        <p><b>VST HUB</b></p>
                        <div className=''>FIND YOUR SOUND</div>
                        {/* ADD GET STARTED BUTTON */}
                    </div>
                    <div className=' width-100 overflow-x-hidden video-clip-path min-w-3xl lg:m-10 md:m-8 m-0 bg-white flex justify-center items-center'>
                        <video 
                            muted
                            loop
                            className='video-99 video-clip-path z-30'
                            autoPlay
                        >
                            <source src='src\assets\audioVideo.mp4' type='video/mp4'/>
                        </video>
                    </div>
                </div>
            </div>
        </>
    )
}