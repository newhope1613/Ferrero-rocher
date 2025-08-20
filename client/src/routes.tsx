import PreGame from "./pages/PreGames";
import MainPage from "./pages/MainPage";
import Registration from "./pages/Registration";
import Game from "./pages/Game";
import {
    CHECK_REGISTRATION,
    PRE_GAME,
    MAIN_PAGE,
    GAME,
    PRIZE,
    DIGITIAL,
    EMPTY,
    AGAIN,
    CONFIRMATIONS,
    BANNER,
} from "./utils/endPoints";
import Prize from "./pages/resultGame/Prize";
import Digitial from "./pages/resultGame/Digitial";
import Empty from "./pages/resultGame/Empty";
import Again from "./pages/resultGame/Again";
import Confirm from "./pages/resultGame/Confirm";
import Banner from "./pages/Banner";

export const routes = [
    {
        path: BANNER,
        Component: Banner,
    },
    {
        path: MAIN_PAGE,
        Component: MainPage,
    },
    {
        path: PRE_GAME,
        Component: PreGame,
    },
    {
        path: CHECK_REGISTRATION,
        Component: Registration,
    },
];

export const game = [
    {
        path: GAME,
        Component: Game,
    },
    {
        path: PRIZE,
        Component: Prize,
    },
    {
        path: DIGITIAL,
        Component: Digitial,
    },
    {
        path: EMPTY,
        Component: Empty,
    },
    {
        path: AGAIN,
        Component: Again,
    },
    {
        path: CONFIRMATIONS,
        Component: Confirm,
    },
];