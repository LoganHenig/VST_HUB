import { Image } from 'primereact/image';
import ProductImage from '../../assets/product.png'
import "./imageAndDiscription.css";

type ImageAndDiscription = {
    id: string,
    // productName: string,
    // discription: string,
}

export const ImageAndDiscription = (prop: ImageAndDiscription) => {
    return(
    <>
        <div className="w-screen flex flex-row divide-x-0">
          <div className="w-5/12 md:m-4 lg:m-10 sm:p-2 md:p-4 lg:p-10 flex" id="image-container">
            <div className="flex flex-col ">
                <Image src={ProductImage} className='m-2' alt="changeImage" width="60" />
                <Image src={ProductImage} className='m-2' alt="changeImage" width="60" />
                <Image src={ProductImage} className='m-2' alt="changeImage" width="60" />
                <Image src={ProductImage} className='m-2' alt="changeImage" width="60" />
            </div>
                <div>
                <Image src={ProductImage} className='flex justify-center'preview={true} alt="Image" width="800" />
                </div>
          </div>
          <div className="w-7/12 md:m-4 lg:m-10 sm:p-2 md:p-4 lg:p-10 bg-primary-background " id="discription-container">
            <div className="text-primary-content sm:text-base lg:text-2xl pl-10 py-9 underline">Product {prop.id} </div>
            <div className='max-w-3xl'>
                <div className="text-secondary-content">Product discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingy</div>
                <div className="text-secondary-content">Product discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingy</div>
                <div className="text-secondary-content">Product discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingy</div>
                <div className="text-secondary-content">Product discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingyProduct discription this is a super cool thingy</div>
            </div>
            </div>
        </div>
    </>
    )
}