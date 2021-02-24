import Scarecrow from './img/Scarecrow.png'
function App() {
  return (
    <>
      <header>
        <h1 className="title">404 Not Found</h1>
      </header>
      <main>
        <div className="item-image">
          <img src={Scarecrow} alt="Scarecrow" srcset="" />
        </div>

        <h1 className="article-header">I have bad news for you</h1>
        <p className="article-body">The page you are looking for might be removed or is temporarily
            unavailable</p>

        <button>Back to homepage</button>
      </main>
      <footer>
        created by @kenriortega - devChallenges.io
    </footer>
    </>
  );
}

export default App;
