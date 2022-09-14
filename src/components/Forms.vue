<template>
   <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <blockquote>Basic Information</blockquote>
                        <form id="addtime" action=" https://doctorly.themesbrand.website/doctor " method="post" enctype="multipart/form-data">
                            <input type="hidden" name="_token" value="GNLvpIEl9nAN51KW2v8CCMd5FcHfElOyX2O2zw9u">                                                        <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label class="control-label">First Name <span
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
                                            <label class="control-label">Title <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control "
                                                name="title" id="title" tabindex="5" value=""
                                                placeholder="Enter Title">
                                                                                    </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label class="control-label">Experience <span
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
                                            <label class="control-label d-block">Doctor available days <span
                                                    class="text-danger">*</span></label>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
                                                    value="1" name="sun" >
                                                <label class="form-check-label" for="inlineCheckbox1">Sun</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2"
                                                    value="1" name="mon" >
                                                <label class="form-check-label" for="inlineCheckbox2">Mon</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                    value="1" name="tue" >
                                                <label class="form-check-label" for="inlineCheckbox3">Tue</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox4"
                                                    value="1" name="wen" >
                                                <label class="form-check-label" for="inlineCheckbox4">Wen</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox5"
                                                    value="1" name="thu" >
                                                <label class="form-check-label" for="inlineCheckbox5">Thu</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox6"
                                                    value="1" name="fri" >
                                                <label class="form-check-label" for="inlineCheckbox6">Fri</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox7"
                                                    value="1" name="sat" >
                                                <label class="form-check-label" for="inlineCheckbox7">Sat</label>
                                            </div>
                                                                                    </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class='repeater mb-4'>
                                                <div data-repeater-list="TimeSlot" class="form-group">

                                                    <label>Available Time <span
                                                            class="text-danger">*</span></label>
                                                    <div data-repeater-item class="mb-3 row">
                                                        <div class="col-md-5 col-6">
                                                            <label class="label-control">From:</label>
                                                            <div class="input-group">
                                                                <input type="time" name="from"
                                                                    class="form-control timecount timepicker "
                                                                    placeholder="From time" id="time_from" />
                                                                                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-6">
                                                            <label class="label-control">To:</label>
                                                            <div class="input-group">
                                                                <input type="time" name="to"
                                                                    class="form-control  "
                                                                    placeholder="To time"
                                                                    onchange="valinput0()" id="time_to" />
                                                                                                                            </div>
                                                        </div>
                                                        <div class="col-md-2 col-4">
                                                            <input data-repeater-delete type="button" onclick="cf--"
                                                                class="fcbtn btn btn-outline btn-danger btn-1d btn-sm inner"
                                                                value="X" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="para error d-none"></p>
                                                <input data-repeater-create type="button" class="btn btn-primary"
                                                    value="Add Time" onclick="change()" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label class="control-label">Last Name <span
                                                    class="text-danger">*</span></label>
                                            <input type="text"
                                                class="form-control "
                                                name="last_name" id="lastname" tabindex="2" value=""
                                                placeholder="Enter Last Name">
                                                                                    </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label class="control-label">Contact Number <span
                                                    class="text-danger">*</span></label>
                                            <input type="tel" class="form-control "
                                                name="mobile" id="patientMobile" tabindex="4"
                                                value=""
                                                placeholder="Enter Contact Number">
                                                                                    </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label class="control-label">Degree <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control "
                                                name="degree" id="degree" tabindex="6" value=""
                                                placeholder="Enter Degree">
                                                                                    </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label class="control-label">Fees <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control "
                                                name="fees" id="fees" tabindex="6" value=""
                                                placeholder="Enter Fees">
                                                                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-primary">
                                                                                    Add New Doctor
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