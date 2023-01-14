<template>
    <div style="width: 100%;">
        <h1>{{poll.title}}</h1>
        <q-card style="width:100%">
            <q-tabs
            v-model="tab"
            dense
            class="bg-grey-3 text-grey-7"
            active-color="primary"
            indicator-color="purple"
            align="justify"
            >
                <q-tab name="development" label="Development" />
                <q-tab name="support" label="Support" />
                <q-tab name="sales department" label="Sales department" />
                <q-tab name="marketing" label="Marketing" />
                <q-tab name="hr" label="HR" />
            </q-tabs>

            <q-tab-panels v-model="tab" animated class="text-black">
                <q-tab-panel name="development">
                    <div class="coWorkersGrid">
                        <div v-for="coworker in developmentDepartment"
                            :key="coworker.id">
                            <CoWorkerCard :coworker="coworker" :coWorkerId="coWorkerId"
                            />
                        </div>
                    </div>
                </q-tab-panel>

                <q-tab-panel name="support">
                    <div class="coWorkersGrid">
                        <div v-for="coworker in support"
                            :key="coworker.id">
                            <CoWorkerCard :coworker="coworker" :coWorkerId="coWorkerId"
                            />
                        </div>
                    </div>
                </q-tab-panel>

                <q-tab-panel name="sales department">
                    <div class="coWorkersGrid">
                        <div v-for="coworker in salesDepartment"
                            :key="coworker.id">
                            <CoWorkerCard :coworker="coworker" :coWorkerId="coWorkerId"
                            />
                        </div>
                    </div>
                </q-tab-panel>
                
                <q-tab-panel name="marketing">
                    <div class="coWorkersGrid">
                        <div v-for="coworker in marketingDepartment"
                            :key="coworker.id">
                            <CoWorkerCard :coworker="coworker" :coWorkerId="coWorkerId"
                            />
                        </div>
                    </div>
                </q-tab-panel>

                <q-tab-panel name="hr">
                    <div class="coWorkersGrid">
                        <div v-for="coworker in hr"
                            :key="coworker.id">
                            <CoWorkerCard :coworker="coworker" :coWorkerId="coWorkerId"
                            />
                        </div>
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </q-card>
    </div>
    
</template>

<script>
import { ref } from 'vue'
import CoWorkerCard from "../coworker/CoworkerCard.vue";


export default {
    name: "CoworkerOfTheMonth",
    props: ["poll", "coWorkerId"],
    components: {
        CoWorkerCard
    },
    setup () {
        return {
        tab: ref('development')
        }
    },
    data () {
        return {
            coWorkers:[],
            developmentDepartment:[],
            marketingDepartment: [],
            salesDepartment: [],
            support: [],
            hr: [],
        }
    },
    async mounted() {
        fetch("http://localhost:8080/coworkers")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.coWorkers = data;
            // remove the logged in users from the array (should not be allowed to vote on himself)
            this.coWorkers = this.coWorkers.filter(coWorker => coWorker.id != this.coWorkerId);
            this.developmentDepartment = this.coWorkers.filter(coWorker => coWorker.department == "DEVELOPMENT");
            this.marketingDepartment = this.coWorkers.filter(coWorker => coWorker.department == "MARKETING");
            this.salesDepartment = this.coWorkers.filter(coWorker => coWorker.department == "SALESDEPARTMENT");
            this.support = this.coWorkers.filter(coWorker => coWorker.department == "SUPPORT");
            this.hr = this.coWorkers.filter(coWorker => coWorker.department == "HR");
        })
    }
}
</script>

<style scoped>
.coWorkersGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
}

</style>