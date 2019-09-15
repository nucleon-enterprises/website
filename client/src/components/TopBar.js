import React, { Component } from 'react';
import logo from '../PequenoBranco.png'

import {TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarFixedAdjust, TopAppBarActionItem} from '@rmwc/top-app-bar';

export default class NTopBar extends Component {
  render() {
    const styles = {
        nav:{
          textAlign:'center',
          margin:'',
          backgroundColor:"black",
          fontFamily:'',
          fontSize: '2.2rem',
      fontWeight: '1000',
        },
        logo:{
          height: '-webkit-fill-available',
          width: '5vh',
        },
      };
    return (
        <TopAppBar  style={styles.nav}>
        <TopAppBarRow>
          <TopAppBarSection>
          <img src={logo} style={styles.logo} />
            <TopAppBarTitle style={styles.nav}>Nucleon</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
    
    );
  }
}
