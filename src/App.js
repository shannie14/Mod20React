import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
// import { useInsertionEffect } from 'react';

const styles = {
  body: {
    backgroundColor: '#f5ebe0',
  },
};

function App() {
  return (
    <div style={styles.body}>
      <div className="App">
        <Header />
        <Content />
        <Footer />

      </div>
    </div>
  );
}

export default App;

// useEffect(
//   )