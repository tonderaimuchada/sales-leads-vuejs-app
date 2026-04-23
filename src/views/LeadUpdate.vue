<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                Update Lead
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
                    <button type="button" @click="updateLead" class="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'leadUpdate',
    data(){
        return {
            leadId: '',
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
    mounted(){
        this.leadId = this.$route.params.id;
        this.getLeadData(this.$route.params.id);
    },
    methods: {
        getLeadData(leadId){
            axios.get(`http://${leadId}/edit`).then(res => {
                this.model.lead = res.data.lead
            })
            .catch(function (error) {
                if (error.response && error.response.status == 404){
                    alert('No lead ID found')
                }
            });
        },
        updateLead(){
            axios.put('https://loc' + this.leadId, this.model.lead)
            .then(res => {
                console.log(res.data);
                this.errorList = ''             
            })
            .catch(function () {
                if (error.response) {
                    
                }
            })
        }
    }
}
</script>