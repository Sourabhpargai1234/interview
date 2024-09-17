import React,{Suspense, lazy} from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

const Home=lazy(()=>import('./Home'));
const About=lazy(()=>import('./About'));

export default function App() {
  return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li><Link to='/' />Home</li>
                    <li><Link to='/about' />About</li>
                </ul>
            </nav>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route exact path="/" Component={Home}></Route>
                    <Route path="/bout" Component={About}></Route>
                </Routes>
            </Suspense>
        </div>
    </Router>
  );
}
