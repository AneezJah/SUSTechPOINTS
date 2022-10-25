import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  componentDidMount () {
    const url = new URL(window.location.href);

    const scene = url.searchParams.get('scene');
    const frame = url.searchParams.get('frame');

    window.editor.show();

    if (scene && frame) {
      window.editor.loadWorld(scene, frame, () => {
        window.editor.onWindowResize();
      });
    }
  }

  componentWillUnmount () {
    window.editor.hide();
  }

  render () {
    return (
      <div>
        <Link to='/user'>user</Link>
      </div>
    );
  }
}

export default App;
