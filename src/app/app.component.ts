import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PermissionListComponent } from './permission-list/permission-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PermissionListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'browser-permission-extension';
  private permissions: any = [
    'accelerometer',
    'accessibility-events',
    'ambient-light-sensor',
    'background-sync',
    'camera',
    'clipboard-read',
    'clipboard-write',
    'geolocation',
    'gyroscope',
    'local-fonts',
    'magnetometer',
    'microphone',
    'midi',
    'notifications',
    'payment-handler',
    'persistent-storage',
    'push',
    'screen-wake-lock',
    'storage-access',
    'top-level-storage-access',
    'window-management',
  ];
  browserPermissions: string[] = [];

  ngOnInit() {
    this.processPermissions();
  }

  async processPermissions() {
    for (const permission of this.permissions) {
      this.browserPermissions.push(await this.getPermission(permission));
    }
  }

  async getPermission(permission: PermissionName) {
    try {
      const result = await navigator.permissions.query({ name: permission });
      return `${permission}: ${result.state}`;
    } catch (error) {
      return `${permission} (not supported)`;
    }
  }
}
