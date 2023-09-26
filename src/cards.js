import { reactive } from "vue";
import axios from 'axios';

export const cards = reactive({
  base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=500&offset=0',
  listCards: null,

  fetchData() {
    axios
      .get(this.base_url)
      .then(response => {

        this.listCards = response.data.data

        console.log(this.listCards);

      })
      .catch(error => {
        console.log(error);
      });
  }

})