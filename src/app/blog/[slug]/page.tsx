import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import blogData from '@/components/blogData';
import Image from 'next/image';

export function generateStaticParams() {
    return blogData.map(blog => ({ slug: blog.slug }));
}

interface BlogPageProps {
    params: { slug: string };
}

export default function BlogPage({ params }: BlogPageProps) {
    const { slug } = params;
    const blog = blogData.find((blog) => blog.slug === slug);

    if (!blog) {
        return <p>Blog post not found</p>;
    }

    return (
        <>
            <div 
                className='w-full h-96 relative flex items-center justify-center' 
                style={{ 
                    backgroundImage: `url(${blog.images[0].src})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <h1 className='text-white font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase'>
                    {blog.title}
                </h1>
            </div>
            <Container>
                <SectionTitle
                    preTitle="What's Cooking"
                    title={blog.contents[0]}
                >
                </SectionTitle>
                <div className='float-left mr-10 mb-2 mt-8'>
                    <Image 
                        src={blog.images[1].src} 
                        alt="Blog Image 1" 
                        width={400} 
                        height={300} 
                        className='rounded-md shadow-lg object-cover'
                    />
                </div>
                <p className="mt-10 mb-2 py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                    {blog.contents[1]}<br/>
                </p>
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                    {blog.contents[2]}<br/>
                </p>
                <div className='float-right ml-10 mb-2 '>
                    <Image 
                        src={blog.images[2].src} 
                        alt="Blog Image 2" 
                        width={400} 
                        height={300} 
                        className='rounded-full shadow-lg w-64 h-64 object-cover'
                    />
                </div>
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                    {blog.contents[3]}
                </p>
            </Container>
        </>
    );
}
