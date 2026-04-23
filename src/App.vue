<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4>
                    Leads
                    <RouterLink to="/leads/create" class="btn btn-primary float-end">
                        Add Lead
                    </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Company</th>
                            <th>Job Title</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Date Created</th>
                        </tr>
                    </thead>
                    <tbody v-if="this.leads.length > 0">
                        <tr v-for="(lead, index) in this.leads" :key="index">
                            <td>{{ lead.id }}</td>
                            <td>{{ lead.firstName }}</td>
                            <td>{{ lead.lastName }}</td>
                            <td>{{ lead.companyName }}</td>
                            <td>{{ lead.jobTitle }}</td>
                            <td>{{ lead.email }}</td>
                            <td>{{ lead.phoneNumber }}</td>
                            <td>{{ lead.address }}</td>
                            <td>{{ lead.dateCreated }}</td>
                            <td>
                                <RouterLink :to="{ path: '/leads/' + lead.id + '/edit' }" class="btn btn-success float-end">
                                    Edit</RouterLink>
                                <button type="button" class="btn btn-danger float-end">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="9">Loading...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

function createLead() {
    console.log('in create')
}

export default {
    name: 'leads',
    data() {
        return {
            leads: []
        }
    },
    mounted() {
        this.getLeads();
    },
    methods: {
        getLeads() {
            //For Spring Boot: axios.get('http://localhost:8080/api/lead').then(res => {
            axios.get('http://localhost:8000/api/lead').then(res => {
                leads = res.data.leads;
            });
        }
    }
}
</script>