<template>
   <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h2>Crear usuario</h2>
                        <form id="addtime" action=" https://doctorly.themesbrand.website/doctor " method="post" enctype="multipart/form-data">
                            <input type="hidden" name="_token" value="GNLvpIEl9nAN51KW2v8CCMd5FcHfElOyX2O2zw9u">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label class="control-label">Nombre de usuario <span
                                                    class="text-danger">*</span></label>
                                            <input type="text"
                                                class="form-control "
                                                name="first_name" id="firstname" tabindex="1"
                                                value=""
                                                placeholder="Enter First Name">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label class="control-label">Email <span
                                                    class="text-danger">*</span></label>
                                            <input type="email" class="form-control "
                                                name="email" id="email" tabindex="3" value=""
                                                placeholder="Enter Email">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label class="control-label">Contraseña <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control "
                                                name="title" id="title" tabindex="5" value=""
                                                placeholder="Enter Title">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label class="control-label">Nombre <span
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
                                     <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label class="control-label d-block">Permisos <span
                                                    class="text-danger">*</span></label>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
                                                    value="1" name="sun" >
                                                <label class="form-check-label" for="inlineCheckbox1">Administración</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2"
                                                    value="1" name="mon" >
                                                <label class="form-check-label" for="inlineCheckbox2">Acceso a diseños de mezcla</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                    value="1" name="tue" >
                                                <label class="form-check-label" for="inlineCheckbox3">Acceso a calibración y ajustes</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-primary">
                                        Create user
                                    </button>
                                </div>
                            </div>
                        </form>
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