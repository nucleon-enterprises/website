import React, {Component} from 'react';
import './App.css';
// Hello World
import {Grid, GridCell} from '@rmwc/grid';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import NCard from './components/Card'
import NTopBar from './components/TopBar'
import '@rmwc/icon/icon.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import { bindCallback } from 'rxjs';
class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/oi');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };


  render() {
    const styles={
      container:{
        backgroundColor:'black',
        height: '100vh',
        width: '100vw',
      }
    }

    return (
      <div style={styles.container} className="App">
        <NTopBar></NTopBar>

        <Grid>
          <GridCell span={4}></GridCell>
          
          <GridCell align={"middle"} span={2}><NCard  title={'Nucleon Edu'} buttonA={'Confira!'} media={''}></NCard></GridCell>
          <GridCell align={"middle"} span={2}><NCard  title={'Nucleon Build'}  buttonA={'Confira!'} ></NCard></GridCell>
          <GridCell align={"middle"} span={2}><NCard  title={'Nucleon Cyber'}  buttonA={'Confira!'} ></NCard></GridCell>
          <GridCell align={"middle"} span={2}><NCard  title={'Nucleon Cyber'}  buttonA={'Confira!'} ></NCard></GridCell>
          <GridCell align={"middle"} span={2}><NCard  title={'Nucleon Edu'} buttonA={'Confira!'} media={''}></NCard></GridCell>
          <GridCell align={"middle"} span={2}><NCard  title={'Nucleon Build'}  buttonA={'Confira!'} ></NCard></GridCell>
          <GridCell align={"middle"} span={2}><NCard  title={'Nucleon Cyber'}  buttonA={'Confira!'} ></NCard></GridCell>
          <GridCell align={"middle"} span={2}><NCard  title={'Nucleon Cyber'}  buttonA={'Confira!'} ></NCard></GridCell>
          <GridCell align={"middle"} span={2}><NCard  title={'Nucleon Edu'} buttonA={'Confira!'} media={''}></NCard></GridCell>
          <GridCell align={"middle"} span={2}><NCard  title={'Nucleon Build'}  buttonA={'Confira!'} ></NCard></GridCell>
          <GridCell align={"middle"} span={2}><NCard  title={'Nucleon Cyber'}  buttonA={'Confira!'} ></NCard></GridCell>
          <GridCell align={"middle"} span={2}><NCard  title={'Nucleon Cyber'}  buttonA={'Confira!'} ></NCard></GridCell>
        </Grid>

      </div>
    );
  }
}

export default App;