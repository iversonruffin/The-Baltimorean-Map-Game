import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LeaderboardEntry } from '../../models/game.models';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="leaderboard">
      <h3>Top 10 — {{ locationId }}</h3>
      <ol *ngIf="entries().length > 0; else empty">
        <li *ngFor="let entry of entries()">
          <span class="rank">#{{ entry.rank }}</span>
          <span class="name">{{ entry.playerName }}</span>
          <span class="score">{{ entry.score }} pts</span>
        </li>
      </ol>
      <ng-template #empty>
        <p class="empty-state">No scores yet — be the first to complete a challenge here!</p>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .leaderboard {
        background: rgba(122, 90, 52, 0.08);
        border: 1px solid rgba(122, 90, 52, 0.25);
        border-radius: 12px;
        padding: 16px;
      }
      h3 {
        margin: 0 0 10px;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #a8641a;
      }
      ol {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      li {
        display: flex;
        gap: 10px;
        font-size: 14px;
        color: #4a3320;
      }
      .rank {
        font-weight: bold;
        width: 28px;
      }
      .name {
        flex: 1;
      }
      .score {
        font-weight: bold;
      }
      .empty-state {
        font-size: 13px;
        opacity: 0.7;
        margin: 0;
      }
    `,
  ],
})
export class LeaderboardComponent {
  @Input({ required: true }) locationId!: string;

  constructor(private progress: ProgressService) {}

  entries(): LeaderboardEntry[] {
    return this.progress.getLeaderboardForLocation(this.locationId);
  }
}
