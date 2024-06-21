import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css'],
})
export class StaffLIstComponent {
  users = [
    {
      name: 'Jean marc',
      role: 'Admin',
      created_at: '12/09/2020',
      status: 'active',
      avatar:
        'https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/8_yfarwk.jpg',
    },
    {
      name: 'Marcus coco',
      role: 'Designer',
      created_at: '01/10/2012',
      status: 'active',
      avatar:
        'https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/4_iauuag.jpg',
    },
    {
      name: 'Eric marc',
      role: 'Developer',
      created_at: '02/10/2018',
      status: 'active',
      avatar:
        'https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/3_iscinv.jpg',
    },
  ];

  filteredUsers = this.users;

  searchTerm = '';

  performSearch() {
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase().trim();

    // Lọc dữ liệu theo từ khóa tìm kiếm
    this.filteredUsers = this.users.filter(user =>
      JSON.stringify(user).toLowerCase().includes(lowerCaseSearchTerm)
    );
  }
}
