'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { createClient } from '@/utils/supabase/client';
import { Container } from '@/components/Container';
import Spinner from '@/components/Spinner';
import CarouselItem from './CarouselItem';

interface Hero {
    header: string;
    paragraph: string;
    link: string;
    imageLink: string;
}

const Page = () => {
    const supabase = createClient();

    const [hero, setHero] = useState<Hero | null>(null);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [paragraph, setParagraph] = useState('');
    const [link, setLink] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);


    useEffect(() => {
        const fetchHero = async () => {
            let { data: Hero, error } = await supabase.from('Hero').select('*').single();
            if (Hero) {
                setHero(Hero);
                setTitle(Hero.header);
                setParagraph(Hero.paragraph);
                setLink(Hero.link);
            }
            setLoading(false);
        };

        fetchHero();
    }, [supabase]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);
        // Handle form submission and file upload logic here
        console.log({ title, paragraph, link, file });
        // Add your form submission logic
    };

    if (loading) {
        return (
            <Container className="flex flex-wrap ">
                <Spinner />
            </Container>
        );
    }

    return (
        <div id="main-content" className="h-screen w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <main>
                <div className="pt-6 px-4">
                    <div className="w-full grid grid-cols-1">
                        <div className="w-full p-24 slider-container">
                            {hero && (
                                <CarouselItem
                                header={hero.header}
                                paragraph={hero.paragraph}
                                link={hero.link}
                                imgSrc={hero.imageLink}
                            />
                            )}
                            
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1">
                        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2">
                            <div className="flex items-center justify-center p-12">
                                <div className="mx-auto w-full max-w-[550px] bg-white">
                                    <form className="py-6 px-9" onSubmit={handleSubmit}>
                                        <div className="mb-5">
                                            <label htmlFor="title" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Title text:
                                            </label>
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                placeholder="Welcome to..."
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="paragraph" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Paragraph:
                                            </label>
                                            <textarea
                                                name="paragraph"
                                                id="paragraph"
                                                placeholder="Description"
                                                value={paragraph}
                                                onChange={(e) => setParagraph(e.target.value)}
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="link" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Link text:
                                            </label>
                                            <input
                                                type="text"
                                                name="link"
                                                id="link"
                                                placeholder="https://"
                                                value={link}
                                                onChange={(e) => setLink(e.target.value)}
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                        <div className="mb-6 pt-4">
                                            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                                Upload File
                                            </label>
                                            <div className="mb-8">
                                                <input type="file" name="file" id="file" className="sr-only" onChange={handleFileChange} />
                                                <label htmlFor="file" className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                                                    <div>
                                                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                                            Drop files here
                                                        </span>
                                                        <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                                            Or
                                                        </span>
                                                        <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
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
    );
}

export default Page;
