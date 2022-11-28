<template>
    <div class="radiobtn">
        <input type="radio" :id="slug" :name="radioName" :value="slug" />
        <label :for="slug">{{value}}</label>
    </div>
</template>

<script>
export default {
    name: "RadioButtonWithLabel",
    props: ["value", "radioName", "slug"],
    
}
</script>

<style scoped>
.radiobtn {
  position: relative;
  display: block;
  width:90%;
}
.radiobtn label {
  display: block;
  background: var(--primary-white);
  color: var(--primary-black);
  border-radius: 5px;
  padding: 10px 20px;
  border: 2px solid var(--primary-black);;
  margin-bottom: 10px;
  cursor: pointer;
}


.radiobtn input[type=radio] {
  display: none;
  position: absolute;
  width: 100%;
}
.radiobtn input[type=radio]:checked + label {
  border-color: var(--primary-orange);
  margin-left: 30px;
  width:100%;
}
</style>