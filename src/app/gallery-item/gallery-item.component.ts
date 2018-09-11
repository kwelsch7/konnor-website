import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { GalleryItem } from '../models';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {
  @Input() galleryItem: GalleryItem;
  modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() { }

  onImageClick(content) {
    this.modalRef = this.modalService.open(content, { centered: true });
  }
}
