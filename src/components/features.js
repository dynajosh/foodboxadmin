import {Link} from 'react-router-dom'
import sectionImage from '../public/icon.png'
import CompanyImage from '../public/company.png'
import orderImage from '../public/orderFood.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AmalaEgusi from "../public/amala-egusi.jpg";
import JollofChicken from "../public/jollofchicken.jpg";
import FriedChicken from "../public/friedchicken.jpg";
import Porridge from "../public/porridge.jpg";
import Spagetthi from "../public/spagetthi.jpg";
import Star from "../public/star.png";
import Pear from "../public/pear.png";
import Truck from "../public/delivery-truck.png";
import HeroImage from "../public/banner.jpeg"



const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


export const Company =()=>{
    return(
        <>
        <div className="hidden tablet:flex mb-16 mt-20">
                <div className="w-1/2 space-y-4">
                <h1 className="font-bold text-3xl text-left mb-4">
                        Company Orders
                    </h1>
                    <div className='flex justify-start'>
                        <p className="text-gray-500 mb-0 text-left w-4/5">
                        Save on your feeding by ordering together with your colleagues at work. You can also Offer your staff more value with budget friendly meals from a professional chef. 
                        </p>
                    </div>
                    <div>
                    <h4 className="font-bold text-lg text-gray-600 text-left mt-1">Choose from our menu</h4>
                    <Carousel 
                    responsive={responsive}
                    infinite={true}
                    // itemClass="carousel-item-padding-40-px"
                    keyBoardControl={true}
                    >
                        <div className="m-3 ml-0">
                            <Image alt="demo" src ={AmalaEgusi} className="inline object-contain h-40 w-40 rounded-lg"/>
                            <h4 className="font-bold text-xs text-gray-500  mt-0">MAIN DISHES</h4>
                            <h4 className="font-bold text-lg text-gray-600  mt-1">Amala & Egusi</h4>
                        </div>
                        <div className="m-3">
                            <Image alt="demo" src ={JollofChicken} className="inline object-contain h-40 w-40 rounded-lg"/>
                            <h4 className="font-bold text-xs text-gray-500  mt-0">GRILLS</h4>
                            <h4 className="font-bold text-lg text-gray-600  mt-1">Jollof & Chicken</h4>
                        </div>
                        <div className="m-3">
                            <Image alt="demo" src ={Spagetthi} className="inline object-contain h-40 w-40 rounded-lg"/>
                            <h4 className="font-bold text-xs text-gray-500  mt-0">PASTRIES</h4>
                            <h4 className="font-bold text-lg text-gray-600  mt-1">Spagetthi</h4>
                        </div>
                        <div className="m-3">
                            <Image alt="demo" src ={Spagetthi} className="inline object-contain h-40 w-40 rounded-lg"/>
                            <h4 className="font-bold text-xs text-gray-500  mt-0">PASTRIES</h4>
                            <h4 className="font-bold text-lg text-gray-600  mt-1">Spagetthi</h4>
                        </div>
                    </Carousel>
                    </div>
                    <div className='flex justify-start'>
                        <button className="flex-shrink-0 bg-secondary text-center rounded-xl py-3 px-6  text-black font-semibold " >
                            <Link href="https://company.foodbox.com">Create a plan</Link>
                        </button>
                    </div>
                </div>
                <div className="flex justify-end w-1/2">
                <Image alt="Demo" src={CompanyImage} width="400px" height="400px" className="object-contain h-f w-full mb-8"/>
                </div>
            </div>
            {/* Mobile */}
            <div className="tablet:hidden mb-16 mt-20">
                <div className="w-1/1 mt-4  tablet:w-1/2 space-y-4">
                    <div className='block tablet:hidden'>
                    <Image alt="Demo" src={CompanyImage} width="400px" height="400px" className="object-contain h-f w-full mb-8"/>
                    </div>
                <h1 className="font-bold text-3xl text-center tablet:text-left mb-4">
                        Company Orders
                    </h1>
                    <div className='flex justify-center tablet:justify-start'>
                        <p className="text-gray-500 mb-0 text-center tablet:text-left tablet:w-4/5">
                        Save on your feeding by ordering together with your colleagues at work. You can also Offer your staff more value with budget friendly meals from a professional chef. 
                        </p>
                    </div>
                    <div>
                    <h4 className="font-bold text-lg text-gray-600 text-center tablet:text-left  mt-1">Choose from our menu</h4>
                    <Carousel 
                    responsive={responsive}
                    infinite={true}
                    // itemClass="carousel-item-padding-40-px"
                    keyBoardControl={true}
                    >
                        <div className="m-3 ml-0">
                            <Image alt="demo" src ={AmalaEgusi} className="inline object-contain h-40 w-40 rounded-lg"/>
                            <h4 className="font-bold text-xs text-gray-500  mt-0">MAIN DISHES</h4>
                            <h4 className="font-bold text-lg text-gray-600  mt-1">Amala & Egusi</h4>
                        </div>
                        <div className="m-3">
                            <Image alt="demo" src ={JollofChicken} className="inline object-contain h-40 w-40 rounded-lg"/>
                            <h4 className="font-bold text-xs text-gray-500  mt-0">GRILLS</h4>
                            <h4 className="font-bold text-lg text-gray-600  mt-1">Jollof & Chicken</h4>
                        </div>
                        <div className="m-3">
                            <Image alt="demo" src ={Spagetthi} className="inline object-contain h-40 w-40 rounded-lg"/>
                            <h4 className="font-bold text-xs text-gray-500  mt-0">PASTRIES</h4>
                            <h4 className="font-bold text-lg text-gray-600  mt-1">Spagetthi</h4>
                        </div>
                        <div className="m-3">
                            <Image alt="demo" src ={Spagetthi} className="inline object-contain h-40 w-40 rounded-lg"/>
                            <h4 className="font-bold text-xs text-gray-500  mt-0">PASTRIES</h4>
                            <h4 className="font-bold text-lg text-gray-600  mt-1">Spagetthi</h4>
                        </div>
                    </Carousel>
                    </div>
                    <div className='flex justify-center tablet:justify-start'>
                        <button className="flex-shrink-0 bg-secondary text-center rounded-xl py-3 px-6  text-black font-semibold " >
                            <Link href="https://company.foodbox.com">Create a plan</Link>
                        </button>
                    </div>
                </div>
                <div className="w-1/1 justify-end hidden tablet:flex tablet:w-1/2">
                <Image alt="Demo" src={CompanyImage} width="400px" height="400px" className="object-contain h-f w-full mb-8"/>
                </div>
            </div>
        </>
    )
}


export const OrderFood = () => {
    return(
        <div>
            <div className="hidden tablet:flex items-center ">
                <div className="w-1/1 tablet:w-1/2 ">
                    <div className=" w-1/1 tablet:w-3/4">
                    <Image alt="Demo" src={orderImage} width="400px" height="400px" className=" inline object-contain h-10 w-10 /"/>

                    </div>
                    
                </div>
                <div className="w-1/1 tablet:w-1/2 float-right mb-16 tablet:mb-0">
                    <h1 className="font-bold text-3xl pt-4 text-left mb-4">
                        Order Food
                    </h1>
                    <div className='flex justify-start mt-0'>
                        <p className="text-left text-gray-500 mb-4 w-3/4 ">
                        Order meals from any of your favorite restaurants and get it delivered to you within an hour, and no extra delivery charges.
                    </p>
                    </div>
                    <div className='flex justify-start'>
                        <button className="flex-shrink-0 bg-secondary text-center rounded-xl py-3 px-6  text-black font-semibold" >
                            <Link href="/order">Order Here</Link>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className="tablet:hidden items-center ">
                <div className="w-1/1 ">
                    <div className=" w-1/1">
                    <Image alt="Demo" src={orderImage} width="400px" height="400px" className=" inline object-contain h-10 w-10 /"/>
                    </div>
                    
                </div>
                <div className="w-1/1 tablet:w-1/2 float-right mb-16 tablet:mb-0">
                    <h1 className="font-bold text-3xl pt-4 text-center mb-4">
                        Order Food
                    </h1>
                    <div className='flex justify-center mt-0'>
                        <p className=" text-center text-gray-500 mb-4 tablet:w-3/4 ">
                        Order meals from any of your favorite restaurants and get it delivered to you within an hour, and no extra delivery charges.
                    </p>
                    </div>
                    <div className='flex justify-center'>
                        <button className="flex-shrink-0 bg-secondary text-center rounded-xl py-3 px-6  text-black font-semibold" >
                            <Link href="/order">Order Here</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const SendSurpise = () => {
    return(
        <div>
            <div className="hidden tablet:flex mb-16 mt-40 items-center">
                <div className="w-1/1 tablet:w-1/2">
                    <h1 className="font-bold text-3xl mt-4 text-left mb-4">
                        Surprise Me
                    </h1>
                    <Image alt="Demo" src={HeroImage} width="400px" height="400px" className="object-contain h-f w-full mb-8"/>
                </div>
                <div className="w-1/1 tablet:w-1/2 space-y-10 mt-4">
                    {/* <h4 className="font-bold text-lg text-gray-600 text-left">Why Foodbox?</h4> */}
                    <div className="flex space-x-4">
                        
                        <div className=''>
                        <Image alt="Demo" src={Pear} width="60px" height="60px" className="object-contain h-f w-full mb-8"/>

                        </div>
                        <div className='w-5/6'>
                        <h4 className="font-bold text-lg text-gray-600  mt-1">Surprise Me Meal</h4>
                        <p className="text-gray-500 tablet:w-3/4">
                        Send food to your loved ones and make their day.
                        </p>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        
                        <div>
                        <Image alt="Demo" src={Pear} width="60px" height="60px" className="object-contain h-f w-full mb-8"/>
                        </div>
                        <div>
                        <h4 className="font-bold text-lg text-gray-600 mt-1">Surprise Me Note</h4>
                        <p className="text-gray-500 tablet:w-3/4">
                        Attach love notes to food order to give extra
                        </p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <button className="flex-shrink-0 bg-secondary text-center rounded-xl py-3 px-6  text-black font-semibold">
                            <a href="https://www.surprise.buyfoodbox.com">Send Surprise</a>
                        </button>
                    </div>    
                </div>
            </div>  
            <div className="tablet:hidden mb-16 tablet:mt-40 items-center">
                <div className="w-1/1 ">
                    <Image alt="Demo" src={HeroImage} width="400px" height="400px" className="object-contain h-f w-full mb-8"/>
                    <h1 className="font-bold text-3xl mt-4 text-center mb-4">
                        Surprise Me
                    </h1>
                </div>
                <div className="w-1/1 tablet:w-1/2 space-y-8 mt-4">
                    {/* <h4 className="font-bold text-lg text-gray-600 text-center ">Why Foodbox?</h4> */}
                    <div className="flex space-x-4">
                        
                        <div className=''>
                        <Image alt="Demo" src={Pear} width="60px" height="60px" className="object-contain h-f w-full mb-8"/>
                        </div>
                        <div className='w-5/6'>
                        <h4 className="font-bold text-lg text-gray-600  mt-1">Surprise Me Meal</h4>
                        <p className="text-gray-500 tablet:w-3/4">
                        Send food to your loved ones and make their day.
                        </p>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div>
                        <Image alt="Demo" src={Pear} width="60px" height="60px" className="object-contain h-f w-full mb-8"/>
                        </div>
                        <div>
                        <h4 className="font-bold text-lg text-gray-600  mt-1">Surprise Me Note</h4>
                        <p className="text-gray-500 tablet:w-3/4">
                        Attach love notes to food order to give extra
                        </p>
                        </div>
                    </div>
                    <div className='flex justify-center '>
                        <button className="flex-shrink-0 bg-secondary text-center rounded-xl py-3 px-6  text-black font-semibold">
                            <a href="https://www.surprise.buyfoodbox.com">Send Surprise</a>
                        </button>
                    </div>    
                </div>
            </div>   
        </div>
             
    )
}


const Features =()=> {
    return(
        <div className="container mx-auto mt-10 mb-20 p-2 tablet:p-default">
            <OrderFood />
            <Company />
            <SendSurpise />
        </div>
    )
}

export default Features;