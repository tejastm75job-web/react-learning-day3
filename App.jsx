// src/App.jsx
import './App.css';

function Header() {
  return (
    <div className="Header">
      <h1>Hello i am Tejas computer science student</h1>
      <p>day 3 of learning react</p>


      <img className="profile-pic" src='tej.jpg' alt='Tejas' />
      <button className='btn'>click me</button>

    </div>
  );
}
function Footer()
{
  return (
    <div className="Footer">
      <h1>react learner</h1>
      <p>Thank you for visiting my profile</p>
      <footer><p>© 2023 Tejas. All rights reserved.</p></footer>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
