import { Link } from "react-router-dom";
import appLogo from '../assets/app-logo.png';
import './Common.css';
//
const HomePage = () => {
  return (
 		<div className="page_wrap_gp">
			<div className="page_torso_gp">
				<img src={appLogo} alt="app logo" />
			</div>
			<div className="page_nav_footer_gp">
				<div>
					<br/>
					<h1>Welcome to the Home page</h1>
					<Link to="/about" className="text_left"> About page </Link>
					<Link to="/wallet" className="text_right"> Wallet page </Link>
					<br/> <br/>
					<Link to="/identity-test" className="text_left"> Identity Test page </Link>
					<Link to="/identity-wallet" className="text_right"> Identity Wallet page </Link>
				</div>
			</div>
		</div>
  );
}
//
export default HomePage;