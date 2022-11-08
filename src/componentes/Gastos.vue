<template>

  <section class="src-componentes-gastos">
     <div class="jumbotron">
      <h2>Formulario: Carga de gastos:</h2>
      <hr>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">
         
        <!-- Campo nombre -->
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            id="nombre"
            class="form-control mt-1"
            type="text" 
            v-model.trim="formData.nombre" 
            required 
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            name="nombre" 
            autocomplete="off"
            no-espacios/>

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="no-espacios" class="alert alert-danger mt-1">Este campo no admite espacios</div>
            <div slot="minlength" class="alert alert-danger mt-1">Este campo debe poseer al menos {{ nombreMinLength }} caracteres</div>
            <div slot="maxLength" class="alert alert-danger mt-1">Este campo debe poseer como máximo {{ nombreMaxLength }} caracteres</div>
          </field-messages>
        </validate>

        <validate tag="div">
          <label for="descripcion">Descripcion del gasto</label>
          <input 
            id="descripcion"
            class="form-control mt-1"
            type="text" 
            v-model.trim="formData.descripcion" 
            required
            name="descripcion" 
            autocomplete="off"/>

          <field-messages name="descripcion" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          </field-messages>
        </validate>

        <validate tag="div">
          <label for="importe">Importe</label>
          <input 
            id="importe"
            class="form-control mt-1"
            type="number" 
            v-model="formData.importe" 
            required
            name="importe" 
            autocomplete="off"/>

          <field-messages name="importe" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          </field-messages>
        </validate>
      
        <button class="btn btn-success my-3" :disabled="formState.$invalid">Enviar</button>

      </vue-form>
      <div v-if="datosRegistrados.length">
        <hr>
        <hr>
        <h1>Registros: </h1>
        <br>
        <label for="presupuesto">Presupuesto</label>
        <input 
            id="presupuesto"
            type="number"
            class="ml-2" 
            v-model="presupuesto" 
            required
            name="presupuesto" 
            autocomplete="off"/>
        <br>
        <table class="table">
          <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Importe</th>
              <th>Fecha y hora</th>
          </tr>
          <tr v-for="(gasto, index) in datosRegistrados" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ gasto.nombre }}</td>
              <td>{{ gasto.descripcion }}</td>
              <td>{{ gasto.importe }}</td>
              <td>{{ gasto.fechaCreacionReg }}</td>
          </tr>
          <tr :style="{color: analizarEstilo() }">
            <td>Total gastos:</td>
            <td> {{ totalGastos }} </td>
          </tr>
        </table>
      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-gastos',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getDataInicial(),
        nombreMinLength: 3,
        nombreMaxLength: 15,
        datosRegistrados: [ ],
        presupuesto: null,
        totalGastos: 0
      }
    },
    methods: {
      getDataInicial() {
        return {
          nombre: null,
          descripcion: null,
          importe: null,
          fechaCreacionReg: null
        }
      },
      enviar() {
        this.formData.fechaCreacionReg = this.obtenerFechaCreacionReg()
        this.totalGastos = parseInt(this.totalGastos) + parseInt(this.formData.importe)
        this.datosRegistrados.push({...this.formData})
        this.formData = this.getDataInicial()
        this.formState._reset()
      },
      obtenerFechaCreacionReg() {
        return new Date().toLocaleString()
      },
      analizarEstilo() {
        let color = '#080'

        if(this.totalGastos >= 1000 && this.totalGastos <= 5000) color = '#f0f'
        else if(this.totalGastos > 5000) color = '#ffa500'
        
        if(this.presupuesto != null && this.presupuesto.length > 0 && this.presupuesto < this.totalGastos) {
          color = '#ff0000'
        }
        return color
      }

    },
    computed: {

    }
}

</script>

<style scoped lang="css">

</style>
