import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/models/user';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['lastname', 'firstname', 'email', 'phone', 'role', 'bu', 'supprimer'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.refreshList();
  }

  deleteUser(username: string) {
    const confirmModal = this.dialog.open(ConfirmModalComponent);

    confirmModal.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteOneUser(username).subscribe(() => {
          this.refreshList();
        });
      }
    });

  }

  refreshList() {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.dataSource = new MatTableDataSource<User>(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
