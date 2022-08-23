<template>
  <div>
    <h1>Todas las Citas</h1>
    <button @click="nuevaCita()">Nueva Cita - static</button>
    <br />
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
    <div v-for="cita in state.citas" :key="cita._id">
      <router-link :to="`/cita/${cita._id}`">
        <h4>
          {{ cita.Nombre }}
        </h4>
        <p>
          {{ cita.NumeroDeIdentidad }}
        </p>
        <p>
          {{ cita.InformacionDeLaCita }}
        </p>
        <p>
          {{ cita.Fecha }}
        </p>

        <button @click="editCita(cita._id)">Editar cita</button>
      </router-link>
      <button @click="deleteCita(cita._id)">Eliminar cita</button>
    </div>
  </div>
</template>

<script>
import citacrud from '../modules/citacrud';
import { onMounted } from 'vue';
export default {
  setup() {
    const { state, GetAllCitas, nuevaCita, deleteCita, editCita } = citacrud();
    onMounted(() => {
      GetAllCitas();
    });
    return { state, GetAllCitas, nuevaCita, deleteCita, editCita };
  },
};
</script>

<style lang="scss" scoped></style>
