import '@/Components/DashBoard/Views/Res/DashBoardView';
import React from 'react';
import { Container } from 'react-bootstrap';

export default class DashBoardView extends React.Component {
  constructor(props) {
    super(props);
    this.status = {};
  }

  render() {
    return (
      <div className="dashboardview-background-image h-100">
        <Container className="h-100 w-25">DashBoard</Container>
      </div>
    );
  }
}
