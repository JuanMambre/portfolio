// import CertificadoZicofy from '../assets/projects/CertificafoZicofy.pdf'
import Puebla from '../assets/projects/Puebla.png'
import pifood from '../assets/projects/pifood.jpg'
import zicoimg from '../assets/projects/zicoimg.jpg'
import lasnereidas from '../assets/images/lasnereidas.jpg'

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: zicoimg,
      deploy: 'https://play.google.com/store/apps/details?id=com.zicofy.app',
      gitHub: 'https://github.com/AgusZicofy/Zicofy-DEF'
    },
    {
      id: 2,
      src: Puebla,
      deploy: 'https://soy-puebla-deploy.vercel.app/home',
      gitHub: 'https://github.com/PuebladelMar/SoyPuebla',
      link: 'https://www.youtube.com/watch?v=q5A-RYEhUAs'
    },
    {
      id: 4,
      src: lasnereidas,
      deploy: 'https://poramoravos.com.ar'
    }
  ]

  return (
    <div
      name='projects'
      className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className=' pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
            Projects
          </p>
          <p className=' py-6'>Check out some of my work right here</p>
        </div>

        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map(({ id, src, link, gitHub, deploy }) => (
            <div
              key={id}
              className=' shadow-md shadow-gray-600 rounded-lg overflow-hidden '
            >
              <img
                src={src}
                alt=''
                className=' rounded-md duration-200 hover:scale-105 max-h-25 w-full object-cover'
              />
              <div className=' flex justify-between px-5 py-5'>
                <button onClick={() => (window.location.href = link)}>
                  Demo
                </button>
                <button onClick={() => (window.location.href = gitHub)}>
                  Code
                </button>
                <button onClick={() => (window.location.href = deploy)}>
                  Deploy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
