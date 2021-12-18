
import './App.css';
import Dictionary from "./Dictionary"
import background from "./background-image.jpg";

function App() {
  return (
    <div className="App">
     <div className="container">
       
       <div className="wrapper" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
          <h1 className="p-2">Dictionary</h1>
          <Dictionary />
       </div>
      <footer className="mb-4">Coded by <a href="https://zen-visvesvaraya-696ae0.netlify.app/index.html" target="_blank" alt="Link to Rachel's website" rel="noreferrer">Rachel Hollingworth</a> and open-sourced on <a href="https://github.com/rachelofyork/dictionary-project" target="_blank" alt="Link to the code on GitHub" rel="noreferrer">GitHub</a></footer>
     </div>
    </div>
  );
}

export default App;
