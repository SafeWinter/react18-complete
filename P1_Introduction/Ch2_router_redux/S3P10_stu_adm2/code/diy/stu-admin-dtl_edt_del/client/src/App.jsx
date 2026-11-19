import {Routes, Route, Navigate, NavLink} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import AddOrEdit from './components/AddOrEdit';

import './css/App.css';
import Detail from './components/Detail';

function App() {
  return (
    <div id="app" className="container">
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">学生管理系统</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <NavLink to="/home">主页</NavLink>
              <NavLink to="/about">关于我们</NavLink>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <NavLink to="/add">添加学生</NavLink>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/add' element={<AddOrEdit />} />
        <Route path='/edit/:id' element={<AddOrEdit />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/' element={<Navigate to="/home" replace={true} />} />
      </Routes>
    </div>
  );
}

export default App;
