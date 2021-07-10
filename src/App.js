import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/loginScreen/loginScreen";
import "./_app.scss";
import { useState } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Layout = ({ children }) => {
    const [sidebar, toggleSidebar] = useState(false);

    const handleToggleSidebar = () => toggleSidebar((value) => !value);

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app__container ">
                <Sidebar
                    sidebar={sidebar}
                    handleToggleSidebar={handleToggleSidebar}
                />
                <Container fluid className="app__main ">
                    {children}
                </Container>
            </div>
        </>
    );
};

function App() {
    const { accessToken, loading } = useSelector((state) => state.auth);

    const history = useHistory();

    useEffect(() => {
        if (!accessToken && !loading) {
            history.push("/auth");
        }
    }, [accessToken, loading, history]);

    return (
        <Switch>
            <Route path="/" exact>
                <Layout>
                    <HomeScreen />
                </Layout>
            </Route>

            <Route path="/auth">
                <LoginScreen />
            </Route>

            <Route path="/search">
                <Layout>
                    <h1>Search Results</h1>
                </Layout>
            </Route>

            <Route>
                <Redirect to="/" />
            </Route>
        </Switch>
    );
}

export default App;
