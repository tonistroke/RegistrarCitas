import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const getCitas = () => {
  const route = useRoute();
  const router = useRouter();

  const citaId = computed(() => route.params.id);
  //console.log("citaId: ", citaId)

  const state = ref({
    newAuthor: '',
    newCitaItem: '',
    citas: {},
  });

  const GetAllCitas = async () => {
    try {
      await fetch('http://localhost:3000/citas')
        .then((res) => res.json())
        .then((data) => {
          state.value.citas = data;
          // debugger
        });
    } catch (error) {
      console.log(error); // do different error to showcase - line 15 wrong name + line13 with incorrect path
    }
  };

  const newCita = () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // "auth-token": state.token
      },
      body: JSON.stringify({
        author: state.value.newAuthor,
        cita: state.value.newCitaItem,
      }),
    };
    fetch('http://localhost:3000/citas/nuevo', requestOptions).then(
      GetAllCitas()
    );
  };

  const deleteCita = (_id) => {
    fetch('http://localhost:3000/citas/eliminar/' + _id, {
      method: 'DELETE',
    }).then(GetAllCitas());
  };

  const editCita = () => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // "auth-token": state.token
      },
      body: JSON.stringify({
        author: state.value.newAuthor,
        cita: state.value.newCitaItem,
      }),
    };
    fetch(
      'http://localhost:3000/citas/actualizacion/' + citaId.value,
      requestOptions
    )
      .then((res) => res.body)
      .then((res) => {
        console.log(res);
      });
    router.push('/citas');
  };

  const cita = ref({});
  const GetSpecificCita = async () => {
    try {
      fetch('http://localhost:3000/citas')
        .then((res) => res.json())
        .then((data) => {
          cita.value = data.filter((t) => t._id === citaId.value);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    cita,
    citaId,
    GetSpecificCita,
    state,
    GetAllCitas,
    nuevaCita,
    deleteCita,
    editCita,
  };
};

export default getCitas;
