import Error from "../../pages/Error";

function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={Home/>}/>
                <Route path="about" element={About/>}/>
                <Route path="card" element={CardInfo/>}/>
                <Route path="*" element={Error/>}/>
            </Routes>
        </Router>
)
}