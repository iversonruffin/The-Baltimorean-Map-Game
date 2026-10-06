import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  template: `
    <div class="progress-bar-track" role="progressbar" [attr.aria-valuenow]="pct" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar-fill" [style.width.%]="pct"></div>
    </div>
    <span class="progress-bar-label">{{ pct }}%</span>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .progress-bar-track {
        flex: 1;
        height: 10px;
        border-radius: 6px;
        background: rgba(122, 90, 52, 0.15);
        overflow: hidden;
      }
      .progress-bar-fill {
        height: 100%;
        background: linear-gradient(90deg, #a8641a, #d98e2b);
        transition: width 0.4s ease;
      }
      .progress-bar-label {
        font-size: 12px;
        font-weight: bold;
        color: #4a3320;
        min-width: 32px;
        text-align: right;
      }
    `,
  ],
})
export class ProgressBarComponent {
  @Input() pct = 0;
}
