/*eslint no-unused-vars: 0*/
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';
import Rate from './components/Rate';
import List from './components/List';
import * as API from './Utilities/ApiGet';

const App = () => {

   const [theCats, setTheCats] = useState([]);
   const [listCats, setListCats] = useState({});
   const [listVotes, setListVotes] = useState({});
   const [tally, setTally] = useState({1:0, 0:0});
   const [oldKitty, setoldKitty] = useState([])
            
    // get the total votes for Up or Down
    const getNice = (checkNice) => {
        let cute = 0;
        for (let key in listVotes) {
            if (typeof key !== "undefined") {
                if (listVotes[key].value === checkNice) {
                    cute++;
                }
            }
        }
        return cute;
    }

    useEffect(()=>{
        API.getCats().then(res => {
            setTheCats(res.data.cats)
            setListCats(res.data.cats)
            });
        },[]);
    //     API.getVotes().then(res => {
    //         setListVotes(res.data)
    //     }).then(() => {
    //         let catList = Object.assign({}, listCats)
    //         // loop the top level objects
    //         for (let key in listVotes) {
    //             // loop each key
    //             for (let subkey in listVotes) {
    //                 if (listVotes.hasOwnProperty(subkey)) {
    //                     if (typeof listVotes[key].value !== 'undefined') {
    //                         let id = listVotes[key].image_id;
    //                         let vote = listVotes[key].value;
    //                         for (let key in catList) {
    //                             // eslint-disable-next-line
    //                             for (let subkey in catList) {
    //                                 if (catList[key].image_id === id) {
    //                                     catList[key].value = vote;
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         // set the state to new object with merged values
    //         setListCats({ listCats : catList })
    //         // create a new object for tally
    //         let newTally = {
    //             1: getNice(1),
    //             0: getNice(0)
    //         }
    //         // set the tally to the new values
    //         setTally(newTally);
    //     })
    // }

   const updateVoteCount = (kitty, newValue)=>  {
        let oldKitty = theCats[kitty];
        let oldKittyValue = oldKitty.value;
        let newKitty = oldKitty.value = newValue;
        if (oldKittyValue !== newValue) {
            setoldKitty(newKitty)
        }
        console.log(theCats[kitty].value)
    }

        return (
        <Switch>
            <Route exact path="/" render={props => <Home {...props} list={theCats} tally={tally} />} />
            <Route path="/rate" render={props => <Rate {...props} list={theCats} tally={tally} updateVoteCount={updateVoteCount} />} />
            <Route path="/list" render={props => <List {...props} list={theCats} tally={tally} />} />
          </Switch>

        );
        }
export default App;