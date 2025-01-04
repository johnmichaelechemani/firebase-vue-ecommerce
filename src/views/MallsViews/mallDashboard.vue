<script setup>
import { ref } from "vue";
import { Bar, Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  ArcElement,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = ref({
  labels: ["January", "February", "March"],
  datasets: [{ data: [40, 20, 12] }],
});

const chartOptions = ref({
  responsive: true,
});
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)]">
      <div class="p-2">
        <div class="grid grid-cols-1 sm:grid-cols-4 mt-2 gap-2">
          <div class="border p-2 col-span-2 ">
            <p class="text-sm font-semibold">Sales Per Month</p>
            <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
          </div>
          <div class="flex justify-center">
            <div class="border p-2">
              <p class="text-sm font-semibold">Order Status</p>

              <div class="max-h-52">
                <Pie :options="chartOptions" :data="chartData" />
              </div>
            </div>
          </div>
          <div class="flex justify-start">
            <div class="border p-2">
              <p class="text-sm font-semibold"> Enventory</p>

              <div class="max-h-52">
                <Pie :options="chartOptions" :data="chartData" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-start">
            <div class="border p-2 mt-2">
              <p class="text-sm font-semibold"> Recent Orders</p>
              </div>
              </div>

      </div>
    </div>
  </div>
</template>
