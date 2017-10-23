import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Circles from "./Circles.jsx";
import Modal from 'material-ui/Dialog';


// const Dashboard = ({ secretData }) => (
class Dashboard extends React.Component {

	constructor(props){
		super(props);
		this.state = {
	    	open: true,
		};

	

		this.handleClose = () => {
		  	this.setState({open: false});
	  	};

	};


	render (){
		return(

			<div>	
		{//   <Card className="container">
		//     <CardTitle
		//       title="Dashboard"
		//       subtitle="Click on the black canvas, then press a letter or number key to SoundSee."
		//     />

		//     {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
		//   </Card>
		}
			 	<Circles />

			 	<Modal 
			 		title="Click the black canvas, then press a letter or number key to SoundSee."
			 		open= {this.state.open} 
			 		onRequestClose= {this.handleClose}

			 	/>


			</div>






		)
	}

	

};

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
