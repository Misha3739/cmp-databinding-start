import {Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
OnChanges} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: [
     './cockpit.component.css']
})
export class CockpitComponent implements OnInit {

@Output('srvCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated  = new EventEmitter<{ serverName: string, serverContent: string}>();

  private newServerContent: string;
  private newServerName: string;

  @ViewChild('srvComponentInput') serverComponentInput: ElementRef;

  componentActionIndex = 0;

  constructor() {
    this.log('Constructor');
  }

  ngOnInit() {

  }

  onAddServer(nameInput: HTMLInputElement)
  {
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverComponentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement)
  {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverComponentInput.nativeElement.value});
  }

  log( methodName: string)
 {
 this.componentActionIndex++;
 console.log(methodName + ': ' + this.componentActionIndex);
 }



  /*ngOnChanges() {
    this.log('ngOnChanges');
  }

 ngDoCheck()
 {
 this.log('ngDoCheck');
 }

 ngAfterContentInit()
 {
 this.log('ngAfterContentInit');
 }

 ngAfterContentCheck()
 {
 this.log('ngAfterContentCheck');
 }

 ngAfterViewInit()
 {
 this.log('ngAfterViewInit');
 }

 ngAfterViewChecked()
 {
 this.log('ngAfterViewChecked');
 }

 ngOnDestroy()
 {
 this.log('ngOnDestroy');
 }
 */
}
