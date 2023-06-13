import { Link } from "react-router-dom";
import appLogo from '../assets/app-logo.png';
import './Common.css';
//
const IdentityTestPage = () => {
  return (
 		<div className="page_wrap_gp">
			<div className="page_torso_gp">
				<img src={appLogo} alt="app logo" />
			</div>
			<div className="page_nav_footer_gp">
				<div>
					<br/>
					<h1>Welcome to the Identity Test page</h1>
					<Link to="/home"> Return to the Home page </Link>
				</div>
			</div>
		</div>
  );
}
//
export default IdentityTestPage;