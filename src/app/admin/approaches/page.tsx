'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { createClient } from '@/utils/supabase/client';
import { Container } from '@/components/Container';
import Spinner from '@/components/Spinner';
import { ApproachProps } from '@/components/Approaches';
import { PostgrestError } from '@supabase/supabase-js';

type FormSectionProps = {
    formData: ApproachProps;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
};

type PageContentProps = {
    approaches: ApproachProps[];
    onEdit: (approach: ApproachProps) => void;
    formData: ApproachProps;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
};

const ApproachCard = (
    { approach, onEdit }: {
        approach: ApproachProps,
        onEdit: (approach: ApproachProps) => void
    }) => (
    <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <Image
                src={approach.imgSrc}
                alt="image"
                className="h-full w-full object-cover"
                fill
            />
        </div>
        <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                {approach.tag}
            </h6>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {approach.title}
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                {approach.description}
            </p>
            <button
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30"
                type="button"
                onClick={() => onEdit(approach)}
            >
                Edit
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                </svg>
            </button>
        </div>
    </div>
);

const FormSection: React.FC<FormSectionProps> = ({ formData, onChange }) => {
    const [file, setFile] = useState<File | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
    };
    return (
        <div className="w-full grid grid-cols-1">
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2">
                <div className="flex items-center justify-center p-12">
                    <div className="mx-auto w-full max-w-[550px] bg-white">
                        <form className="py-6 px-9">
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
                                    value={formData.title || ''}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="desc"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Description:
                                </label>
                                <textarea
                                    name="description"
                                    id="desc"
                                    placeholder="Description"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    value={formData.description || ''}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="link"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Button text:
                                </label>
                                <input
                                    type="text"
                                    name="buttonText"
                                    id="buttonText"
                                    placeholder="https://"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    value={formData.buttonText || ''}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="tag"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Tag text:
                                </label>
                                <input
                                    type="text"
                                    name="tag"
                                    id="tiag"
                                    placeholder="Tag."
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    value={formData.tag || ''}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="caption"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Caption text:
                                </label>
                                <input
                                    type="text"
                                    name="caption"
                                    id="caption"
                                    placeholder="Welcome to..."
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    value={formData.caption || ''}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="mb-6 pt-4">
                                <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                    Approach Image
                                </label>
                                <div className="mb-8">
                                    <input type="file" name="file" id="file" className="sr-only" onChange={handleFileChange} />
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
                                            <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                                                Browse
                                            </span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
};

const PageContent: React.FC<PageContentProps> = ({ approaches, onEdit, formData, onChange }) => (
    <div id="main-content" className="h-screen w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
        <main>
            <div className="pt-6 px-4">
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
                    {approaches.map((approach) => (
                        <ApproachCard approach={approach} onEdit={onEdit} key={approach.title} />
                    ))}
                </div>
                <FormSection formData={formData} onChange={onChange} />
            </div>
        </main>
    </div>
);

const Page = () => {
    const [approaches, setApproaches] = useState<ApproachProps[]>([]);
    const [formData, setFormData] = useState({ title: '', description: '', buttonText: '', tag: '', caption: '', imgSrc: ''});

    const handleEdit = (approach: ApproachProps): void => {
        setFormData({
            title: approach.title,
            description: approach.description,
            buttonText: approach.buttonText,
            tag: approach.tag,
            caption: approach.caption,
            imgSrc: approach.imgSrc,
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    

    React.useEffect(() => {
        const fetchApproaches = async () => {
            const supabase = createClient();
            const { data, error }: { data: ApproachProps[] | null, error: PostgrestError | null } = await supabase
                .from('Approaches')
                .select('*')
                .order('id', { ascending: true });

            if (data) {
                setApproaches(data);
            }
        };

        fetchApproaches();
    }, []);

    if (!approaches.length) {
        return (
            <Container className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
                <Spinner />
            </Container>
        );
    }

    return <PageContent approaches={approaches} onEdit={handleEdit} formData={formData} onChange={handleChange} />;
};

export default Page;
