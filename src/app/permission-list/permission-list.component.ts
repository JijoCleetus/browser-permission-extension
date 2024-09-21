import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-permission-list',
  standalone: true,
  imports: [],
  templateUrl: './permission-list.component.html',
  styleUrl: './permission-list.component.css',
})
export class PermissionListComponent {
  @Input() name: string = '';
}
