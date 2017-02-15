import { Component } from '@angular/core';
import { DatabaseService, Battle, Board, BoardItem } from './core/database.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [DatabaseService]
})
export class AppComponent  { 
  name = 'guess'; 
}
