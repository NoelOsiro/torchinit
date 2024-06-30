'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Container } from '@/components/Container';
import { PostgrestError } from '@supabase/supabase-js';
import PageContent from './PageContent';
import { Program } from '@/types';
import Spinner from '@/components/Spinner';

const Page = () => {
    const [programs, setPrograms] = useState<Program[]>([]);
    const [formData, setFormData] = useState<Program>({title: '', desc: '', button: false, image: 'left', imagePos: 'left', id: 0, Program_points: []});
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const supabase = createClient();

    const handleEdit = (program: Program): void => {
        setFormData({
            title: program.title,
            desc: program.desc,
            button: program.button,
            image: program.image,
            imagePos: program.imagePos,
            id: program.id,
            Program_points: program.Program_points,
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
        const { data, error }: { data: Program[] | null, error: PostgrestError | null } = await supabase
            .from('Programs')
            .select('*')
            .order('id', { ascending: true });

        if (data) {
            setPrograms(data);
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
                .from('Programs')
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
                    .from('Programs')
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
                    .from('Programs')
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

    if (!programs.length) {
        return (
            <Container className="h-screen flex flex-col justify-between items-center lg:flex-row lg:items-start">
                <Spinner />
            </Container>
        );
    }

    return (
        <PageContent
            programs={programs}
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
