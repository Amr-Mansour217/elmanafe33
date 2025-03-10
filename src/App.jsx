import './App.css';
import React from 'react';
import { Router, Route, Switch } from "wouter";
import useHashLocation from "wouter/use-hash-location";
import Home from './components/home';
import Videos from './components/video';
import Quran from './components/quran';
import Intre from "./components/intre";
import Pdf from "./components/pdf";
import Apps from './components/apps';
import Another from './components/another';

function App() {
  const base = import.meta.env.BASE_URL;
  const useBasename = (hook) => (args) => hook(args.map(arg => base + arg));
  
  return (
    <Router hook={useBasename} location={useHashLocation()}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/videos" component={Videos} />
        <Route path="/quran" component={Quran} />
        <Route path="/library" component={Intre} />
        <Route path="/bigarabicquran" component={Pdf} />
        <Route path="/apps" component={Apps} />
        <Route path="/anotherweb" component={Another} />
      </Switch>
    </Router>
  );
};   

export default App;