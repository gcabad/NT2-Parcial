<template>

  <section class="src-componentes-multiplechoice">
    <div class="jumbotron">
      <h1>Punto 2: Multiplechoice</h1>

      <div>
        <hr>
        <hr>
        <h1>Respuestas: </h1>
        <br>
        <table class="table dark-table">
          <tr>
              <th>Numero de pregunta</th>
              <th>Respuesta</th>
          </tr>
          <tr v-for="(resp, index) in resolucion" :key="index">
            <td> {{ resp.numero }} </td>
            <td> {{ resp.respuestas }} </td>
          </tr>
          
        </table>
      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-multiplechoice',
    props: [],
    mounted () {

    },
    data () {
      return {
        resolucion: [
          {numero: 1, respuestas: ['b'] },
          {numero: 2, respuestas: ['c'] },
          {numero: 3, respuestas: ['e'] }
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">

</style>
