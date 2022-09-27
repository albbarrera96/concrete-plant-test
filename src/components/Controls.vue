<template>
    <div class="container mt-2 pb-2">
    <div class="row">
        <div class="col-lg-8 col-sm-6">
            <div class="card shadow-sm px-2 pb-5">

                <div class="row">
                    <div class="col-7">
                        <p>Remisión:...</p>
                        <p>Receta: {{formulaName}}</p>
                        <p>Descripción: {{formulaDescription}}</p>
                    </div>   
                </div>
                <div class="row">
                    <div class="col-3">
                        <p> <strong>Cemento 1:</strong> {{cementList1}}kg</p>
                        <p> <strong>Cemento 2:</strong> {{cementList2}}kg</p>
                        <p> <strong>Cemento 3:</strong> {{cementList3}}kg</p>
                    </div>
                    <div class="col-3">
                        <p><strong>Agregado 1:</strong> {{aggregateList1}}kg</p>
                        <p><strong>Agregado 2:</strong> {{aggregateList2}}kg</p>
                        <p><strong>Agregado 3:</strong> {{aggregateList3}}kg</p>
                    </div>
                    <div class="col-3">
                        <p><strong>Aditivo 1:</strong> {{additiveList1}}kg</p>
                        <p><strong>Aditivo 2:</strong> {{additiveList2}}kg</p>
                        <p><strong>Aditivo 3:</strong> {{additiveList3}}kg</p>
                    </div>
                    <div class="col-3">
                        <p class="text-primary"><strong>Agua:</strong>{{waterAmount}} Lt</p>
                    </div>                
                </div>

            </div>
        </div>
        <div class="col-lg-4 col-sm-6">
            <div class="card shadow-sm">
                <div class="ps-2 pb-2 pt-2">
                    <h4>Información del proceso:</h4>
                    <p>Cementos: {{cementList1 + cementList2 + cementList3}} Kg</p>
                    <p>Agregados: {{aggregateList1 + aggregateList2 + aggregateList3}} Kg</p>
                    <p>Aditivos: {{additiveList1 + additiveList2 + additiveList3}} Kg</p>
                    <p>Agua: {{waterAmount}} Lt</p>
                    <div class="text-center">
                        <button type="button" class="btn btn-success mx-1 my-1">INICIAR</button>
                        <button type="button" class="btn btn-warning mx-1 my-1">ÚLTIMO BACHE</button>
                        <button type="button" class="btn btn-danger mx-1 my-1">PARAR</button>
                        <button type="button" class="btn btn-info mx-1 my-1">PROGRAMAR</button>
                    </div>
                </div>
            </div>
        </div>        
    </div>
  </div>
</template>

<script>
export default {
    props: {
        formulaName: String,
        formulaDescription: String,
        cubicMeters: Number,
        cementList1: Number,
        cementList2: Number,
        cementList3: Number,
        aggregateList1: Number,
        aggregateList2: Number,
        aggregateList3: Number,
        additiveList1: Number,
        additiveList2: Number,
        additiveList3: Number,
        waterAmount: Number

    }
    

}
</script>

<style scoped>

</style>