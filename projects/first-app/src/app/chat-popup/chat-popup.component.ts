import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonPlatformService } from 'projects/shared/services/common-platform.service';

@Component({
  selector: 'app-chat-popup',
  templateUrl: './chat-popup.component.html',
  styleUrls: ['./chat-popup.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ChatPopupComponent implements OnInit {

  queryForm!: FormGroup;
  formBuilder = inject(FormBuilder);
  commonPlatformService = inject(CommonPlatformService);
  @Output() onQuerySubmit: EventEmitter<{ type: string, message: string }> = new EventEmitter();
  constructor(
  ) {
    console.log('chat popup works');
    this.createForm();
  }

  createForm(): void {
    this.queryForm = this.formBuilder.group({
      type: ['information', [Validators.required]],
      message: ['need information related to angular', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }


  onSubmit(): void {
    if (this.queryForm.valid) {
      this.onQuerySubmit.emit(this.queryForm.value);
    }
  }
}
