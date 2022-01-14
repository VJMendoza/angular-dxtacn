import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!: Product | undifined;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
