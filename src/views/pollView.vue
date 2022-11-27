<template>
    <div id="main">
        <div id="content">
            <q-card style="width:100%" v-show="!isOrdinaryPoll">
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
                                <CoWorkerCard :coworker="coworker"
                                />
                            </div>
                        </div>
                    </q-tab-panel>

                    <q-tab-panel name="support">
                        <div class="text-h6">Alarms</div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </q-tab-panel>

                    <q-tab-panel name="sales department">
                        <div class="text-h6">Movies</div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </q-tab-panel>
                    
                    <q-tab-panel name="marketing">
                        <div class="coWorkersGrid">
                            <div v-for="coworker in marketingDepartment"
                                :key="coworker.id">
                                <CoWorkerCard :coworker="coworker"
                                />
                            </div>
                        </div>
                    </q-tab-panel>

                    <q-tab-panel name="hr">
                        <div class="text-h6">Movies</div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </q-tab-panel>
                </q-tab-panels>
            </q-card>
        </div> 
    </div>
</template>

<script>
import { ref } from 'vue'
import {coWorkers} from "../fake-data";
import CoWorkerCard from "../components/coworker/CoworkerCard.vue"
let developmentDepartment = [];
let marketingDepartment = []
let isOrdinaryPoll = false;
export default {
    name: "pollView",
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
            coWorkers,
            developmentDepartment,
            marketingDepartment,
            isOrdinaryPoll
        }
    }
}
developmentDepartment = coWorkers.filter(coWorker => coWorker.department == "development");
marketingDepartment = coWorkers.filter(coWorker => coWorker.department == "marketing");
</script>

<style scoped>
.coWorkersGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
}

</style>