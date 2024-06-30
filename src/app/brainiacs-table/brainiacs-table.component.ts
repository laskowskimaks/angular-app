import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPlus,
  faUserGroup,
  faTrashCan,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { HttpClientModule } from '@angular/common/http';
import { DeleteUserModalComponent } from '../modals/delete-user-modal.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddBrainiacModalComponent } from '../modals/add-brainiac-modal/add-brainiac-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateBrainiacModalComponent } from '../modals/update-brainiac-modal/update-brainiac-modal.component';

@Component({
  selector: 'app-brainiacs-table',
  standalone: true,
  templateUrl: './brainiacs-table.component.html',
  styleUrls: ['./brainiacs-table.component.scss'],
  imports: [
    FontAwesomeModule,
    HttpClientModule,
    CommonModule,
    DeleteUserModalComponent,
    AddBrainiacModalComponent,
    ReactiveFormsModule,
  ],
  providers: [NgbActiveModal],
})
export class BrainiacsTableComponent implements OnInit {
  faUserGroup = faUserGroup;
  faPlus = faPlus;
  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;

  usersList: User[] = [];
  userService: UserService = inject(UserService);
  userIdToDelete: any;
  userToDelete: any;
  user: any;

  private modalService = inject(NgbModal);

  createUser() {
    const modalRef = this.modalService.open(AddBrainiacModalComponent);
    modalRef.componentInstance.usersList = this.usersList;
  }

  updateUser(user: User) {
    const modalRef = this.modalService.open(UpdateBrainiacModalComponent);
    modalRef.componentInstance.user = user;
    modalRef.componentInstance.usersList = this.usersList;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe({
      next: (users: User[]) => {
        this.usersList = users;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
    });
  }

  setUserIdToDelete(id: number) {
    this.userIdToDelete = id;
  }

  async openDeleteModal(user: any) {
    this.userToDelete = user;
    const modalElement = document.getElementById('deleteUserModal');
    if (modalElement) {
      const { Modal } = await import('bootstrap');
      const modal = new Modal(modalElement);
      modal.show();
    }
  }

  deleteUser() {
    if (this.userToDelete) {
      this.userService.deleteUser(this.userToDelete.id).subscribe({
        next: () => {
          this.usersList = this.usersList.filter(
            (u) => u.id !== this.userToDelete.id
          );
          this.userToDelete = null;
        },
        error: (err) => {
          console.error('Error deleting user', err);
        },
      });
    }
  }
}
