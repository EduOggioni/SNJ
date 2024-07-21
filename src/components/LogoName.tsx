import SNJlSimboloCor from "../assets/SNJlSimboloCor.png";
import SNJlogoBranco from "../assets/SNJlogoBranco.png";
import { Link } from "react-router-dom";

export function LogoName() {
  return (
    <div>
      <Link to="/">
        <div className="h-full flex items-center ml-5 md:ml-60 md:left ">
          <img className=" h-full" alt="SoNoJob" src={SNJlSimboloCor} />
          <img
            className=" h-4/6 fill-white"
            alt="SoNoJob"
            src={SNJlogoBranco}
          />
        </div>
      </Link>
    </div>
  );
}
