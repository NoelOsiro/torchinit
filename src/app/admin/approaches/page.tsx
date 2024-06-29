'use client'
import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Container } from '@/components/Container';
import Spinner from '@/components/Spinner';
import { ApproachProps } from '@/components/Approaches';
import { PostgrestError } from '@supabase/supabase-js';
import PageContent from './PageContent';

const Page = () => {
    const [approaches, setApproaches] = useState<ApproachProps[]>([]);
    const [formData, setFormData] = useState({ title: '', description: '', buttonText: '', tag: '', caption: '', imgSrc: ''});
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const supabase = createClient();

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
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        if (file) {
            
            const { data: uploadData, error: uploadError } = await supabase.storage
                .from('images')
                .upload(`Approaches/${file.name}`, file);

            if (uploadError) {
                setIsSubmitting(false);
                alert(uploadError.message);
                return;
            }

            const fileUrl = supabase.storage.from('images').getPublicUrl(`Approaches/${file.name}`).data?.publicUrl;

            // Check if approach with this title already exists
            const { data: existingApproach, error: fetchError } = await supabase
                .from('Approaches')
                .select('*')
                .eq('title', formData.title)
                .single();

            if (fetchError) {
                setIsSubmitting(false);
                alert(fetchError.message);
                return;
            }

            if (existingApproach) {
                // Approach with this title already exists, update it
                const { error: updateError } = await supabase
                    .from('Approaches')
                    .update({ ...formData, imgSrc: fileUrl })
                    .eq('title', formData.title);

                if (updateError) {
                    setIsSubmitting(false);
                    alert(updateError.message);
                } else {
                    fetchApproaches();
                }
            } else {
                // Approach with this title does not exist, insert new
                const { error: insertError } = await supabase
                    .from('Approaches')
                    .insert([{ ...formData, imgSrc: fileUrl }]);

                if (insertError) {
                    setIsSubmitting(false);
                    alert(insertError.message);
                } else {
                    fetchApproaches();
                }
            }
        }
    };
    const fetchApproaches = async () => {
        const { data, error }: { data: ApproachProps[] | null, error: PostgrestError | null } = await supabase
            .from('Approaches')
            .select('*')
            .order('id', { ascending: true });

        if (data) {
            setApproaches(data);
        }
    };

    React.useEffect(() => {
        fetchApproaches();
    }, []);

    if (!approaches.length) {
        return (
            <Container className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
                <Spinner />
            </Container>
        );
    }

    return <PageContent 
        approaches={approaches}
        onEdit={handleEdit}
        formData={formData}
        onChange={handleChange}
        handleSubmit={handleSubmit}
        handleFileChange={handleFileChange}
        file={file} isSubmitting={isSubmitting} />;
};

export default Page;