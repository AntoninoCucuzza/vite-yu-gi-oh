import { reactive } from "vue";
import axios from 'axios';

export const cards = reactive({
  base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&num=20&offset=0',
  cardImg: null,
  cardName: null,
  cardType: null,

  fetchData() {
    axios
      .get(this.base_url)
      .then(response => {
        this.cardName = response.data.data[0].name;
        this.cardImg = response.data.data[0].card_images[0].image_url
        this.cardType = response.data.data[0].type;

        console.log(this.cardType);
        console.log(this.cardImg)
        console.log(this.cardName);
      })
      .catch(error => {
        console.log(error);
      });
  }

})