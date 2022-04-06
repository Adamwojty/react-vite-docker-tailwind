import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

function RouteComp({title}: {title: string}) {
  return (
    <div>
      <h1 className="text-xl">{title}</h1>
    </div>
  )
}

function App() {
  return (
    <main
      className="flex flex-col justify-center align-middle"
      data-testid="app body"
    >
      <BrowserRouter>
        <div className="flex gap-2">
          <Link to="/">Home Page</Link>
          <Link to="/1">Page 1</Link>
          <Link to="/2">Page 2</Link>
        </div>
        <Routes>
          <Route path="/" element={<RouteComp title="Home Page" />} />
          <Route path="/1" element={<RouteComp title="Page 1" />} />
          <Route path="/2" element={<RouteComp title="Page 2" />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
