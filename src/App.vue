<script setup>
import trial from "./components/trial.vue"
import sdk from "./components/sdk.vue";
</script>

<style>
    html,
    body {
      height: 100%;
      width: 100%;
      margin: 0;
      overflow: hidden;
    }

    #MirrAR-panel {
      height: 100%;
      width: 100%;
      top: 0;
      position: absolute;
      z-index: 0;
    }

  </style>

<template>
    <sdk>
        <trial/>
    </sdk>
</template>

