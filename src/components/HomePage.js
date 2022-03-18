// import HeroImage from "../img/company.png"
// // import Features from "../components/features";
// // import Image from 'next/image'
// import { faBalanceScale, faBicycle, faBreadSlice, faCookie, faCreditCard, faLaptop, faNetworkWired, faPoll, faTabletAlt, faUtensils } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { setAddress} from "../redux/CustomerInfo/CustomerInfoActions";
// import { faAcquisitionsIncorporated, faCanadianMapleLeaf, faFirstOrderAlt, faStaylinked } from "@fortawesome/free-brands-svg-icons";

// const Home = () => {
//     return(
//         <div className="">
//         <div
//           className="tablet:p-20 pt-0"
//           style={
//             {
//               // background: 'rgba(0, 0, 0, 0.5)',
//             }
//           }
//         >
//           <div className="container mx-auto flex p-3 bg-repeat">
//             <div className="px-4 hidden tablet:flex flex-row-reverse items-center">
//             <div className="hidden tablet:block visible w-1/1 tablet:w-1/3 items-end space-y-7 justify-end">
//                 <div className="flex space-x-3 items-center">
//                   <div className="rounded-full p-3 shadow-lg">
//                     <h4 className="text-4xl text-center text-secondary">
//                       <FontAwesomeIcon icon={faCookie} />
//                     </h4>
//                   </div>
//                   <div className="">
//                     <h4 className="font-bold ">Exclusive</h4>
//                     <p className="text-gray-600 ">
//                     A meal prepared by a personal chef.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex space-x-3 items-center">
//                   <div className="rounded-full p-3 shadow-lg">
//                     <h4 className="text-4xl text-secondary">
//                     <FontAwesomeIcon icon={faLaptop} />
//                     </h4>
//                   </div>
//                   <div className="">
//                     <h4 className="font-bold">Keep Working</h4>
//                     <p className="text-gray-600">Delivered to your workspace.</p>
//                   </div>
//                 </div>
//                 <div className="flex space-x-3 items-center">
//                   <div className="rounded-full shadow-lg p-3">
//                     <h4 className="text-4xl text-secondary">
//                     <FontAwesomeIcon icon={faFirstOrderAlt} />
//                     </h4>
//                   </div>
//                   <div>
//                     <h4 className="font-bold">Stay in control</h4>
//                     <p className="text-gray-600">On your own terms</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-1/3 flex ml-16 mr-16 justify-center">
//                 <Image
//                   src={HeroImage}
//                   className="object-contain"
//                   alt="demo"
//                   width="300px" 
//                   height="300px"
//                 />
//               </div>
//               <div className="w-1/3 mb-10">
//                 <div className="">
//                   <h1 className="font-black text-5xl text-secondary">
//                   Your <span className="text-primary Poppins">Workzone,<br/></span> <span className="text-primary">Your</span> Terms, <br/>Your <span className="text-primary">Chef.</span>
//                   </h1>
//                 </div>
//                 <div className="mt-2">
//                   <p className="text-gray-700 text-base">
//                   Order meals for yourself, staff or with colleagues and enjoy daily discounts. 
//                   </p>
//                 </div>
//                 <div className="mt-2 ">
//                   <form className="w-full max-w-sm">
//                     <div className="flex items-center py-2">
//                       <input
//                         className="appearance-none bg-transparent border-b w-full text-gray-700 mr-0 py-3 leading-tight focus:outline-none pr-3"
//                         type="text"
//                         placeholder="Enter delivery address"
//                         onChange = {(e)=>setAddress(e.target.value)}
//                       />
//                       <button
//                         className="flex-shrink-0 bg-primary rounded-xl rounded-l py-3 px-6 border-l-0 text-white font-semibold"
//                         type="button"
//                       >
//                         Order Food
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
              
//             </div>
//           </div>
//         </div>
//         {/* MObile Header */}
//         <div className="tablet:hidden container mx-auto p-3 bg-repeat">
//         <div className="w-1/1 mb-10 justify-center flex">
//           <img
//                   src={HeroImage}
//                   className="object-contain"
//                   alt="demo"
//                   width="300px" 
//                   height="300px"
//                 />
//           </div>
//         <div className="w-1/1 mb-5">
//           <div className="">
//           <h1 className="font-black text-4xl text-secondary">
//                   Your <span className="text-primary Poppins">Workzone,<br/></span> <span className="text-primary">Your</span> Terms, <br/>Your <span className="text-primary">Chef.</span>
//                   </h1>
//           </div>
//           <div className="mt-2">
//             <p className="text-gray-700 text-base">
//               Getting Food for Yourself or Loved Ones is as simple as FoodBox. 
//             </p>
//           </div>
//           <div className="mt-2 ">
//             <form className="w-full max-w-sm">
//               <div className="flex items-center py-2">
//                 <input
//                   className="appearance-none bg-transparent border-b w-full text-gray-700 mr-0 py-3 leading-tight focus:outline-none pr-3"
//                   type="text"
//                   placeholder="Enter delivery address"
//                   onChange = {(e)=>setAddress(e.target.value)}
//                 />
//                 <button
//                   className="flex-shrink-0 bg-primary rounded-xl rounded-l py-3 px-6 border-l-0 text-white font-semibold"
//                   type="button"
//                 >
//                   Order Food
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="w-1/1 flex justify-center mb-10">
//               </div>
//         <div className="w-1/1 items-end space-y-7 justify-end pb-5">
//               <div className="flex space-x-3 items-center">
//                 <div className="rounded-full p-5 w-1/4 shadow-lg">
//                   <h4 className="text-4xl text-center text-secondary">
//                     <FontAwesomeIcon icon={faBreadSlice} />
//                   </h4>
//                 </div>
//                 <div className="w-3/4">
//                   <h4 className="font-bold ">Select a meal.</h4>
//                   <p className="text-gray-600 ">
//                     Choose from our array of dishes.
//                   </p>
//                 </div>
//               </div>

//                 <div className="flex space-x-3 items-center">
//                 <div className="rounded-full p-5 w-1/4 shadow-lg ">
//                   <h4 className="text-4xl  text-center text-secondary">
//                   <FontAwesomeIcon icon={faCreditCard} />
//                   </h4>
//                 </div>
//                 <div className="w-3/4">
//                   <h4 className="font-bold">Pay with your card/cash.</h4>
//                   <p className="text-gray-600">It's secure and fast.</p>
//                 </div>
//               </div>
//               <div className="flex space-x-3 items-center">
//                 <div className="rounded-full shadow-lg p-5  w-1/4  shadow-lg ">
//                   <h4 className="text-4xl  text-center text-secondary">
//                   <FontAwesomeIcon icon={faBicycle} />
//                   </h4>
//                 </div>
//                 <div className="w-3/4">
//                   <h4 className="font-bold">Get your food delivered.</h4>
//                   <p className="text-gray-600">No delivery fees!</p>
//                 </div>
//               </div>
//             </div>
//         </div>
//         <div>
//             <Features />
//         </div>
//       </div>
//     )
// }

// export default Home;