import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Sidebar from "./Tugas/Routing/Sidebar";
import App from "./App"
import Form1 from "./Form1"
import Lifecycle from "./Lifecycle"
import Hooks from "./Hooks"
import Routee from "./Tugas/Routing/index"

const Routing = () => {
    return (
        <div>
            <Router>
                <Sidebar />
                <Switch>
                    <Route exact path="/" children={() => <Routee />} />
                    <Route path="/style" children={() => <App /> } />
                    <Route path="/form" children={() => <Form1 /> } />
                    <Route path="/lifecycle" children={() => <Lifecycle /> } />
                    <Route path="/hook" children={() => <Hooks /> } />
                </Switch>
            </Router>
        </div>
    )
}

export default Routing;