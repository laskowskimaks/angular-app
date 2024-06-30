import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-update-brainiac-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-brainiac-modal.component.html',
  styleUrls: ['./update-brainiac-modal.component.scss'],
})
export class UpdateBrainiacModalComponent {
  @Input() user!: User;
  @Input() usersList!: User[];

  form: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UserService
  ) {
    this.form = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    if (this.user) {
      this.form.patchValue(this.user);
    }
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  submitUpdate() {
    if (this.form.valid) {
      const updatedUser: User = {
        ...this.user,
        ...this.form.value,
      };

      this.userService.updateUser(updatedUser).subscribe(
        (response) => {
          console.log('User updated successfully', response);
          const index = this.usersList.findIndex((u) => u.id === response.id);
          if (index !== -1) {
            this.usersList[index] = response;
          }
          this.activeModal.close('Save click');
        },
        (error) => {
          console.error('Error updating user', error);
        }
      );
    }
  }
}
