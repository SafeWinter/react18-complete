function App() {
  return (
    <>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">学生管理系统</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="/home">主页</a></li>
              <li><a href="/about">关于我们</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/add">添加用户</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
