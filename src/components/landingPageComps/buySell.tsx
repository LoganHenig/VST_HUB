import './landingComp.css'

export const BuySell = () => {
    return(
    <>
    <div className='w-screen flex items-center justify-center flex-col'>
        <div className='buy-sell-container flex'>
            <div className='buy-text text-white text-center flex items-center '>We dont personaly sell products but we can help you find the product you need and link you to the appropriate vendor </div>
            <div className='buy-icon flex items-center justify-center'>
                <div className='comp-image'/>
            </div>
        </div>
        <div className='buy-sell-container flex'>
            <div className='sell-icon flex items-center justify-center'>
                <div className='comp-image'/>
            </div>
            <div className='sell-text text-white text-center flex items-center'>We dont personaly sell products but if you would like your product to be listed contact us at vstsupport@vsthub.com</div>
            
        </div>
    </div>
    </>
    )
}