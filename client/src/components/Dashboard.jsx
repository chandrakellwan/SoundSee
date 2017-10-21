import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Circles from "./Circles.jsx";


const Dashboard = ({ secretData }) => (

<div>	
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="Click on the black canvas, then press a letter or number key to SoundSee."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
  </Card>
<Circles />
</div>

);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
