<template>
    <div class="container mt-2 pb-2 shadow-sm">
    <div class="row">
        <div class="col-7">
            <div class="row">
                <div class="col-7">
                    <p>Remisión:...</p>
                    <p>Receta: {{formulaName}}</p>
                    <p>Descripción: {{formulaDescription}}</p>
                </div>
                <div class="col-5">
                    Métros Cúbicos: <h4>0.00</h4>             
                </div>    
            </div>
            <div class="row">
                <h1>Control 2</h1>
                <h1>Control 3</h1>
            </div>
        </div>
        <div class="col-5 border border-dark">
            <div class="ps-1 pb-2">
                <p>Información del proceso:</p>
                <p>Cementos: ...</p>
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
        formulaDescription: String

    }
}
</script>

<style>

</style>