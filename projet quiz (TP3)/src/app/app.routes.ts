import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Game } from './game/game';
import { Score } from './score/score';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'game', component: Game },
    { path: 'score', component: Score }
];
