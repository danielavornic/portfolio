const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "SCSS"];
const firstColumnSkills = skills.slice(0, 3);
const secondColumnSkills = skills.slice(3);

const SkillItem = ({ skill }: { skill: string }) => (
  <div className="flex items-center space-x-2">
    <div className="w-1 h-1 rounded-full bg-lavender" />
    <span className="text-subtext0">{skill}</span>
  </div>
);

const TechList = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-8">
      <div className="flex flex-col space-y-3 mb-3 md:mb-0">
        {firstColumnSkills.map((skill) => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </div>
      <div className="flex flex-col space-y-3">
        {secondColumnSkills.map((skill) => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default TechList;
