import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../articulo.model';
import { ArticuloService } from '../articulo.service';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES);



@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.scss']
})
export class CartasComponent implements OnInit {
  articulos: Articulo[] = [];
  @Input() articulo?: Articulo;
  @Output() click: EventEmitter<number> = new EventEmitter<number>();
  @Input() textoBoton:string="pulsar";
  constructor(private router: Router, private route: ActivatedRoute, private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.obtenerArticulosRest();
  
  }
  private obtenerArticulosRest() {
    this.articuloService.obtenerArticulosRest().subscribe(
      (data)=>{
        data.forEach( (articulo)=>{
          const articuloAIncluir:Articulo = new Articulo(articulo.id, articulo.nombre, articulo.precio, articulo.descripcion, articulo.imagen);
          this.articulos.push(articuloAIncluir);
        })
      },
    )
  }
  

  public navegarAFicha(idArticulo: number): void{
    this.router.navigate(['articulo', idArticulo]);
  }
  public pulsarBoton(): void {
    this.click.emit(this.articulo?.getId());
  }

}
