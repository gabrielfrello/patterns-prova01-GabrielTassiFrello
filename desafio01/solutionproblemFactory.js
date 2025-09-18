class Bicicleta {
    move() {
      return "Pedalando a bicicleta no pátio da UNISATC";
    }
  }
  
  class Patinete {
    move() {
      return "Andando de patinete pelo estacionamento da UNISATC";
    }
  }
  
  class Onibus {
    move() {
      return "Andando de ônibus e chegando na UNISATC";
    }
  }
  
  class TransporteFactory {
    static criar(tipo) {
      const tipos = {
        bicicleta: Bicicleta,
        patinete: Patinete,
        onibus: Onibus,
      };
      return new tipos[tipo]();
    }
  }
  
  const tipo = "onibus";
  const transporte = TransporteFactory.criar(tipo);
  
  console.log(transporte.move());
  