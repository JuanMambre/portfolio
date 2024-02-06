import css from '../assets/experiencie/css-3.png'
import html from '../assets/experiencie/html.png'
import react from '../assets/experiencie/reactjs_logo_icon_170805.png'
import tailwind from '../assets/experiencie/file_type_tailwind_icon_130128.png'
import js from '../assets/experiencie/js.png'
import gitHub from '../assets/experiencie/github-logo_icon-icons.com_73546.png'

 const Experiencie = () => {
  const icons = [
    {
      id: 1, 
      src: html,
      title: "HTML",
      style: 'shadow-orange-500',
    },
    {
      id: 2, 
      src: css,
      title: "CSS",
      style: 'shadow-blue-500',
    },
    {
      id: 3, 
      src: react,
      title: "REACT",
      style: 'shadow-sky-500 ',
    },
    {
      id: 4, 
      src: tailwind,
      title: "TAILWIND",
      style: 'shadow-sky-400',
    },
    {
      id: 5, 
      src: js,
      title: "JAVASCRIPT",
      style: 'shadow-yellow-500',
    },
    {
      id: 6, 
      src: gitHub,
      title: "GITHUB",
      style: 'shadow-gray-500',
    },
  
  ]
  return (
    <div name='experiencie' className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className=" max-w-screen-lg mx-auto p4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className=" text-4xl font-bold  border-b-4 border-cyan-500 p-2 inline">Experiencie</p>
          <p className=" py-6">These are the technologies I've worked with</p>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py8 px-12 sm:px-0">

          {icons.map(({id, src, title, style}) => (
            
          <div key={id} 
          className={`shadow-md hover:scale-105 duration-500 py-2  rounded-lg ${style}`}>
          
                    <img src={src} alt='' className=' w-20 mx-auto'/> 
                    <p className=' mt-4'>{title}</p>   
                  
          </div>
          )
          )}

        </div>
      </div>
    </div>
  )
}
export default Experiencie