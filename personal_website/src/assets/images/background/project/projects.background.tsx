import Image from 'next/image';

export const ProjectsBackground = () => {
  return (
    <Image
      id="img-projects-bg"
      src={
        'https://cdn.sanity.io/images/tk1o3drt/production/169c1cf5913d8095f0bab544e051bbd7ff082b21-4756x3535.png?w=2000&fit=max&auto=format'
      }
      width={1920}
      height={1080}
      quality={100}
      alt="project showroom background"
      className="min-w-fit w-fit max-h-full h-fit object-cover absolute left-0 right-0 top-0 bottom-0 -z-50"
    />
  );
};
