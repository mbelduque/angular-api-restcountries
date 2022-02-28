import {
  Component,
  EventEmitter,
  Output,
  OnInit, Input
} from '@angular/core';

import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  debouncer: Subject<string> = new Subject<string>();
  termino: string = '';

  @Input() placeholder: string = '';
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>()
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit() {
    this.debouncer
      .pipe(
        debounceTime(0)
      )
      .subscribe(termino => {
        this.onDebounce.emit(termino)
      });
  }

  buscar(): void {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
