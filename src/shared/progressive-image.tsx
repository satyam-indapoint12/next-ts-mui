import type { NextPage } from 'next'
import Image from 'next/image'

const ProgressiveImage: NextPage = (props: any) => {

  const { src, alt, width, height  } = props;
  return (

    <div className="relative w-[500px] h-[300px]">
      <Image
        src={src}
        layout="responsive"
        width={width || 200}  
        height={height || 300} 
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
        alt={alt}
        loading="eager"
      />
    </div>
  )
}







export default ProgressiveImage