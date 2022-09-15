<template>
    <div class="container-lg">
    
            <div class="row">
                <div class="col-lg-12">
                    <div class="card mt-4 mb-4">
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
                                                    placeholder="Enter First Name">
                                            </div>
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Nombre de la fórmula <span
                                                        class="text-danger">*</span></label>
                                                <input type="text"
                                                    class="form-control "
                                                    name="first_name" id="firstname" tabindex="1"
                                                    value=""
                                                    placeholder="Enter First Name">
                                            </div>
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Descripción de la fórmula <span
                                                        class="text-danger">*</span></label>
                                                <input type="text"
                                                    class="form-control "
                                                    name="first_name" id="firstname" tabindex="1"
                                                    value=""
                                                    placeholder="Enter First Name">
                                            </div>
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Notas<span
                                                        class="text-danger">*</span></label>
                                                <input type="text"
                                                    class="form-control "
                                                    name="first_name" id="firstname" tabindex="1"
                                                    value=""
                                                    placeholder="Enter First Name">
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <h5>Aditivos</h5>
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Apellido <span
                                                        class="text-danger">*</span></label>
                                                <input type="text"
                                                    class="form-control "
                                                    name="last_name" id="lastname" tabindex="2" value=""
                                                    placeholder="Enter Last Name">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">ID <span
                                                        class="text-danger">*</span></label>
                                                <input type="tel" class="form-control "
                                                    name="mobile" id="patientMobile" tabindex="4"
                                                    value=""
                                                    placeholder="Enter Contact Number">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Dirección <span
                                                        class="text-danger">*</span></label>
                                                <input type="text" class="form-control "
                                                    name="degree" id="degree" tabindex="6" value=""
                                                    placeholder="Enter Degree">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Número de contacto <span
                                                        class="text-danger">*</span></label>
                                                <input type="text" class="form-control "
                                                    name="fees" id="fees" tabindex="6" value=""
                                                    placeholder="Enter Fees">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <h5>Cementos</h5>
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Cemento 1<span
                                                        class="text-danger">*</span></label>
                                                <input type="email" class="form-control "
                                                    name="email" id="email" tabindex="3" value=""
                                                    placeholder="Enter Email">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Cemento 2 <span
                                                        class="text-danger">*</span></label>
                                                <input type="text" class="form-control "
                                                    name="title" id="title" tabindex="5" value=""
                                                    placeholder="Enter Title">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Cemento 3<span
                                                        class="text-danger">*</span></label>
                                                <input type="text"
                                                    class="form-control "
                                                    name="experience" tabindex="7" id="experience"
                                                    value=""
                                                    placeholder="Enter Experience">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Cemento 4<span
                                                        class="text-danger">*</span></label>
                                                <input type="text"
                                                    class="form-control "
                                                    name="experience" tabindex="7" id="experience"
                                                    value=""
                                                    placeholder="Enter Experience">
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <h5>Agregados</h5>
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Agregado 1<span
                                                        class="text-danger">*</span></label>
                                                <input type="email" class="form-control "
                                                    name="email" id="email" tabindex="3" value=""
                                                    placeholder="Enter Email">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Agregado 2 <span
                                                        class="text-danger">*</span></label>
                                                <input type="text" class="form-control "
                                                    name="title" id="title" tabindex="5" value=""
                                                    placeholder="Enter Title">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Agregado 3<span
                                                        class="text-danger">*</span></label>
                                                <input type="text"
                                                    class="form-control "
                                                    name="experience" tabindex="7" id="experience"
                                                    value=""
                                                    placeholder="Enter Experience">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label">Agregado 4<span
                                                        class="text-danger">*</span></label>
                                                <input type="text"
                                                    class="form-control "
                                                    name="experience" tabindex="7" id="experience"
                                                    value=""
                                                    placeholder="Enter Experience">
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