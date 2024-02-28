import React, { Suspense } from "react";
import { BrowserRouter , Routes , Route, useNavigate } from "react-router-dom";
const Profile = React.lazy(()=> import('./components/Profile'))
const Dashboard = React.lazy(()=> import('./components/Dashboard'))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
          <Route path="/profile" element={<Suspense fallback={"loading..."}><Profile/></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppBar(){
  const navigate = useNavigate();

  return(
    <>
    <button onClick={()=>navigate("/dashboard")} > dashboard</button>
    <button onClick={()=>navigate("/profile")}>profile</button>
    </>
  )
}

export default App;
