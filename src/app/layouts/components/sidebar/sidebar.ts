import { NgOptimizedImage } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { NAV_SECTIONS, NavSection } from '@core/models/nav.model';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, BadgeModule, TooltipModule, NgOptimizedImage],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  collapsed = input<boolean>(false);
  mobileOpen = input<boolean>(false);
  mobileClose = output<void>();

  readonly sections: NavSection[] = NAV_SECTIONS;

  closeMobile() {
    this.mobileClose.emit();
  }
}
