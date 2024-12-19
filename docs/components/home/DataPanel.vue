<template>
  <!-- Vercount用法 -->
  <div class="data-panel">
    <div class="data-panel-text">
      <span>总页面访问量</span>
      <span id="vercount_value_page_pv" class="data-panel-vercount-value">--</span>人次
    </div>
    <div class="data-panel-text">
      <span>本站总访问量</span>
      <span id="vercount_value_site_pv" class="data-panel-vercount-value">--</span>次
    </div>
    <div class="data-panel-text">
      <span>本站总访客数</span>
      <span id="vercount_value_site_uv" class="data-panel-vercount-value">--</span>人次
    </div>
  </div>
</template>

<style scoped>
.data-panel {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 120px;
}

.data-panel-text {
  color: #c4c4c6;
  width: calc(100% / 3);
  text-align: center;
}

.data-panel-vercount-value {
  font-weight: bold;
  color: #30a46c;
  margin: 0 10px;
}

</style>
