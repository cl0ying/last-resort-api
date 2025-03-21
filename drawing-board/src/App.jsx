import React from 'react';
import DrawingBoard from './components/DrawingBoard';

const App = () => {
  const [tool, setTool] = React.useState('pen');

  return (
    <div>
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="pen">Pen</option>
        <option value="eraser">Eraser</option>
      </select>
      <DrawingBoard tool={tool} />
    </div>
  );
};

export default App;
