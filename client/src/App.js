import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import NoteDetails from "./components/NoteDetails";
import NoteList from "./components/NoteList";

const App = () => {
  return (
    <Router>
      <Layout>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <NoteList />
          </Route>
          <Route path="/notes/:noteId">
            <NoteDetails />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
