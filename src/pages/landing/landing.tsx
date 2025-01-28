import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import './landing.css'
import { Hero } from '../../components/landingPageComps/hero';

gsap.registerPlugin(ScrollTrigger);

export const Landing = () =>{
    useGSAP(()=> {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true, 
                pinSpacing: true,
            }
        })
        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0

        })
    })

    // const navigate = useNavigate();

    return (
    <>  
        <Hero/>
    </>
    )
}
