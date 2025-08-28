# 放功能，介绍，视频链接

1.  aa
2.  aa a

<Text />

<script setup>
import { onMounted } from "vue";
import Text from "@/components/index.vue";

onMounted(() => {
    const selector = document.querySelector("header .title a span");
    console.log(selector);
    // selector.innerHTML = "Radial Wheel Inventory";

})
</script>
