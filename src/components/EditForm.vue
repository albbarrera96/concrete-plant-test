<template>
    <Navbar />
    <div class="container">
        <div class="container-lg mt-4">
            <router-link to="/dashboard">Return to Dashboard</router-link>
            <div class="card shadow-sm mt-4">
                <div class="card-content">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Nombre de la fórmula</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="formula in Formulas" :key="formula.id">
                                <td>{{formula.name}}</td>
                                <td>{{formula.description}}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Formulas from '../assets/data/formulas.json'
import Navbar from './Navbar.vue'


export default {
    components: {
        Navbar
    },
    setup() {
        Formulas

        return{
            Formulas
        }
    }
}
</script>

<style>

</style>