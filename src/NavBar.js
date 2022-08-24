import {Link, useMatch, useResolvedPath} from "react-router-dom"
import Logo from "./RELX 1 (LOGO).svg";
import Text from "./RELX 1 (TEXT).svg";
import {
  Image
} from "@aws-amplify/ui-react";


export default function NavBar({singOut}) {
	return (
	  <nav className="nav">
		<Link to="/" className="site-title">
			<Image src={Logo} className="logo" alt="RELINK" />
			<Image src={Text} className="text" alt="RELINK" />
		</Link>

		<ul>
			<CustomLink to="/">Home</CustomLink>
			<CustomLink to="/Scores">Scores</CustomLink>
			<CustomLink to="/Experts">Experts</CustomLink>
			<CustomLink to="/Skills">Skills</CustomLink>
			<CustomLink to="/SignOut" onClick={logout}>SignOut</CustomLink> 
		</ul>
	  </nav>
	)
}

function CustomLink ({to, children, ...props}) {
	
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({ path:resolvedPath.pathname, end:true })

	return (
	<li className={isActive ? "active" : ""}>
		<Link to={to} {...props}>
		  {children}
		</Link>
	</li>
	)
}

function logout(event) {
	localStorage.clear();
	window.location.href = '/';
}