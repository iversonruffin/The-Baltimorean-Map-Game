import { Injectable } from '@angular/core';
import { CITY_LOCATIONS, HOTSPOTS } from '../data/game-data';
import { CityLocation, Hotspot } from '../models/game.models';

@Injectable({ providedIn: 'root' })
export class GameDataService {
  private readonly locations: CityLocation[] = CITY_LOCATIONS;
  private readonly hotspots: Hotspot[] = HOTSPOTS;

  getLocations(): CityLocation[] {
    return this.locations;
  }

  getLocation(locationId: string): CityLocation | undefined {
    return this.locations.find((l) => l.id === locationId);
  }

  getHotspotsForLocation(locationId: string): Hotspot[] {
    return this.hotspots.filter((h) => h.locationId === locationId);
  }

  getHotspot(hotspotId: string): Hotspot | undefined {
    return this.hotspots.find((h) => h.id === hotspotId);
  }
}
