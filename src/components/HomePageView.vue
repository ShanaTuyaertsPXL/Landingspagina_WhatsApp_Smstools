<template>

  <div id="div"><h1 class="titel">Test titel</h1></div>

</template>

<script>
export default {
  name: "HomePageView"
}
</script>

<style lang="scss">
$bgColor: red;
$fontPrimary: 240px;

#div {
  background-color: $bgColor;

  .titel {
    font-size: $fontPrimary;
    color: green;
  }
}

</style>