import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { poppins, prata } from '@/lib/fonts'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { SiVisa } from "react-icons/si";
import { FaCreditCard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa6";
import {
    Select,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function CreditCardCheckout() {
    return (
        <div className='w-full bg-[#3d3f57] flex justify-center items-center'>
            <div className="bg-white rounded-xl overflow-hidden shadow-xl my-10 lg:my-0 w-9/12 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-5 md:p-10">
                    <div className="flex items-center gap-3 mb-10 text-sm"><ChevronLeft />Continue Shopping</div>
                    <div className={`${prata.className} font-bold text-2xl mb-2`}>Order Summary</div>
                    <div className="mb-10 grid grid-cols-3 grid-rows-3 lg:w-10/12">
                        <div className="col-span-2">1x shoes</div>
                        <div className="">$24.00</div>
                        <div className="col-span-2">Estimated taxes</div>
                        <div className="">$0</div>
                        <div className="col-span-2 border-t-2 font-medium">Total(1 item)</div>
                        <div className="border-t-2 font-semibold">$24</div>
                    </div>
                    <div className={`${prata.className} font-semibold text-2xl mb-2`}>Order Details</div>
                    <div className="shadow-xl lg:w-11/12 border">
                        <div className="flex flex-col min-[480px]:flex-row gap-2">
                            <Image src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/849566c0-f04e-4742-96f1-8f6ca677f246/AIR+JORDAN+1+RETRO+HIGH+OG.png" className="!aspect-square w-full min-[480px]:w-auto" width={80} height={80} alt="" />
                            <div className="p-2 ">
                                <p>Air Jordan 1 Retro High OG &quot;Black and Gold&quot;</p>
                                <p className="font-medium">Men&apos;s Shoes</p>
                                <p className="font-semibold">$24.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#c8a56d] lg:w-1/2 md:p-10 p-5 text-white shadow-2xl">
                    <div className="flex 2xl:gap-4">
                        <div className="2xl:block hidden w-min">
                            <Button size="lg" className='w-full rounded-lg bg-[#3d3f57] mb-4 shadow-lg'><FaCreditCard className='mr-2' />
                                Credit card</Button>
                            <Button size="lg" variant="outline" className='w-full rounded-lg bg-[#c8a56d] border-2 border-[#3d3f57] text-[#3d3f57] hover:bg-[#3d3f57] hover:text-white'><FaPaypal className='mr-2' />Paypal</Button>
                        </div>
                        <div className="grow bg-[#3d3f57] mx-auto lg:mr-0 rounded-2xl px-4 w-full sm:w-1/2 lg:w-80">
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

                    <div className="text-indigo-900 mt-10 w-max ml-auto">
                        <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
                            <Label htmlFor="email" >Name of Card Holder</Label>
                            <Input id="email" placeholder="Jay Ganatra" className='rounded-lg' />
                        </div>
                        <div className="mb-5 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="password">Card Number</Label>
                            <div className="flex justify-between gap-1 sm:gap-3 md:gap-5 ">
                                <Input id="password" className='rounded-lg shadow-lg sm:text-md md:text-lg' placeholder='2345' />
                                <Input id="password" className='rounded-lg shadow-lg sm:text-md md:text-lg' placeholder='2345' />
                                <Input id="password" className='rounded-lg shadow-lg sm:text-md md:text-lg' placeholder='2345' />
                                <Input id="password" className='rounded-lg shadow-lg sm:text-md md:text-lg' placeholder='2345' />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <div className="mb-5 grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="password">Expiration Date</Label>
                                <div className="flex gap-2">
                                    <Select>
                                        <SelectTrigger className="w-[70px]">
                                            <SelectValue placeholder="10" />
                                        </SelectTrigger>

                                    </Select>
                                    <Select>
                                        <SelectTrigger className="w-[70px]">
                                            <SelectValue placeholder="22" />
                                        </SelectTrigger>

                                    </Select>
                                </div>
                            </div>
                            <div className="mb-5 grid w-max max-w-sm items-center gap-1.5">
                                <Label htmlFor="password" className='md:text-right'>CVV</Label>
                                <Input id="password" className='w-20 rounded-lg shadow-lg sm:text-md md:text-lg' />

                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button size="lg" className='rounded-lg bg-[#3d3f57] mb-6 shadow-lg'>Purchase</Button>
                        </div>
                    </div>
                </div>



            </div>

        </div >
    )
}

export default CreditCardCheckout
