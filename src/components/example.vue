<template>
  <div class="footer">
    <div class="dropdown" :class="{ 'open': dropdownOpen }">
      <button class="dropdown-toggle" @click="toggleDropdown">
        Toggle Dropdown
      </button>
      <ul class="dropdown-menu">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }
  }
};
</script>

<style>
.footer {
  position: fixed;
  bottom: 100px;
  width: 100%;
  background-color: #f8f8f8;
  padding: 10px;
  text-align: center;
}

.dropdown-toggle {
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
}

.dropdown-menu {
  display: none;
  list-style: none;
  padding: 0;
}

.open .dropdown-menu {
  display: block;
}
</style>



<!--<template>-->

<!--  <div style="height: 80vh;background-color: green;padding-top: 20%">-->
<!--    <button @click="toggleDropdown">Toggle Dropdown</button>-->
<!--    <ul v-if="isDropdownOpen" class="dropdown-menu">-->
<!--      <li><a href="#">Option 1</a></li>-->
<!--      <li><a href="#">Option 2</a></li>-->
<!--      <li><a href="#">Option 3</a></li>-->
<!--    </ul>-->
<!--  </div>-->
<!--</template>-->


<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      isDropdownOpen: false,-->
<!--    };-->
<!--  }, methods: {-->
<!--    toggleDropdown() {-->
<!--      this.isDropdownOpen = !this.isDropdownOpen;-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped lang="scss">-->

<!--.dropdown-menu {-->
<!--  display: none;-->
<!--  height: 100px;-->
<!--}-->
<!--.dropdown-menu.show {-->
<!--  display: block;-->
<!--}-->
<!--</style>-->