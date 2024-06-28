
import React from 'react'
import Image from 'next/image'


const page = () => {
    return (
        <div id="main-content" className="h-screen w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <main>
                <div className="pt-6 px-4">
                    <div className="w-full grid grid-cols-1">
                        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                            <div className="flex items-center justify-center p-12">

                                <div className="mx-auto w-full max-w-[550px] bg-white">
                                    <form
                                        className="py-6 px-9"
                                        action="https://formbold.com/s/FORM_ID"
                                        method="POST"
                                    >
                                        <div className="mb-5">
                                            <div>
                                                <label
                                                    htmlFor="title"
                                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                    Title text:
                                                </label>
                                            </div>
                                            <select
                                                name="title"
                                                id="title"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            >
                                                <option value="">Select...</option>
                                                <option value="Mission">Mission</option>
                                                <option value="Vision">Vision</option>
                                                <option value="Values">Values</option>
                                            </select>
                                        </div>
                                        <div className="mb-5">
                                            <label
                                                htmlFor="description"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                description:
                                            </label>
                                            <textarea
                                                name="description"
                                                id="description"
                                                placeholder="Description"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                        <div>
                                            <button
                                                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page