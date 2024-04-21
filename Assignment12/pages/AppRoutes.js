import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './Home';
import { HomeSummary } from './HomeSummary';
import { Rooms } from './Rooms';
import { RoomSummary } from './RoomSummary';
import { Contents } from './Contents';
import { ContentsSummary } from './ContentsSummary';
import { Inventory } from './Inventory';
import { InventorySummary } from './InventorySummary';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/">
                    <HomeSummary />
                </Route>
                <Route path="/">
                    <Rooms />
                </Route>                    
                <Route path="/">                
                    <RoomSummary />
                </Route>                    
                <Route path="/">                
                    <Contents />
                </Route>                    
                <Route path="/">                
                    <ContentsSummary />
                </Route>                    
                <Route path="/">                
                    <Inventory />
                </Route>                    
                <Route path="/">                
                    <InventorySummary />
                </Route>
            </Routes>
        </Router>
    )
}