<template>
  <v-sheet
    width="100vw"
    class="position-relative pt-10 px-4 mx-auto home-slider overflow-hidden d-flex flex-column justify-center align-center"
    color="transparent"
    elevation="0"
    style="position: absolute; top: -200px"
  >
    <v-sheet
      color="white"
      class="position-relative rounded-lg mb-4 px-4 pl-6 sheet-cal mx-auto rounded-0 home-slider overflow-hidden d-flex flex-column justify-start align-center"
    >
      <span class="my-6 f-20" style="font-family: Gabarito; line-height: 1.4"
        >Weeks Lived, Weeks Left: Seize the Moment</span
      >
      <div class="grid-container d-flex flex-column align-center justify-center mb-6">
        <div class="row d-flex align-center rtl" v-for="row in 80" :key="row">
          <span :class="['f-10 text-center mx-2']" style="font-family: Gabarito; line-height: 1.4; width: 6px">{{
            row
          }}</span>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <div
                class="square d-flex align-center jusitfy-center"
                v-for="week in 52"
                v-bind="data.some((obj) => obj.row === row && obj.col === week) && attrs"
                v-on="data.some((obj) => obj.row === row && obj.col === week) && on"
                :key="week"
                :class="[
                  { filled: (row - 1) * 52 + week <= weeksLived },
                  data.some((obj) => obj.row === row && obj.col === week) && 'hover'
                ]"
                @mouseover="displayTooltip(row, week)"
                @mouseleave="hideTooltip"
              >
                <v-icon
                  v-if="data.some((obj) => obj.row === row && obj.col === week)"
                  class="star"
                  size="10"
                  :color="(row - 1) * 52 + week <= weeksLived ? 'white' : '#232d3f'"
                  >mdi-star</v-icon
                >
              </div> </template
            ><span style="font-family: Gabarito; line-height: 1.4">{{ hoveredContent }}</span></v-tooltip
          >
        </div>
      </div>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      dialog: false,
      hoveredContent: '',
      data: [
        { row: 20, col: 6, content: 'Bill Gates founded Microsoft' },
        { row: 21, col: 12, content: 'Steven Jobs co-founded Apple' },
        { row: 21, col: 16, content: 'Michael Jordan was drafted by the Chicago Bulls' },
        { row: 21, col: 24, content: 'Beyoncé Knowles released her debut album with Destinys Child' },
        { row: 19, col: 36, content: 'Mark Zuckerberg created Facebook' },
        { row: 21, col: 8, content: 'Evan Spiegel and Bobby Murphy co-founded Snapchat' },
        { row: 45, col: 20, content: 'Elon Musk founded Tesla, Inc.' },
        {
          row: 27,
          col: 32,
          content:
            'Adele released her third studio album, 25, which broke the record for first-week sales of an album in the United States'
        },
        {
          row: 17,
          col: 16,
          content:
            'Billie Eilish released her second studio album, Happier Than Ever, which debuted at number one on the Billboard 200 chart'
        },
        { row: 17, col: 4, content: 'Lionel Messi made his professional debut for Barcelona' },
        { row: 17, col: 24, content: 'Serena Williams won her first Grand Slam singles title at the US Open' },
        { row: 17, col: 32, content: 'LeBron James was drafted first overall by the Cleveland Cavaliers' },
        { row: 18, col: 40, content: 'Taylor Swift released her self-titled debut album' },
        { row: 30, col: 48, content: 'Elon Musk founded SpaceX' },
        { row: 31, col: 0, content: 'J.K. Rowling published her first Harry Potter book' },
        { row: 22, col: 8, content: 'Lady Gaga released her debut album, The Fame' },
        { row: 17, col: 16, content: 'Neymar Jr. made his professional debut for Santos' },
        { row: 28, col: 24, content: 'Virat Kohli made his international debut for India' },
        { row: 23, col: 32, content: 'Lewis Hamilton won his first Formula One world championship' },
        { row: 11, col: 40, content: 'Emma Watson starred in the first Harry Potter film' },
        { row: 30, col: 34, content: 'Warren Buffett became a millionaire' }
      ]
    };
  },
  computed: {
    weeksLived() {
      return this.date ? -this.$dayjs(this.date).diff(this.$dayjs(), 'week') : 0;
    }
  },
  methods: {
    displayTooltip(row, col) {
      const matchingData = this.data.find((obj) => obj.row === row && obj.col === col);
      if (matchingData) {
        this.hoveredContent = matchingData.content;
      } else {
        this.hoveredContent = '';
      }
    },

    hideTooltip() {
      this.hoveredContent = '';
    }
  }
};
</script>

<style lang="scss">
.home-slider {
  .square {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    margin: 2px;
    border: 1px solid #232d3f;
  }

  .hover:hover {
    background-color: #546480;
    cursor: pointer;
  }

  .star:hover {
    color: white !important;
  }

  .filled {
    background-color: #232d3f;
  }
}
</style>
