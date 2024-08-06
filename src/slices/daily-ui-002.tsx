import { poppins, prata, unna } from '@/lib/fonts'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { SiVisa } from "react-icons/si";

function CreditCardCheckout() {
    return (
        <div className='w-full bg-[#3d3f57] flex justify-center items-center'>
            <div className="bg-white rounded-xl overflow-hidden shadow-xl w-10/12 flex">
                <div className="w-3/5 p-10">
                    <div className="flex items-center gap-3 mb-10 text-sm"><ChevronLeft />Continue Shopping</div>
                    <div className={`${prata.className} font-bold text-2xl mb-2`}>Order Summary</div>
                    <div className="mb-10 grid grid-cols-3 grid-rows-3 w-9/12">
                        <div className="col-span-2">1x shoes</div>
                        <div className="">$24.00</div>
                        <div className="col-span-2">Estimated taxes</div>
                        <div className="">$0</div>
                        <div className="col-span-2 border-t-2 font-medium">Total(1 item)</div>
                        <div className="border-t-2 font-semibold">$24</div>
                    </div>
                    <div className={`${prata.className} font-semibold text-2xl mb-2`}>Order Details</div>
                    <div className="shadow-xl w-9/12 border">
                        <div className="flex gap-2">
                            <Image src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/849566c0-f04e-4742-96f1-8f6ca677f246/AIR+JORDAN+1+RETRO+HIGH+OG.png" className=" aspect-square" width={80} height={80} alt="" />
                            <div className="p-2">
                                <p>Air Jordan 1 Retro High OG &quot;Black and Gold&quot;</p>
                                <p className="font-medium">Men&apos;s Shoes</p>
                                <p className="font-semibold">$24.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#c29564] w-2/5 p-10 text-white shadow-2xl">
                    <div className="bg-[#3d3f57] ml-auto rounded-2xl px-4">
                        <SiVisa className='text-6xl ml-auto my-0' />

                        <div className={`flex gap-3 justify-evenly py-3 text-xl ${poppins.className}`}>
                            <p>2345</p>
                            <p>2345</p>
                            <p>2345</p>
                            <p>2345</p>
                        </div>

                        <div className="mx-3 grid grid-rows-2 grid-cols-2 py-3">
                            <div className="text-sm text-gray-400">Card Holder</div>
                            <div className="justify-self-end text-sm text-gray-400">Expire Date</div>
                            <div className="">Jay B Ganatra</div>
                            <div className="justify-self-end">10/22</div>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default CreditCardCheckout
