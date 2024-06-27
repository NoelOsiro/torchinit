import React from 'react'
import { SectionTitle } from './SectionTitle'
import { Benefits } from "@/components/Benefits";
import { createClient } from '@/utils/supabase/server';
import { Container } from './Container';
import Spinner from './Spinner';
import { PostgrestError } from '@supabase/supabase-js';

interface BenefitPoint {
    desc: string;
    icon: string;
    title: string;
  }
  
  interface Benefit {
    id: number;
    title: string;
    button: boolean;
    desc: string;
    image: string;
    imagePos: 'left' | 'right';
    Benefits_points: BenefitPoint[];
  }

const BenefitsSection = async () => {
    const supabase = createClient();
    const { data: benefits, error }:{data:Benefit[]|null,error:PostgrestError|null} = await supabase
    .from('Benefits')
    .select(`
      *,
      Benefits_points (
        title,
        desc,
        icon
      )
    `)
    .order('id', { ascending: true });
    if (!benefits) {
        return (
            <Container className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
                <Spinner />
            </Container>
        )
    }
  return (
    <>
        <SectionTitle
        preTitle="What we do"
        title="Dedication to catalyzing transformative attitudes, and equipping individuals"
      >
        Torch Initiatives is dedicated to social responsibility, advocating for positive youth
        attitudes and aptitudes while championing community sustainability. We emphasize the
        proper utilization of community resources, nurturing positive cultures, and responsible
        stewardship.
      </SectionTitle>
        {benefits.map((benefit, index) => (
            <Benefits key={index} data={benefit} />
        ))} 
    </>
  )
}

export default BenefitsSection