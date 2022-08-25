import Logo from "../RELX 1 (LOGO).svg";
import {
  Image
} from "@aws-amplify/ui-react";

export default function Home() {
	return <div><h1 className="homeh1">Welcome to RELINK!</h1><Image src={Logo} className="home;logo" alt="RELINK" /></div>;
}