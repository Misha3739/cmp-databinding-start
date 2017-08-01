import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {

  @ViewChild('heading') header: ElementRef;

  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('Text content ' + this.header.nativeElement.textContent);
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
    console.log('Text content ' + this.header.nativeElement.textContent);
  }
}
