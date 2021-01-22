import React from 'react';
import {Banner} from '@shopify/polaris';

export default class Status extends React.Component {
  render() {
    return (
      <Banner
  title="App is successfully installed on your website"
  status="success"
  //action={{content: 'Print label'}}
  //onDismiss={() => {}}
/>
    );
  }
}
