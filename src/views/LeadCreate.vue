<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                Create Lead
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Full Name</label>
                    <input type="text" v-model="model.lead.fullName" class="form-control"></input>
                </div>
                <div class="mb-3">
                    <label for="">Email Address</label>
                    <input type="text" v-model="model.lead.emailAddress" class="form-control"></input>
                </div>
                <div class="mb-3">
                    <label for="">Phone Number</label>
                    <input type="text" v-model="model.lead.phoneNumber" class="form-control"></input>
                </div>
                <div class="mb-3">
                    <label for="">Company Name</label>
                    <input type="text" v-model="model.lead.companyName" class="form-control"></input>
                </div>
                <div class="mb-3">
                    <label for="">Status</label>
                    <input type="text" v-model="model.lead.status" class="form-control"></input>
                </div>
                <div class="mb-3">
                    <button type="button" @click="saveLead" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'leadCreate',
    data(){
        return {
            model: {
                lead: {
                    fullName: '',
                    emailAddress: '',
                    phoneNumber: '',
                    companyName: '',
                    status: ''
                }
            }
        }
    },
    methods: {
        saveLead(){
            axios.post('https://loc', this.model.lead)
            .then(res => {
                console.log(res.data);
                this.model.lead = {
                    fullName: '',
                    emailAddress: '',
                    phoneNumber: '',
                    companyName: '',
                    status: ''
                }               
            })
            .catch(function () {
                if (error.response) {
                    
                }
            })
        }
    }
}
</script>