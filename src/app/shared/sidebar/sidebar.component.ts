import { Component} from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {


  get historial(){
    return this.gifsService.historial;
  }
  constructor(private gifsService: GifsService){
  }
  
  buscar(query: string){
    this.gifsService.buscarGifs(query);
  }
}
