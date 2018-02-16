/*
3. Define una clase que representa una 
Vivienda (vid, calle, numero, ciudad, metros, es_habitada, 
precio_por_m2,
 getPrecioTotal()).preciototal=metros*precio_por_m2 *
*/


		class Vivienda {
			// Constructor
			constructor(vid,calle,numero,ciudad,metros,es_habitada,precio_por_m2){
				this.vid = vid;
				this.calle = calle;
				this.numero = numero;
				this.ciudad = ciudad;
				this.metros = metros;
				this.es_habitada = es_habitada;
				this.precio_por_m2 = precio_por_m2;
			}
			// Métodos
			getPrecioTotal(){
				let preciototal=this.metros*this.precio_por_m2;
				return preciototal;
			}
		}

		class Chalet extends Vivienda{
			constructor(vid,calle,numero,ciudad,metros,es_habitada,precio_por_m2){
				// Llamar al constructor del padre
				// Primera línea SIEMPRE el constructor
				super(vid,calle,numero,ciudad,metros,es_habitada,precio_por_m2);
				// Nuevo parámetro
				this.num_plantas= num_plantas  
				this.es_amueblada = es_amueblada;
			}
			getPrecioTotal(){
				if (es_amueblada) {
					let preciototal = 1.25*(this.metros*precio_por_m2);
				} else {
					let preciototal=this.metros*this.precio_por_m2;
				}
				
				return preciototal;
			}
		}

/*

4. Hereda la clase anterior para implementar Chalet y añade dos nuevas propiedades
 (num_plantas, es_amueblada). 
 Sobreescribe getPrecioTotal() para que tenga en cuenta el número de plantas
  usando el método homónimo de su padre y añada un 25% si es habitada *
*/
