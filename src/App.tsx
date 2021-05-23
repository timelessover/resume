import { observer } from 'mobx-react';
import { useStore } from '.';
import './App.css';
import { Button } from 'antd';





function App() {
  const store = useStore()
  return (
    <div className="App">
      简历 {store.count}
      <Button onClick={store.increase}>+</Button>
    </div>
  );
}

export default observer(App);
