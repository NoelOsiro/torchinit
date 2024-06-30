'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Container } from '@/components/Container';
import { PostgrestError } from '@supabase/supabase-js';
import PageContent from './PageContent';
import { TeamMember } from '@/types';
import Spinner from '@/components/Spinner';

const Page = () => {
  const [teams, setTeams] = useState<TeamMember[]>([]);
  const [formData, setFormData] = useState<TeamMember>({
    title: '',
    description: '',
    imageSrc: '',
    id: 0,
    name: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const supabase = createClient();

  const handleEdit = (team: TeamMember): void => {
    setFormData({
      title: team.title,
      description: team.description,
      imageSrc: team.imageSrc,
      id: team.id,
      name: team.name,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const fetchTeams = useCallback(async () => {
    const { data, error }: { data: TeamMember[] | null; error: PostgrestError | null } =
      await supabase.from('Team').select('*').order('id', { ascending: true });

    if (data) {
      setTeams(data);
    }
  }, [supabase]);

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (file) {
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('images')
          .upload(`Team/${file.name}`, file);

        if (uploadError) {
          throw new Error(uploadError.message);
        }

        const fileUrl = supabase.storage.from('images').getPublicUrl(`Team/${file.name}`).data
          ?.publicUrl;

        const { data: existingBenefit, error: fetchError } = await supabase
          .from('Team')
          .select('*')
          .eq('title', formData.title)
          .single();

        if (fetchError && fetchError.code !== 'PGRST116') {
          throw new Error(fetchError.message);
        }

        if (existingBenefit) {
          const { error: updateError } = await supabase
            .from('Team')
            .update({ ...formData, imageSrc: fileUrl })
            .eq('title', formData.title);

          if (updateError) {
            throw new Error(updateError.message);
          }
        } else {
          const { error: insertError } = await supabase
            .from('Team')
            .insert([{ ...formData, imageSrc: fileUrl }]);

          if (insertError) {
            throw new Error(insertError.message);
          }
        }

        fetchTeams();
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!teams.length) {
    return (
      <Container className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
        <Spinner />
      </Container>
    );
  }

  return (
    <PageContent
      teams={teams}
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
