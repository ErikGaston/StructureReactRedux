import React, { Suspense, lazy } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LoadingPage from "./components/atoms/LoadingPage/LoadingPage";
import background from './assets/images/background.png';

const Home = lazy(() => import('./pages/Home/index'));

export const routes = (
    <TransitionGroup style={{ minHeight: '100vh' }}>
        <CSSTransition timeout={500} >
            <Suspense fallback={<LoadingPage background={background} />}>
                <Routes >
                    {/*Rutas publicas*/}
                    <Route index path="/" exact element={<Home />} />

                    {/*Rutas privadas*/}
                    <Route path="/private" element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    } />

                    <Route path="*" element={<Home />} />
                </Routes>
            </Suspense>
        </CSSTransition>
    </TransitionGroup>
);