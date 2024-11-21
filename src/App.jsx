import { useState } from 'react';
import items from './assets/items.json';
import Bellow from './Bellow';

function App() {
  const [lastClicked, setLastClicked] = useState('None');

  return (
    <div className="flex flex-col justify-center items-center min-h-screen my-10">
      <h1>Last Clicked: {lastClicked}</h1>
      <Bellow
        data={items}
        filterKeyword=""
        isOpen={false}
        underline={true}
        showWordCount
        setLastClicked={setLastClicked}
        // onClick={(value) => console.log(value)}
      />
    </div>
  );
}

export default App;
