import {
  Component,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';

import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  termino: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>()
  debouncer: Subject<string> = new Subject<string>();

  ngOnInit() {
    this.debouncer
      .pipe(
        debounceTime(300)
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
