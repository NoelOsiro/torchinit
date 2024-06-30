'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Container } from '@/components/Container';
import { PostgrestError } from '@supabase/supabase-js';
import PageContent from './PageContent';
import { Benefit } from '@/types';
import Spinner from '@/components/Spinner';

const Page = () => {
    const [benefits, setBenefits] = useState<Benefit[]>([]);
    const [formData, setFormData] = useState<Benefit>({title: '', desc: '', button: false, image: 'left', imagePos: 'left', id: 0, Benefits_points: []});
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const supabase = createClient();

    const handleEdit = (benefit: Benefit): void => {
        setFormData({
            title: benefit.title,
            desc: benefit.desc,
            button: benefit.button,
            image: benefit.image,
            imagePos: benefit.imagePos,
            id: benefit.id,
            Benefits_points: benefit.Benefits_points,
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
    };

    const fetchBenefits = useCallback(async () => {
        const { data, error }: { data: Benefit[] | null, error: PostgrestError | null } = await supabase
            .from('Benefits')
            .select('*')
            .order('id', { ascending: true });

        if (data) {
            setBenefits(data);
        }
    }, [supabase]);

    useEffect(() => {
        fetchBenefits();
    }, [fetchBenefits]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        if (file) {
            const { data: uploadData, error: uploadError } = await supabase.storage
                .from('images')
                .upload(`Benefits/${file.name}`, file);

            if (uploadError) {
                setIsSubmitting(false);
                alert(uploadError.message);
                return;
            }

            const fileUrl = supabase.storage.from('images').getPublicUrl(`Benefits/${file.name}`).data?.publicUrl;

            const { data: existingBenefit, error: fetchError } = await supabase
                .from('Benefits')
                .select('*')
                .eq('title', formData.title)
                .single();

            if (fetchError) {
                setIsSubmitting(false);
                alert(fetchError.message);
                return;
            }

            if (existingBenefit) {
                const { error: updateError } = await supabase
                    .from('Benefits')
                    .update({ ...formData, image: fileUrl })
                    .eq('title', formData.title);

                if (updateError) {
                    setIsSubmitting(false);
                    alert(updateError.message);
                } else {
                    fetchBenefits();
                }
            } else {
                const { error: insertError } = await supabase
                    .from('Benefits')
                    .insert([{ ...formData, image: fileUrl }]);

                if (insertError) {
                    setIsSubmitting(false);
                    alert(insertError.message);
                } else {
                    fetchBenefits();
                }
            }
        }
    };

    if (!benefits.length) {
        return (
            <Container className="flex flex-col h-screen justify-between items-center lg:flex-row lg:items-start">
                <Spinner />
            </Container>
        );
    }

    return (
        <PageContent
            benefits={benefits}
            onEdit={handleEdit}
            formData={formData}
            onChange={handleChange}
            handleSubmit={handleSubmit}
            handleFileChange={handleFileChange}
            file={file}
            isSubmitting={isSubmitting}
        />
    );
};

export default Page;
