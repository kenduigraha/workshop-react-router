const Router = ReactRouter.Router
const Route = ReactRouter.Route
const Link = ReactRouter.Link
const HashHistory = ReactRouter.hashHistory

const App = React.createClass({
  render: function(){
    return(
      <div>
        <ul>
          <li>
            <Link to="/">Ap</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const Home = React.createClass({
  render: function(){
    return(
      <div>
        <App />
        <h2>Componen Home</h2>
      </div>
    )
  }
})

const About = React.createClass({
  render: function(){
    return(
      <div>
        <App />
        <h2>Componen About</h2>
      </div>
    )
  }
})

ReactDOM.render(
  (
    <Router history={HashHistory}>
      <Route path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  ), document.getElementById('content')
)
