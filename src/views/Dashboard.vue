<template>
    <Navbar />
    <div class="container text-center mt-2">
        <div class="col-12 mb-4">
            <div class="form-floating">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Lista de Fórmulas</option>
                    <option value="1">Fórmula 1</option>
                    <option value="2">Fórmula 2</option>
                    <option value="3">Fórmula 3</option>
                </select>
                <label for="floatingSelect">Seleccione la receta</label>
            </div>
        </div>
        <div class="row">
            <div class="col-4 px-1">
                <h3 class="text-center">CEMENTO</h3>
                <div class="row">
                    <div class="col-4" v-for="cement in cements" :key="cement.id">
                        <img src="https://media.istockphoto.com/vectors/granary-icon-vector-id860378780?k=6&m=860378780&s=612x612&w=0&h=8EXm4F5Hke82zyzU8Ydd-hlcO5W505hBUcESGfgxHSQ=" alt="" class="image-fluid" style="max-width:80%">
                        <p>{{cement.name}}</p>
                        <p class="fw-bold">Contenido: {{cement.content}} Kg</p>
                        <small>Peso meta:</small>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <h4>CEMENTO TOTAL: {{totalCement}}(KG)</h4>
                        <button class="btn btn-sm btn-danger">Abrir</button>
                        <div class="row">
                            <div class="col-4 mt-4" v-for="truck in trucks" :key="truck.id">
                                <p>{{truck.name}}</p>
                                <img src="https://static.vecteezy.com/system/resources/previews/000/420/391/original/vector-concrete-mixer-icon.jpg" alt="" class="image-fluid" style="max-width:80%">
                                <p class="fw-bold text-center">Capacidad: {{truck.load}} Tons</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>   
            <div class="col-4 px-2">
                <h3 class="text-center">AGREGADOS</h3>
                <div class="row">
                    <div class="col-4 mt-4" v-for="aggregate in aggregates" :key="aggregate.id">
                        <img src="https://svgsilh.com/png-512/575649.png" alt="" class="image-fluid" style="max-width: 100%">
                        <p>{{aggregate.name}}</p>
                        <p class="fw-bold text-center">Contenido: {{aggregate.content}} Kg</p>
                        <small>Peso Meta:</small>
                        <p>Completado: </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                    <h4>AGREGADOS TOTALES {{totalAggregates}} (KG)</h4>
                    <p>0 kg/s</p>
                    <a href="/menu" class="btn btn-sm btn-danger">Alarma</a>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <h3 class="text-center">AGUA Y ADITIVOS</h3>
                <div class="row" v-for="water in waters" :key="water.id">
                    <div class="col-4">
                        <img src="https://static.thenounproject.com/png/30192-200.png" alt="" class="image-fluid" style="max-width:50%">
                    </div>
                    <div class="col-8">
                        <h3>{{water.name}}</h3>
                        <p class="fw-bold text-center">Contenido: {{water.content}} Lts</p>  
                    </div>
                </div>
                <div class="row" v-for="additive in additives" :key="additive.id">
                    <div class="col-4">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAB+fn7b29vw8PBZWVltbW2urq64uLhxcXFOTk7k5OTOzs7s7Oyfn5+cnJxjY2N3d3f5+fmlpaUnJyeBgYGysrJJSUnExMQ1NTXf39+WlpY6OjpoaGhTU1PR0dEWFhZDQ0MvLy8gICCLi4vrvvQhAAADkUlEQVR4nO3d61ajMBRAYSi9Kb1JL2pt1Vrf/xmdrhkXOJKQQA4n1v39D2Rr2wC9kCRisuVok7rYjBaZ3DTETA9OdZ9OU+0Je5rfe/Vd3M+1J+1j5t13MdOetruHVoFp+qA9cVd5y8A0zbWn7uixdeGj9tTdrFsHpulae/IuCrdFsN6m0J6+g7YvM3/9hBebu06Fd9rTb1a0f525eIz/YTrsFJimQ+2ARtdfOO9YGP/RKYUUUqiPQgopjEDejfb0gfjls4reLsXvq3sVfqYuqy97I9l9lb5cNniS3deiuq+V7L5Kg+pel7L7olAGhSFRKIPCkGoLi92tjEkRRWG2TeUMMu3CP/8+wb6L+8kw+fI37LNwnA/SPmxXWoU6KKTw1xd2+RRCILLnh9lIuy9NXwcvYn27k3bdP4eJSF8ET8GKRfC+fbcPIIT3tg8b2O1DMjKCfvQmxsCgiZl2i0G4C7Zn7RSDc6jAd+0So/cwgV3fEZQU5t3GJ+0MizCHcH5fK+jXIURg+09t9yHEw3SnHWG1C1AY89MwzBMx3rXiIsR60c/1tLYGFFJIoToKKaRQH4UUUqiPQgop1Bei8EY7wuomQGExjFn8XxsGAAAA3KyP43gdQ/x0VrdfRZIW4leXrv8MmEJdFFJIoT4KKaRQH4UUUqiPQhfL51G8noW/MwsAAAAgGN5d08UZMIUU6qOQQgr1UUghhfoopPB3FF7/GfBsErMfdKdrAAAAwOplGrMQ90m4/rOn6z8DplAXhRRSqI9CCinURyGFFOqjkEIK9VFIIYX6KKSQQn0UUkihPgop/B2F1/8u9zyLWZibOgMAAAD61uMbgzvjjeuGxjEW46Fpc8XAOEb2Dh5P5kFtbppouZXhUvTsyXgGvLEMKloU2m5luDENEj3Hn9pGmf/qJpZHRJJMNQoP1lHF2TPwbL8b5UGhsOF7ADvPwp19cy/9Fx6bxp28Ak9Nmzv2XrhvGjfzKmz8Tva+78Jt88CRR+Bz8+a2PRc63KU29yjMmzdXvwCJFS5aj2w/z0Wfha9OI+fOhW5XPesWIKlC62Jfcl32rYt9qW7ZFyq8dRxaGA+2vti43nr6trdC55/bcFv2Gxb7Us0CJFO4ch/85hD45r65VU+FDi/tn1yWfY8fYPm+AIkUOiz2pe9/9f95PCJqln2RQuOpeB3DwVZF4+Ff1bCPQs/rBvUHWyWvR0SSrL0LPwAHIYP7o9SYGAAAAABJRU5ErkJggg==" alt="" class="image-fluid" style="max-width:40%">
                    </div>
                    <div class="col-7">
                        <h4>{{additive.name}}</h4>
                        <p class="fw-bold text-center">Contenido: {{additive.content}} Lts</p>
                        <small>Peso Meta:</small>
                        <p>Completado: </p>  
                    </div>    
                </div>
                <h4>VOLUMEN TOTAL: {{totalAdditives + totalWaters}} (LTS)</h4>        
            </div>
        </div>
    </div>
    <Controls />
</template>

<script>

import {ref, computed} from 'vue'
import Navbar from '../components/Navbar.vue'
import Controls from '../components/Controls.vue'


export default {
    components: {
        Navbar,
        Controls
    },
    setup() {
            const cements = ref([
                {'name': 'Cemento 1', 'content': 75},
                {'name': 'Cemento 2', 'content': 50},
                {'name': 'Cemento 3', 'content': 95}
            ]);
            const totalCement = computed(() => cements.value.reduce((acc, item) => acc + item.content, 0));

            const aggregates = ref([ 
                {'name': 'Árido 1', 'content': 50},
                {'name': 'Árido 2', 'content': 45},
                {'name': 'Árido 3', 'content': 100}
            ]);
            const totalAggregates = computed(() => aggregates.value.reduce((acc, item) => acc + item.content, 0));

            const waters = ref([
                {'name': 'Agua', 'content': 300}
            ]);
            const totalWaters = computed(() => waters.value.reduce((acc, item) => acc + item.content, 0));

            const additives = ref([
                {'name': 'Aditivo 1', 'content': 23},
                {'name': 'Aditivo 2', 'content': 34},
                {'name': 'Aditivo 3', 'content': 61}
            ]);
            const totalAdditives = computed(() => additives.value.reduce((acc, item) => acc + item.content, 0));
        
            const trucks = ref([
                {'name': 'Camión 1', 'load': 23},
                {'name': 'Camión 2', 'load': 34},
                {'name': 'Camión 3', 'load': 61}
            ])
        return {
            cements,
            totalCement,
            aggregates,
            totalAggregates,
            waters,
            totalWaters,
            additives,
            totalAdditives,
            trucks
        }

    },
        

}
</script>

<style scoped>
    .container{
        background: white;
    }
</style>
