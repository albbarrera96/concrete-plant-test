<template>
    <div class="container-lg">
    
            <div class="row">
                <div class="col-lg-12">
                    <div class="card mt-4 mb-4 shadow-sm">
                        <div class="card-body">
                            <h2>Crear fórmula</h2>
                            <form id="addtime" action=" https://doctorly.themesbrand.website/doctor " method="post" enctype="multipart/form-data">
                                <input type="hidden" name="_token" value="GNLvpIEl9nAN51KW2v8CCMd5FcHfElOyX2O2zw9u">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <h5>Datos de la fórmula</h5>
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Código <span
                                                        class="text-danger">*</span></label>
                                                <input type="text"
                                                    class="form-control "
                                                    name="first_name" id="firstname" tabindex="1"
                                                    value=""
                                                    >
                                            </div>
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Nombre de la fórmula <span
                                                        class="text-danger">*</span></label>
                                                <input type="text"
                                                    class="form-control "
                                                    name="first_name" id="firstname" tabindex="1"
                                                    value=""
                                                    >
                                            </div>
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Descripción de la fórmula <span
                                                        class="text-danger">*</span></label>
                                                <input type="text"
                                                    class="form-control "
                                                    name="first_name" id="firstname" tabindex="1"
                                                    value="">
                                            </div>
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Notas<span
                                                        class="text-danger">*</span></label>
                                                <input type="text"
                                                    class="form-control "
                                                    name="first_name" id="firstname" tabindex="1"
                                                    value=""
                                                    placeholder="Comentario...">
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <h5>Aditivos</h5>
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Aditivo 1 (kg/m3) <span
                                                        class="text-danger">*</span></label>
                                                <input type="number"
                                                    class="form-control "
                                                    name="last_name" id="lastname" tabindex="2" value=""
                                                >
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Aditivo 2 (kg/m3) <span
                                                        class="text-danger">*</span></label>
                                                <input type="number" class="form-control "
                                                    name="mobile" id="patientMobile" tabindex="4"
                                                    value=""
                                                >    
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Aditivo 3 (kg/m3) <span
                                                        class="text-danger">*</span></label>
                                                <input type="number" class="form-control "
                                                    name="degree" id="degree" tabindex="6" value=""
                                                >
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Aditivo 4 (kg/m3)<span
                                                        class="text-danger">*</span></label>
                                                <input type="number" class="form-control "
                                                    name="fees" id="fees" tabindex="6" value=""
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <h5>Cementos</h5>
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Cemento 1 (kg/m3)<span
                                                        class="text-danger">*</span></label>
                                                <input type="email" class="form-control "
                                                    name="email" id="email" tabindex="3" value=""
                                                >
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Cemento 2 (kg/m3)<span
                                                        class="text-danger">*</span></label>
                                                <input type="text" class="form-control "
                                                    name="title" id="title" tabindex="5" value=""
                                                >
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Cemento 3 (kg/m3)<span
                                                        class="text-danger">*</span></label>
                                                <input type="text"
                                                    class="form-control "
                                                    name="experience" tabindex="7" id="experience"
                                                    value=""
                                                >
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Cemento 4 (kg/m3)<span
                                                        class="text-danger">*</span></label>
                                                <input type="text"
                                                    class="form-control "
                                                    name="experience" tabindex="7" id="experience"
                                                    value=""
                                                >
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <h5>Agregados</h5>
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Agregado 1 (kg/m3)<span
                                                        class="text-danger">*</span></label>
                                                <input type="email" class="form-control "
                                                    name="email" id="email" tabindex="3" value=""
                                                >
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Agregado 2 (kg/m3) <span
                                                        class="text-danger">*</span></label>
                                                <input type="text" class="form-control "
                                                    name="title" id="title" tabindex="5" value=""
                                                >
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Agregado 3 (kg/m3)<span
                                                        class="text-danger">*</span></label>
                                                <input type="text"
                                                    class="form-control "
                                                    name="experience" tabindex="7" id="experience"
                                                    value=""
                                                >
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Agregado 4 (kg/m3)<span
                                                        class="text-danger">*</span></label>
                                                <input type="text"
                                                    class="form-control "
                                                    name="experience" tabindex="7" id="experience"
                                                    value=""
                                                >
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-md-12 text-center">
                                        <button type="submit" class="btn btn-primary btn-lg">
                                            Crear Fórmula
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>          

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>