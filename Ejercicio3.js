class Vehiculo {
  constructor (id, capacidad) {
    if (!id) throw new Error("El identificador es obligtorio");
    if (!Number.isFinite(capacidad) || capacidad < 1) throw new Error("La capacidad debe ser al menos 1");
    this.id = id; this.capacidad = capacidad; this.ocupado = false;
  }
  calcularCosto(km){
    if (!Number.isfinite (km) || km <= 0) throw new Error("Los kilometros deben ser mayores que cero");
    return km * 1000;
  }

  Viajar(km) {
    return `${this.id}: viaje de ${km} km, costo $${this,this.calcularCosto(km)}`;
  }
}

class Automovil extends Vehiculo {
  calcularCosto(km) {
    if (km <= 0) throw new Error("Distancia invalida");
    return km * 2500;
  }
}

class Motocicleta extends Vehiculo {
  calcularCosto(km){
    if (km <= 0) throw new Error("Distancia invalida");
    return km * 1200;
  }
}

class Bicicleta extends Vehiculo {
  calcularCosto(km){
    if (km <= 0) throw new Error("Distancia invalida");
    return 0;
  }
}

const Vehiculos = [
  new Automovil("AUTO-1", 4),
  new Motocicleta ("MOTO-1", 2),
  new Bicicleta ("BICI-1",1)
];

function asignarViaje (Vehiculo, km) {
  if (Vehiculo.ocupado) throw new Error("El vehiculo ya esta ocupado.");
  Vehiculo.ocupado = true;
  const resultado = Vehiculo.Viajar(km);
  Vehiculo.ocupado = false;
  return resultado;
}

for (const v of Vehiculos) console.log (asignarViaje(v, 5));

try {
  new Automovil ("AUTO-2", 0);
} catch (e) {
  console.log ("Eror controlado: ", e.message);
}