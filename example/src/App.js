import React from 'react';
import Resizer from 're-resizable';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%', backgroundColor: '#fafafa' }}>
        <div style={{ position: 'absolute', left: '100px', top: '100px', backgroundColor: '#eaeaea', width: '500px', height: '500px', overflow: 'auto' }}>
          <Resizer><div style={{ width: '100%', height: '100%', backgroundColor: 'red' }}>hello world</div></Resizer>
        </div>
      </div>
    );
  }
}

export default App;
