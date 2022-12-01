<template>
    <div id="content">
        <div class="formContent">
            <h1>Create Poll</h1>
            <q-form @submit="onSubmit" class="form">
                <div class="left">
                    <q-input class="mb-10" outlined v-model="title" label="Title *" lazy-rules
                    :rules="[val => val && val.length > 0 || 'Please type something']" />

                    <q-input class="mb-10" outlined type="textarea" v-model="description" label="Insert description here *" lazy-rules :rules="[
                        val => val && val.length > 0 || 'Please type something'
                    ]" />

                    <q-select class="mb-20" label="Write the answers here (Use Enter)" outlined v-model="answers" 
                    use-input use-chips multiple hide-dropdown-icon input-debounce="0" @new-value="createValue"
                    v-show="type!='CoWorker of the month'" />
                </div>
                <div class="right">
                    <q-select class="mb-10" outlined v-model="type" :options="options" label="Select Type *"
                    lazy-rules :rules="[val => val && val.length > 0|| 'Please select a type']" />

                    <q-input class="mb-10" v-model="dateStart" outlined type="date" stack-label label="Start Date"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please select a start date']" />

                    <q-input class="mb-10" v-model="dateEnd" outlined type="date" stack-label label="End Date"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please select a end date']" />
                </div>
                
                <div>
                    <q-btn type="submit" style="background: var(--primary-red); color: var(--primary-white);" label="Create Poll" />
                </div>
            </q-form>
        </div>

    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: "CreatePollView",
    
    setup() {
       
        const title = ref(null)
        const description = ref(null)
        const dateStart = ref(null)
        const dateEnd = ref(null)
        const answers = ref(null)

        return {
            title,
            description,
            dateStart,
            dateEnd,
            answers,
            type: ref(null),
            options: [
                'Standard Poll', 'CoWorker of the month'
            ],

            onSubmit() {
                console.log("submit!")
            },
            createValue (val, done) {
                done(val, 'add-unique')
            }
        }
    }
}
</script>

<style scoped>

.formContent {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.left, .right {
    width: 50%;
}

.left {
    padding-right: 2rem;
}

.right {
    padding-left: 2rem;
}

.form {
    display: flex;
    flex-wrap: wrap;
}

</style>