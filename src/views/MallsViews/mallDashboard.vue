<script setup>
import { ref, onMounted } from "vue";
import { Bar, Pie } from "vue-chartjs";
import { Time, formatPrice } from "@/scripts/composables";
import {
  getMallOrderProducts,
  mallOrderProducts,
  getMallSales,
  sale,
} from "@/scripts/firebaseGetApi";
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
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      backgroundColor: [
        "#ffadad",
        "#ffdfad",
        "#fff8ad",
        "#f9ffad",
        "#e2ffad",
        "#c3ffad",
        "#adffcf",
        "#adffe4",
        "#adfff8",
        "#adfbff",
        "#add6ff",
        "#adb9ff",
      ],
      data: [400, 20, 102, 100, 55, 100, 400, 233, 788, 411, 600, 200],
    },
  ],
});

const orderStatusChartData = ref({
  labels: [
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
    "Refunded",
    "Returned",
    "Completed",
  ],
  datasets: [
    {
      backgroundColor: [
        "#ffadad",
        "#ffdfad",
        "#fff8ad",
        "#f9ffad",
        "#e2ffad",
        "#c3ffad",
        "#adffcf",
        "#adffe4",
      ],
      data: [40, 200, 12, 10, 555, 100, 400, 233],
    },
  ],
});

const productTypesChartData = ref({
  labels: [
    "Home Appliances",
    "Electronics",
    "Kids Apparels",
    "Men Apparels",
    "Women Apparels",
    "Furniture",
  ],
  datasets: [
    {
      backgroundColor: [
        "#ffadad",
        "#ffdfad",
        "#fff8ad",
        "#f9ffad",
        "#e2ffad",
        "#c3ffad",
      ],
      data: [40, 20, 102, 10, 55, 100, 200, 500],
    },
  ],
});
const chartOptions = ref({
  responsive: true,
});

onMounted(() => {
  getMallOrderProducts();
  getMallSales();
});
</script>

<template>
  <div
    class="sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"
  >
    <div class="overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)]">
      <div class="p-2">
        <div class="grid grid-cols-1 sm:grid-cols-4 mt-2 gap-2">
          <div class="border p-2 col-span-2">
            <p class="text-sm font-semibold">Sales Per Month</p>
            <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
          </div>
          <div class="flex justify-center">
            <div class="border p-2">
              <p class="text-sm font-semibold">Order Status</p>

              <div class="max-h-52">
                <Pie :options="chartOptions" :data="orderStatusChartData" />
              </div>
            </div>
          </div>
          <div class="flex justify-start">
            <div class="border p-2">
              <p class="text-sm font-semibold">Products</p>

              <div class="max-h-52">
                <Pie :options="chartOptions" :data="productTypesChartData" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-wrap gap-2 my-2">
            <div class="border p-2">
              <p class="text-sm font-semibold">Total Sales</p>
              <div v-if="sale.length !== 0" class="text-2xl font-semibold">
                ${{ formatPrice(sale[0].earns) }}
              </div>
            </div>
            <div class="border p-2">
              <p class="text-sm font-semibold">Current Month Sales</p>
              <div v-if="sale.length !== 0" class="text-2xl font-semibold">
                ${{ formatPrice(sale[0].earns) }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-start">
          <div class="border p-2 mt-2 w-full">
            <p class="text-sm font-semibold my-2">Recent Orders</p>

            <div class="flex flex-wrap gap-2 w-full">
              <div class="relative overflow-x-auto shadow-sm w-full">
                <table class="w-full text-sm text-left rtl:text-right">
                  <thead class="text-xs text-white uppercase bg-gray-800">
                    <tr>
                      <th scope="col" class="px-4 py-3">Product name</th>
                      <th scope="col" class="px-4 py-3">User Name</th>
                      <th scope="col" class="px-4 py-3">User Number</th>
                      <th scope="col" class="px-4 py-3">Total Price</th>
                      <th scope="col" class="px-4 py-3">Status</th>
                      <th scope="col" class="px-4 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody v-for="item in mallOrderProducts" :key="item.id">
                    <tr class="border-b">
                      <th
                        scope="row"
                        class="px-4 py-4 uppercase truncate max-w-52 font-medium"
                      >
                        {{ item.name }}
                      </th>
                      <td class="px-4 py-4 truncate max-w-52">
                        {{ item.address.name }}
                      </td>
                      <td class="px-4 py-4">
                        {{ item.address.phone }}
                      </td>
                      <td class="px-4 py-4">
                        ${{ formatPrice(item.totalPrice) }}
                      </td>
                      <td class="px-4 py-4 uppercase max-w-52">
                        {{ item.status }}
                      </td>
                      <td class="px-4 py-4 max-w-52">
                        {{ Time(item.purchaseDate) }}
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-if="mallOrderProducts.length === 0" class="">
                    <div class="p-2 text-sm font-semibold text-gray-500">
                      No Orders
                    </div>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
