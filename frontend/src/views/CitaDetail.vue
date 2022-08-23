<template>
  <div>
    <h1>Editar una Cita</h1>

    <div v-for="item in cita" :key="item._id">
      Nombre:
      <h4>{{ item.Nombre }}</h4>
      NumeroDeIdentidad:
      <p>{{ item.NumeroDeIdentidad }}</p>
      InformacionDeLaCita:
      <p>{{ item.InformacionDeLaCita }}</p>
      Fecha:
      <p>{{ item.Fecha }}</p>
    </div>

    <hr />

    <input type="text" placeholder="Nombre" v-model="state.nuevoNombre" />
    <span> Test: {{ state.nuevoNombre }} </span>
    <br />
    <input
      type="number"
      placeholder="numero de identidad"
      v-model="state.nuevoNumeroIdentidad"
    />
    <span> Test: {{ state.nuevoNumeroIdentidad }} </span>
    <br />
    <input
      type="text"
      placeholder="Informacion de la cita"
      v-model="state.nuevaInfoCita"
    />
    <span> Test: {{ state.nuevaInfoCita }} </span>
    <br />
    <input
      type="date"
      placeholder="fecha"
      v-model="state.nuevaInfoCita"
      value="2022-08-22"
      min="2022-08-24"
      max="2022-08-31"
    />
    <br />
    <button @click="editCita()">Actualizar Cita</button>

    <hr />
  </div>
</template>

<script>
import citacrud from '../modules/citacrud';
export default {
  setup() {
    const { editCita, state, GetSpecificCita, cita, citaId } = Citacrud();

    GetSpecificCita();
    return {
      cita,
      citaId,
      editCita,
      state,
    };
  },
};
</script>

<style lang="scss" scoped></style>
