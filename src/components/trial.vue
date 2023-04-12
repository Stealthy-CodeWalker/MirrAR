<script setup>
    var tryonPayload = {
    product_id: "SM21-SH-M02-RD-S-001", // Must required
    product_category: "NECK",
    neck_wearing: "../assets/images/1.png", // The image should be a transparent png
    x_neck: null, // Horizontal Offset (optional)
    y_neck: null, // Vertical Offset (optional)
    ppu_neck: null, // On increasing the ppu value the tryon image gets smaller (optional)
  };

  $(document).ready(function () {
    var options = {
      "key": "2rFXetD2QxDEGWBJtFyxOwHOYjfZuo36vtsAvuZA",
      //"ExID": "Parent_Container_ID", // Optional
      // "brandLogo": "Watermark_URL" // Optional
    };
    init(options);
    start();
  });
  document.addEventListener("init", function () {
    filterAddRemove("add", tryonPayload);
  });
</script>

<template>
  <!-- <div>
    {{ tryonPayload }}
  </div> -->
</template>


