import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../Services/Marvel/marvel.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharactersComponent } from '../characters/characters.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comics: any;
  selectedComicId: number | null = null;  // ID del cómic seleccionado
  characters = [];  // Lista de personajes
  isLoading = false;  // Flag para mostrar/ocultar el spinner
  showModal = false;
  isLoadingCharacters = false;  // Bandera de carga de personajes

  constructor(public marvel: MarvelService, private router: Router) { }

  ngOnInit() {
    this.loadComics();

     // Inicializa la bandera de carga de personajes
  }

  loadComics() {
    this.isLoading = true; 
    this.marvel.obtenerComics().subscribe((data: any) => {
      this.comics = data.data.results;  
      this.isLoading = false;  
    });
    
  }

  openModal(comicId: number) {
    if (this.selectedComicId === comicId) {
      this.showModal = !this.showModal; // Solo cambia el estado si ya está abierto
      return;
    }
    this.selectedComicId = comicId;
    this.showModal = true;
    this.isLoadingCharacters = true;
  }



  // Cierra el modal
  closeModal() {
    this.showModal = false;
    this.selectedComicId = null;
    this.characters = []; // Limpia la lista de personajes
  }

}
