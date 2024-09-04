import Image from "next/image";
import { turret } from "@/components/HomePage";

interface TeamCardProp {
  person: { id: number; img: string; name: string; post:string ;position: string };
}

const TeamCard = ({ person }: TeamCardProp) => {
  const { img, name, position } = person;
  return (
    <div className="flex flex-col items-center xl:w-64 gap-1 h-[32vw] max-h-[300px] min-h-[200px] sm:min-h-[250px]   w-[35vw] max-w-[250px] text-sm sm:min-w-[150px]">
      <div className=" border-primary-heading overflow-hidden w-full h-full flex flex-col items-center justify-between">
        <div className="overflow-hidden rounded-2xl  mt-1 sm:mt-2 md:mt-5 max-h-[200px]">
          <Image src={img} alt={`${name}'s photo`}  objectFit="fill" width={300} height={300}/>
        </div>
        <div className="pb-1 sm:pb-2  ">
        <h2 className={`${turret.className}  font-semibold text-center sm:text-base md:text-lg`}>{name}</h2>
        <p className="text-center  md:text-base font-light">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;