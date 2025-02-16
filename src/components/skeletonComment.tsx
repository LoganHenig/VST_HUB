import { Skeleton } from 'primereact/skeleton';
export const SkeletonComment = () => {
    return(
    <div className='flex flex-row ml-32 items-center mt-4'>
        <Skeleton shape='circle' width='2rem' height='2rem'/>
        <div className='ml-4'>
            <Skeleton  width='10rem' height='.8rem'/>
            <Skeleton className='mt-2' width='20rem' height='1rem'/>
        </div>
    </div>
    )
}