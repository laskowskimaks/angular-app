import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-user-modal',
  standalone: true,
  template: `
    <div
      class="modal fade"
      id="deleteUserModal"
      tabindex="-1"
      aria-labelledby="deleteUserModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteUserModalLabel">
              Confirm Deletion
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this brainiac?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              style="background-color: #b15b5b"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-danger"
              (click)="confirmDeletion()"
              style="background-color: #44001a"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class DeleteUserModalComponent {
  @Output() deleteConfirmed = new EventEmitter<void>();

  async confirmDeletion() {
    this.deleteConfirmed.emit();
    const modalElement = document.getElementById('deleteUserModal');
    if (modalElement) {
      const { Modal } = await import('bootstrap');
      const modal = Modal.getInstance(modalElement) || new Modal(modalElement);
      modal.hide();
    }
  }
}
