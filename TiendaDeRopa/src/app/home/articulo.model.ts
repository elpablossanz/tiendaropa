export class Articulo{
    private id:number;
    private nombre?:string;
    private precio?:number;
    private descripcion?:string;
    private imagen?:string;

  constructor(
    id: number, 
    nombre?: string, 
    precio?: number, 
    descripcion?: string, 
    imagen?: string
) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.descripcion = descripcion
    this.imagen = imagen
  }

  public getId(): number {
    return this.id;
  }

  public getNombre(): string | undefined{
    return this.nombre;
  }

  public getModelo(): number | undefined {
    return this.precio;
  }

  public getDescripcion(): string | undefined{
    return this.descripcion;
  }
  public getPrecio(): number | undefined{
    return this.precio;
  }
  public getImagen(): string | undefined{
    return this.imagen;
  }

  public setId(id:number): void{
    this.id=id;
  }


  public setNombre(nombre:string): void{
    this.nombre=nombre;
  }


  public setPrecio(precio:number): void{
    this.precio=precio;
  }

  public setDescripcion(descripcion:string): void{
    this.descripcion=descripcion;
  }

  public setImagen(imagen:string): void{
    this.imagen=imagen;
  }


}