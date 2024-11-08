import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { MarvelService } from '../Services/Marvel/marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements  OnInit {

  @Input() comicId!: any; 
  @Output() loadComplete = new EventEmitter<boolean>();  

  characters: any[] = []; 

  isLoading = false;  

  constructor(private marvel: MarvelService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
   
    this.isLoading = true;  // Activar loading
    this.loadComplete.emit(true);  
    // Carga los personajes del cómic seleccionado
    this.marvel.obtenerPersonajes(this.comicId).subscribe(
      (data: any) => {
      this.characters = data.data.results;
      this.isLoading = false;
    
      this.loadComplete.emit(false);  // Emitimos cuando la carga se completa
    }
  );
  }

}
