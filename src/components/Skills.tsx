import React, { useState } from 'react';

interface SectionProps {
  title: string;
  skills: { name: string, logo: string }[];
  isOpen: boolean;
  onClick: () => void;
}

const Section: React.FC<SectionProps> = ({ title, skills, isOpen, onClick }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
      <h2 className="text-2xl">{title}</h2>
      <span>{isOpen ? '-' : '+'}</span>
    </div>
    {isOpen && (
      <ul className="list-none text-left mt-2">
        {skills.map(skill => (
          <li key={skill.name} className="mb-1 flex items-center">
            <img src={skill.logo} alt={skill.name} className="w-6 h-6 mr-2" />
            {skill.name}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Skills: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="section min-h-screen flex flex-col justify-center items-center text-center bg-[#111F44] text-white">
      <h1 className="text-4xl mb-4 text-[#61dafb]">Skills</h1>
      <div className="w-full max-w-3xl">
        <Section 
          title="Programming Languages" 
          skills={[
            { name: 'Python', logo: '/python.png' }, 
            { name: 'Java', logo: '/java.png' }, 
            { name: 'C', logo: '/c.png' }, 
            { name: 'R', logo: '/r.png' }
          ]} 
          isOpen={openSection === 'Programming Languages'} 
          onClick={() => toggleSection('Programming Languages')}
        />
        <Section 
          title="Databases" 
          skills={[
            { name: 'MySQL', logo: '/mysql.png' }, 
            { name: 'PostgreSQL', logo: '/postgresql.png' }, 
            { name: 'MongoDB', logo: '/mongodb.png' }
          ]} 
          isOpen={openSection === 'Databases'} 
          onClick={() => toggleSection('Databases')}
        />
        <Section 
          title="Web Development" 
          skills={[
            { name: 'HTML', logo: '/html.png' }, 
            { name: 'CSS', logo: '/css.png' }, 
            { name: 'JavaScript', logo: '/javascript.png' }, 
            { name: 'React', logo: '/react.png' }
          ]} 
          isOpen={openSection === 'Web Development'} 
          onClick={() => toggleSection('Web Development')}
        />
        <Section 
          title="Other Tools" 
          skills={[
            { name: 'Git', logo: '/git.png' }, 
            { name: 'Docker', logo: '/docker.png' }, 
            { name: 'Kubernetes', logo: '/kubernetes.png' }
          ]} 
          isOpen={openSection === 'Other Tools'} 
          onClick={() => toggleSection('Other Tools')}
        />
        <Section 
          title="Data & Machine Learning" 
          skills={[
            { name: 'Pandas', logo: '/pandas.png' }, 
            { name: 'NumPy', logo: '/numpy.png' }, 
            { name: 'Scikit-Learn', logo: '/scikit-learn.png' }
          ]} 
          isOpen={openSection === 'Data & Machine Learning'} 
          onClick={() => toggleSection('Data & Machine Learning')}
        />
      </div>
    </div>
  );
};

export default Skills;
