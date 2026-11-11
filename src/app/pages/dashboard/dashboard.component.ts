import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: false
})

/**
 * Dashboard Component — inicio de la zona privada
 */
export class DashboardComponent implements OnInit {

  breadCrumbItems!: Array<{ label?: string; active?: boolean }>;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'yourJumbo' },
      { label: 'Dashboard', active: true }
    ];
  }

}
