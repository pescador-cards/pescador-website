import React, { useEffect, useState } from "react";
import { Container } from "./components/container/Container";
import { Header } from "./components/header/Header";
import { v4 as uuid } from "uuid";
import { NavItem } from "./components/navItem/NavItem";
import { Route, Switch, useLocation } from "react-router-dom";
import { DeckCardView } from "./views/deckCardView/DeckCardView";
import { DeckView } from "./views/deckView/DeckView";

import "./App.css";
import "./Colors.css";

function App() {
    const location = useLocation();

    const [nav, setNav] = useState<JSX.Element[]>([]);

    useEffect(() => {
        // Do some hacky magic to generate the navbar links
        const newNav = [<NavItem key={uuid()} text="Decks" target="/" />];
        const pathnames = location.pathname.split("/").filter((v) => v.trim() !== "");
        pathnames.forEach((v, i) => {
            const text = v;
            const target = pathnames.filter((_, j) => j <= i).join("/");
            newNav.push(<NavItem key={uuid()} text={text} target={target} />);
        });
        setNav(newNav);
    }, [location]);

    return (
        <div className="App">
            <Container>
                <Header nav={nav} />
                <Switch>
                    <Route exact path="/">
                        <DeckCardView />
                    </Route>
                    <Route path="/:deckId">
                        <DeckView />
                    </Route>
                </Switch>
            </Container>
        </div>
    );
}

export default App;
