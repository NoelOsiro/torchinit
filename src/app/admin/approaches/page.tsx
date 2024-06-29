
import React from 'react'
import Image from 'next/image'
import { createClient } from '@/utils/supabase/server';
import { Container } from '@/components/Container';
import Spinner from '@/components/Spinner';
import { ApproachProps } from '@/components/Approaches';
import { PostgrestError } from '@supabase/supabase-js';


const page = async () => {
    const supabase = createClient();
    const { data: approaches, error }: { data: ApproachProps[] | null, error: PostgrestError | null } = await supabase
        .from('Approaches')
        .select('*')
        .order('id', { ascending: true });
    if (!approaches) {
        return (
            <Container className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
                <Spinner />
            </Container>
        )
    }
    return (
        <div id="main-content" className="h-screen w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <main>
                <div className="pt-6 px-4">
                    <div className="w-full grid grid-cols-1">
                        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                                    alt="image"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                    startups
                                </h6>
                                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    Lyft launching cross-platform service this week
                                </h4>
                                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                    Like so many organizations these days, Autodesk is a company in
                                    transition. It was until recently a traditional boxed software company
                                    selling licenses. Yet its own business model disruption is only part of
                                    the story
                                </p>
                                <a className="inline-block" href="#">
                                    <button
                                        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                    >
                                        Learn More
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            ></path>
                                        </svg>
                                    </button>
                                </a>
                            </div>
                        </div>

                    </div>
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
                                            <label
                                                htmlFor="title"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >

                                                Title text:
                                            </label>
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                placeholder="Welcome to..."
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <label
                                                htmlFor="desc"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Description:
                                            </label>
                                            <input
                                                type='text'
                                                name="desc"
                                                id="desc"
                                                placeholder="Description"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <label
                                                htmlFor="link"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Link text:
                                            </label>
                                            <input
                                                type="text"
                                                name="link"
                                                id="link"
                                                placeholder="https://"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                        <div className="mb-6 pt-4">
                                            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                                Upload File
                                            </label>

                                            <div className="mb-8">
                                                <input type="file" name="file" id="file" className="sr-only" />
                                                <label
                                                    htmlFor="file"
                                                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                                                >
                                                    <div>
                                                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                                            Drop files here
                                                        </span>
                                                        <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                                            Or
                                                        </span>
                                                        <span
                                                            className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                                                        >
                                                            Browse
                                                        </span>
                                                    </div>
                                                </label>
                                            </div>
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