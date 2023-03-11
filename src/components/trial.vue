<script setup>
  var tryonPayload = {
      product_id: YOUR_PRODUCT_SKU, // Must required
      product_category: "NECK",
      neck_wearing: NECKLACE_URL, // The image should be a transparent png
      x_neck: null, // Horizontal Offset (optional)
      y_neck: null, // Vertical Offset (optional)
      ppu_neck: null, // On increasing the ppu value the tryon image gets smaller (optional)
    };

    $(document).ready(function () {
      var options = {
          key: "2rFXetD2QxDEGWBJtFyxOwHOYjfZuo36vtsAvuZA",
          ExID: "VTO",
          brandLogo: BRAND_LOGO_URL
      };
      init(options);
      start();
    });
    document.addEventListener("init", function () {
      filterAddRemove("add", tryonPayload);
    });
</script>

<template>
  <div>
    {{ tryonPayload }}
  </div>
</template>


