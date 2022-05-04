import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Articulo } from '../articulo.model';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-carru',
  templateUrl: './carru.component.html',
  styleUrls: ['./carru.component.scss']
})
export class CarruComponent implements OnInit {
  articulos: Articulo[] = [];
  @Input() articulo?: Articulo;
  @Output() click: EventEmitter<number> = new EventEmitter<number>();
  @Input() textoBoton:string="pulsar";
  constructor(private router: Router, private route: ActivatedRoute, private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.obtenerArticulosCarru();
  }

  private obtenerArticulosCarru() {
    this.articuloService.obtenerArticulosRest().subscribe(
      (data)=>{
        data.forEach( (articulo)=>{
          const articuloAIncluir:Articulo = new Articulo(articulo.id, articulo.nombre, articulo.precio, articulo.descripcion, articulo.imagen);
          this.articulos.push(articuloAIncluir);
        })
      },
    )
  }
}
