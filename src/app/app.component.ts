import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameDataService } from './game-data.service';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemon-ws';
  errorMessage:string= "";
  
  constructor(private gameDataService: GameDataService){}
  pokeData$ = this.gameDataService.pokeData$;

  gameBoard$ = this.pokeData$.pipe(
    map((pokeData) => {
      // return this.generateNewGameBoardService.buildGameBoard(pokeData);
      return console.log(pokeData)
    }),
    catchError((err) => (this.errorMessage = err))
  );
}
