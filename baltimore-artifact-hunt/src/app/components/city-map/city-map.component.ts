import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CityLocation } from '../../models/game.models';
import { GameDataService } from '../../services/game-data.service';
import { ProgressService } from '../../services/progress.service';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-city-map',
  standalone: true,
  imports: [CommonModule, RouterLink, ProgressBarComponent],
  templateUrl: './city-map.component.html',
  styleUrl: './city-map.component.css',
})
export class CityMapComponent {
  locations: CityLocation[];

  constructor(private gameData: GameDataService, public progress: ProgressService) {
    this.locations = this.gameData.getLocations();
  }
}
