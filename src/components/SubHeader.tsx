import { Link } from "react-router-dom";
import SNJlSimboloBranco from "../assets/SNJlSimboloBranco.png";
import { GiWizardStaff } from "react-icons/gi";
import { GiBattleGear } from "react-icons/gi";
import { IoIosAdd, IoIosLink, IoMdPersonAdd } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";

type SubHeaderProps = {
  twstyle: string;
  showicon: boolean;
};

export function SubHeader(props: SubHeaderProps) {
  return (
    <div className={props.twstyle}>
      <Link
        className="text-white flex flex-col justify-center focus:text-red-600"
        to="/">
        <div className="">
          <img
            className={`h-8 w-8 ${props.showicon ? "static" : "hidden"}`}
            alt="SNJ"
            src={SNJlSimboloBranco}
          />
        </div>
        Guilda
      </Link>
      <Link
        className="text-white flex flex-col justify-center focus:text-red-600"
        to="/rules">
        Regras
      </Link>
      <Link
        className="text-white flex flex-col justify-center focus:text-red-600 "
        to="/staff">
        <GiWizardStaff
          className={`${props.showicon ? "static" : "hidden"} `}
          size={30}
        />
        Staff
      </Link>
      <Link
        className="text-white flex flex-col justify-center focus:text-red-600"
        to="/uc">
        <GiBattleGear
          className={`${
            props.showicon ? "static" : "hidden"
          } focus:text-red-600`}
          size={30}
        />
        Cores
      </Link>
      <Link
        className="text-white flex flex-col justify-center focus:text-red-600"
        to="/uc">
        <IoIosLink
          className={`${
            props.showicon ? "static" : "hidden"
          } focus:text-red-600`}
          size={30}
        />
        {`Links ${props.showicon ? "" : "Úteis"}`}
      </Link>
      <Link
        className="text-white flex flex-col justify-center focus:text-red-600 items-center"
        to="/uc">
        <FaCalendar
          className={`${
            props.showicon ? "static" : "hidden"
          } focus:text-red-600`}
          size={30}
        />
        Eventos
      </Link>
      <Link
        className="text-white flex flex-col justify-center focus:text-red-600 items-center"
        to="/uc">
        <IoMdPersonAdd
          className={`${
            props.showicon ? "static" : "hidden"
          } focus:text-red-600`}
          size={30}
        />
        {`Junte-se ${props.showicon ? "" : "à Nós"}`}
      </Link>
    </div>
  );
}
