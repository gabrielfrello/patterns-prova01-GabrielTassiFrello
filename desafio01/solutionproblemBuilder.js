class Lanche {
    constructor(builder) {
      this.pao = builder.pao;
      this.carne = builder.carne;
      this.queijo = builder.queijo;
      this.salada = builder.salada;
      this.molho = builder.molho;
    }
  
    show() {
      console.log("Lanche:", {
        pao: this.pao,
        carne: this.carne,
        queijo: this.queijo,
        salada: this.salada,
        molho: this.molho,
      });
    }
  }
  
  class LancheBuilder {
    constructor() {
      this.pao = false;
      this.carne = false;
      this.queijo = false;
      this.salada = false;
      this.molho = false;
    }
  
    addPao() {
      this.pao = true;
      return this;
    }
  
    addCarne() {
      this.carne = true;
      return this;
    }
  
    addQueijo() {
      this.queijo = true;
      return this;
    }
  
    addSalada() {
      this.salada = true;
      return this;
    }
  
    addMolho() {
      this.molho = true;
      return this;
    }
  
    build() {
      return new Lanche(this);
    }
  }
  
  const lancheSimples = new LancheBuilder().addPao().addCarne().build();
  const lancheCompleto = new LancheBuilder().addPao().addCarne().addQueijo().addSalada().addMolho().build();
  
  lancheSimples.show();
  lancheCompleto.show();
  