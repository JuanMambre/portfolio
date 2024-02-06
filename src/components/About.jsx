

const About = () => {
  return (
    <div name='about' className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4  border-cyan-500">About Me</p>
            </div>
            <p className="text-2xl mt-20">
              Hello! My name is Juan Cruz Mambretti from Bahia Blanca, Buenos Aires -
              Argentina. I am a passionate Front End Developer who loves learn, create
              & design websites. I also stand out for my communication skills,
              teamwork, and problem solving.
            </p>

            <br/>

            <p className="text-xl">
              When I was finishing my studies at HENRY, I was selected out of +400
              students by the Henry staff, to be part of a project called Real
              Project, which consisted of creating a real project for an emerging
              company, in my case this project was called Soy Puebla and it was for
              the Puebla del Mar company. At the moment I'm still studying ReactJs/Native
              in Coderhouse, to continue perfecting myself in this world that I
              love so much
            </p>
        </div>
    </div>
  )
}

export default About