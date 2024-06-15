import Image from 'next/image';
const Banner2 = () => {
    return (

            <div
            className='container mx-auto xl:px-0 flex items-center justify-center dark:bg-[#171717]'
          >
            <Image
              src='/img/plant5.jpeg'
              alt='Plant'
                width={'1920'}
                height={'1080'}
              className="relative z-0 w-full  bg-contain bg-center bg-no-repeat sm:rounded-lg"
            />

          </div>
        
    )
}
export default Banner2;