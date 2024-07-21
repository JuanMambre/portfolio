const About = () => {
  return (
    <div
      name='about'
      className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4  border-cyan-500'>
            About Me
          </p>
        </div>
        <p className='text-2xl mt-20'>
          Hello! I'm Juan Cruz Mambretti, a passionate developer with a strong
          academic and professional background in web/mobile development. I
          began my journey in technology at HENRY, where I was selected from
          over 400 students for my outstanding performance. I furthered my
          education at Coderhouse, achieving a remarkable 9.5 GPA in the
          Frontend Developer program.
        </p>

        <br />

        <p className='text-xl'>
          In addition to my academic achievements, I have enhanced my skills
          with a specialized course in C# offered by Educación IT. Currently, I
          work as a softwre dev at Emunah Fintech, where I apply my knowledge to
          create innovative and visually appealing software solutions.
        </p>
        <br />
        <p className='text-xl'>
          My focus is on crafting digital experiences that blend aesthetic
          design with robust functionality. I am continuously exploring new
          technologies and methodologies to stay current in this dynamic field.
          I am excited about future opportunities and eager to contribute my
          expertise and skills to the success of new projects!
        </p>
      </div>
    </div>
  )
}

export default About
