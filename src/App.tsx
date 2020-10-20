import React from "react";
import "./App.css";
import "./Colors.css";
import { CardList } from "./components/cardlist/CardList";
import { Container } from "./components/container/Container";
import { Header } from "./components/header/Header";

function App() {
    return (
        <div className="App">
            <Container>
                <Header nav={["Decks"]} />
                <CardList />
            </Container>
        </div>
    );
}

export default App;
