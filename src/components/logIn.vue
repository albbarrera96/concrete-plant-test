<template>
        <div class="container my-5 py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card overflow-hidden shadow-sm">
                            <div class="bg-dark">
                                <div class="row">
                                    <div class="col-7">
                                        <div class="card-title text-center text-light">
                                            <p class="h5 py-4">Welcome!</p>
                                            <p class="h6">With faded secondary text</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body pt-3">
                                <form class="py-4" v-on:submit.prevent>
                                    <div class="mb-2">
                                        <label for="exampleInputEmail1" class="form-label">User or Email</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="usuario">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <div class="d-grid gap-2">
                                        <router-link to="/dashboard" type="submit" class="btn btn-dark" @click = login()>Submit</router-link>
                                    </div>
                                </form>
                            </div>
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