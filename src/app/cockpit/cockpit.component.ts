import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

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

  constructor() { }

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

}
