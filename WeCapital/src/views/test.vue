<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>24 Hour Price Change</th>
            <th>Current Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="crypto in sortedCryptos[1]" :key="crypto.id">
            <td>{{ crypto.name }}</td>
            <td>{{ crypto.price_change_percentage_24h }}%</td>
            <td>{{ crypto.current_price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AllCryptoData',
    data() {
      return {
        allCryptos: []
      }
    },
    computed: {
      sortedCryptos() {
        return this.allCryptos.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
      }
    },
    mounted() {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then(response => {
          this.allCryptos = response.data;
      })
      .catch(error => {
          console.log(error);
      });
    }
  }
  </script>
  