<template>
    <div class="container mt-2 pb-2 shadow-sm">
    <div class="row">
        <div class="col-6">
            <div class="row">
                <div class="col-7">
                    <p>Remisión:...</p>
                    <p>Receta: {{formulaName}}</p>
                    <p>Descripción: {{formulaDescription}}</p>
                </div>   
            </div>
            <div class="row">
                <h1>Control 2</h1>
                <h1>Control 3</h1>
            </div>
        </div>
        <div class="col-6 border border-dark">
            <div class="ps-1 pb-2">
                <p>Información del proceso:</p>
                <p>Cementos: Cemento 1: {{cementList1}}kg, Cemento 2: {{cementList2}}kg, Cemento 3: {{cementList3}}kg</p>
                <p>Agregados: ...</p>
                <p>Aditivos: ...</p>
                <p>Agua: ...</p>
                <div class="text-center">
                    <button type="button" class="btn btn-success">INICIAR</button>
                    <button type="button" class="btn btn-warning">ÚLTIMO BACHE</button>
                    <button type="button" class="btn btn-danger">PARAR</button>
                    <button type="button" class="btn btn-info">PROGRAMAR</button>
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
        cementList1: Function,
        cementList2: Function,
        cementList3: Function

    }
    

}
</script>

<style>

</style>