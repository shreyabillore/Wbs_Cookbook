
// import CardsPage from './Component/cardsPage';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';

import CategoryMain from './Components/CategoryMain'

export default function Routes() {
    
     
    return (
        <Switch>
            <Route path="/" exact>          
                <Home/>
            </Route>
            <Route path="/cards/:title" exact>          
                <CategoryMain/>      
            </Route>
            <Route path="/receipedetail/:recipeData" exact>          
                <RecipePage/>      
            </Route>
            
        </Switch>)
}