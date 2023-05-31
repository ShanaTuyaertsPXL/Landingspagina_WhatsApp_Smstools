<template>
  <div class="accordion">
    <div v-for="(item, index) in visibleItems" :key="item.id" class="accordion-item">
      <button @click="toggleAccordion(item.id)" :class="{ active: item.open }">
        <span>{{ item.title }}</span>
        <i :class="item.open ? 'fas fa-minus' : 'fas fa-plus'"></i>
      </button>
      <transition name="accordion-transition" mode="out-in">
        <div v-if="item.open" :key="'content-' + item.id" class="accordion-content">
          <p>{{ item.content }}</p>
        </div>
      </transition>
    </div>
    <div v-if="!showAllItems && visibleItems.length < accordionItems.length" class="show-more">
      <button @click="showMore">Show More</button>
    </div>
    <div v-if="showAllItems && visibleItems.length > 2" class="show-more">
      <button @click="showLess">Show Less</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accordionItems: [
        {
          id: 1,
          title: 'Item 1',
          content: 'Content for item 1',
          open: false,
        },
        {
          id: 2,
          title: 'Item 2',
          content: 'Content for item 2',
          open: false,
        },
        {
          id: 3,
          title: 'Item 3',
          content: 'Content for item 3',
          open: false,
        },
        // Add more items here
      ],
      showAllItems: false,
      visibleItems: [],
    };
  },
  created() {
    this.updateVisibleItems();
  },
  methods: {
    toggleAccordion(itemId) {
      this.accordionItems.forEach((item) => {
        if (item.id === itemId) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
      });
    },
    showMore() {
      this.showAllItems = true;
      this.updateVisibleItems();
    },
    showLess() {
      this.showAllItems = false;
      this.updateVisibleItems();
    },
    updateVisibleItems() {
      this.visibleItems = this.showAllItems ? this.accordionItems : this.accordionItems.slice(0, 2);
    },
  },
};
</script>

<style>
.accordion {
  margin-bottom: 20px;
}

.accordion-item {
  margin-bottom: 10px;
}

button {
  background-color: #f2f2f2;
  border: none;
  color: #333;
  padding: 10px;
  margin-bottom: 5px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: background-color 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button:hover {
  background-color: #e6e6e6;
}

button.active {
  background-color: #ccc;
  color: #fff;
}

.accordion-content {
  background-color: #f9f9f9;
  padding: 10px;
  overflow: hidden;
  transition: max-height 0.3s;
}

.accordion-content p {
  margin: 0;
}

/*--------------------------------*/
.show-more {
  text-align: center;
  margin-top: 10px;
}

.show-more button {
  background-color: transparent;
  border: none;
  color: #333;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
}

.show-more button:hover {
  text-decoration: none;
}
</style>















<!--<template>-->
<!--  <div class="accordion">-->
<!--    <div v-for="(item, index) in visibleItems" :key="item.id" class="accordion-item">-->
<!--      <button @click="toggleAccordion(item.id)" :class="{ active: item.open }">-->
<!--        <span>{{ item.title }}</span>-->
<!--        <i :class="item.open ? 'fas fa-minus' : 'fas fa-plus'"></i>-->
<!--      </button>-->
<!--      <transition name="accordion-transition">-->
<!--        <div v-if="item.open" class="accordion-content">-->
<!--          <p>{{ item.content }}</p>-->
<!--        </div>-->
<!--      </transition>-->
<!--    </div>-->
<!--    <div v-if="!showAllItems && visibleItems.length < accordionItems.length" class="show-more">-->
<!--      <button @click="showAllItems = true">Show More</button>-->
<!--    </div>-->
<!--    <div v-if="showAllItems && visibleItems.length > 2" class="show-more">-->
<!--      <button @click="showAllItems = false">Show Less</button>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      accordionItems: [-->
<!--        {-->
<!--          id: 1,-->
<!--          title: 'Item 1',-->
<!--          content: 'Content for item 1',-->
<!--          open: false,-->
<!--        },-->
<!--        {-->
<!--          id: 2,-->
<!--          title: 'Item 2',-->
<!--          content: 'Content for item 2',-->
<!--          open: false,-->
<!--        },-->
<!--        {-->
<!--          id: 3,-->
<!--          title: 'Item 3',-->
<!--          content: 'Content for item 3',-->
<!--          open: false,-->
<!--        },-->
<!--        // Add more items here-->
<!--      ],-->
<!--      showAllItems: false,-->
<!--    };-->
<!--  },-->
<!--  computed: {-->
<!--    visibleItems() {-->
<!--      return this.showAllItems ? this.accordionItems : this.accordionItems.slice(0, 2);-->
<!--    },-->
<!--  },-->
<!--  methods: {-->
<!--    toggleAccordion(itemId) {-->
<!--      const item = this.accordionItems.find((item) => item.id === itemId);-->
<!--      item.open = !item.open;-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--.accordion {-->
<!--  margin-bottom: 20px;-->
<!--}-->

<!--.accordion-item {-->
<!--  margin-bottom: 10px;-->
<!--}-->

<!--button {-->
<!--  background-color: #f2f2f2;-->
<!--  border: none;-->
<!--  color: #333;-->
<!--  padding: 10px;-->
<!--  margin-bottom: 5px;-->
<!--  cursor: pointer;-->
<!--  width: 100%;-->
<!--  text-align: left;-->
<!--  transition: background-color 0.3s;-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  align-items: center;-->
<!--}-->

<!--button:hover {-->
<!--  background-color: #e6e6e6;-->
<!--}-->

<!--button.active {-->
<!--  background-color: #ccc;-->
<!--  color: #fff;-->
<!--}-->

<!--.accordion-content {-->
<!--  background-color: #f9f9f9;-->
<!--  padding: 10px;-->
<!--  overflow: hidden;-->
<!--  transition: max-height 0.3s;-->
<!--}-->

<!--.accordion-content p {-->
<!--  margin: 0;-->
<!--}-->

<!--/*-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;*/-->
<!--.show-more {-->
<!--  text-align: center;-->
<!--  margin-top: 10px;-->
<!--}-->

<!--.show-more button {-->
<!--  background-color: transparent;-->
<!--  border: none;-->
<!--  color: #333;-->
<!--  text-decoration: underline;-->
<!--  cursor: pointer;-->
<!--  font-size: 14px;-->
<!--}-->

<!--.show-more button:hover {-->
<!--  text-decoration: none;-->
<!--}-->
<!--</style>-->















<!--<template>-->
<!--  <div class="accordion">-->
<!--    <div v-for="(item, index) in visibleItems" :key="item.id" class="accordion-item">-->
<!--      <button @click="toggleAccordion(item.id)" :class="{ active: item.open }">-->
<!--        <span>{{ item.title }}</span>-->
<!--        <i :class="item.open ? 'fas fa-minus' : 'fas fa-plus'"></i>-->
<!--      </button>-->
<!--      <transition name="accordion-transition">-->
<!--        <div v-if="item.open" class="accordion-content">-->
<!--          <p>{{ item.content }}</p>-->
<!--        </div>-->
<!--      </transition>-->
<!--    </div>-->
<!--    <div v-if="!showAllItems && visibleItems.length < accordionItems.length" class="show-more">-->
<!--      <button @click="showAllItems = true">Show More</button>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      accordionItems: [-->
<!--        {-->
<!--          id: 1,-->
<!--          title: 'Item 1',-->
<!--          content: 'Content for item 1',-->
<!--          open: false,-->
<!--        },-->
<!--        {-->
<!--          id: 2,-->
<!--          title: 'Item 2',-->
<!--          content: 'Content for item 2',-->
<!--          open: false,-->
<!--        },-->
<!--        {-->
<!--          id: 3,-->
<!--          title: 'Item 3',-->
<!--          content: 'Content for item 3',-->
<!--          open: false,-->
<!--        },-->
<!--      ],-->
<!--      showAllItems: false,-->
<!--    };-->
<!--  },-->
<!--  computed: {-->
<!--    visibleItems() {-->
<!--      return this.showAllItems ? this.accordionItems : this.accordionItems.slice(0, 2);-->
<!--    },-->
<!--  },-->
<!--  methods: {-->
<!--    toggleAccordion(itemId) {-->
<!--      this.accordionItems.forEach((item) => {-->
<!--        if (item.id === itemId) {-->
<!--          item.open = !item.open;-->
<!--        } else {-->
<!--          item.open = false;-->
<!--        }-->
<!--      });-->

<!--      // Scroll to the content when opening-->
<!--      if (this.accordionItems.find((item) => item.id === itemId).open) {-->
<!--        const contentElement = this.$refs.contentRef[itemId - 1];-->
<!--        if (contentElement) {-->
<!--          contentElement.scrollIntoView({ behavior: 'smooth' });-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--.accordion {-->
<!--  margin-bottom: 20px;-->
<!--}-->

<!--.accordion-item {-->
<!--  margin-bottom: 10px;-->
<!--}-->

<!--button {-->
<!--  background-color: #f2f2f2;-->
<!--  border: none;-->
<!--  color: #333;-->
<!--  padding: 10px;-->
<!--  margin-bottom: 5px;-->
<!--  cursor: pointer;-->
<!--  width: 100%;-->
<!--  text-align: left;-->
<!--  transition: background-color 0.3s;-->
<!--}-->

<!--button:hover {-->
<!--  background-color: #e6e6e6;-->
<!--}-->

<!--button.active {-->
<!--  background-color: #ccc;-->
<!--  color: #fff;-->
<!--}-->

<!--.accordion-content {-->
<!--  background-color: #f9f9f9;-->
<!--  padding: 10px;-->
<!--  max-height: 0;-->
<!--  overflow: hidden;-->
<!--  transition: max-height 0.3s;-->
<!--}-->

<!--.accordion-content p {-->
<!--  margin: 0;-->
<!--}-->

<!--</style>-->










<!--<template>-->
<!--  <div class="accordion">-->
<!--    <div v-for="(item, index) in visibleItems" :key="item.id" class="terms-item">-->
<!--      <button @click="toggleAccordion(item.id)" :class="{ active: item.open }">-->
<!--        <span>{{ item.title }}</span>-->
<!--        <i :class="item.open ? 'fas fa-minus' : 'fas fa-plus'"></i>-->
<!--      </button>-->
<!--      <transition name="accordion-transition">-->
<!--        <div v-if="item.open" class="terms-content">-->
<!--          <p>{{ item.content }}</p>-->
<!--        </div>-->
<!--      </transition>-->
<!--    </div>-->
<!--    <div v-if="!showAllItems && visibleItems.length < accordionItems.length" class="show-more">-->
<!--      <button @click="showAllItems = true">Show More</button>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      accordionItems: [-->
<!--        {-->
<!--          id: 1,-->
<!--          title: 'Item 1',-->
<!--          content: 'Content for item 1',-->
<!--          open: false,-->
<!--        },-->
<!--        {-->
<!--          id: 2,-->
<!--          title: 'Item 2',-->
<!--          content: 'Content for item 2',-->
<!--          open: false,-->
<!--        },-->
<!--        {-->
<!--          id: 3,-->
<!--          title: 'Item 3',-->
<!--          content: 'Content for item 3',-->
<!--          open: false,-->
<!--        },-->
<!--        {-->
<!--          id: 4,-->
<!--          title: 'Item 4',-->
<!--          content: 'Content for item 4',-->
<!--          open: false,-->
<!--        },-->
<!--        {-->
<!--          id: 3,-->
<!--          title: 'Item 5',-->
<!--          content: 'Content for item 5',-->
<!--          open: false,-->
<!--        },-->
<!--      ],-->
<!--      showAllItems: false,-->
<!--    };-->
<!--  },-->
<!--  computed: {-->
<!--    visibleItems() {-->
<!--      return this.showAllItems ? this.accordionItems : this.accordionItems.slice(0, 2);-->
<!--    },-->
<!--  },-->
<!--  methods: {-->
<!--    toggleAccordion(itemId) {-->
<!--      const item = this.accordionItems.find((item) => item.id === itemId);-->
<!--      item.open = !item.open;-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--.accordion {-->
<!--  margin-bottom: 20px;-->
<!--}-->

<!--.terms-item {-->
<!--  margin-bottom: 10px;-->
<!--}-->

<!--button {-->
<!--  background-color: #f2f2f2;-->
<!--  border: none;-->
<!--  color: #333;-->
<!--  padding: 10px;-->
<!--  margin-bottom: 5px;-->
<!--  cursor: pointer;-->
<!--  width: 100%;-->
<!--  text-align: left;-->
<!--  transition: background-color 0.3s;-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  align-items: center;-->
<!--}-->

<!--button:hover {-->
<!--  background-color: #e6e6e6;-->
<!--}-->

<!--button.active {-->
<!--  background-color: #ccc;-->
<!--  color: #fff;-->
<!--}-->

<!--.terms-content {-->
<!--  background-color: #f9f9f9;-->
<!--  padding: 10px;-->
<!--  overflow: hidden;-->
<!--  transition: max-height 0.3s;-->
<!--}-->

<!--.accordion-content p {-->
<!--  margin: 0;-->
<!--}-->


<!--/*-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;*/-->
<!--.show-more {-->
<!--  text-align: center;-->
<!--  margin-top: 10px;-->
<!--}-->

<!--.show-more button {-->
<!--  background-color: transparent;-->
<!--  border: none;-->
<!--  color: #333;-->
<!--  text-decoration: underline;-->
<!--  cursor: pointer;-->
<!--  font-size: 14px;-->
<!--}-->

<!--.show-more button:hover {-->
<!--  text-decoration: none;-->
<!--}-->
<!--</style>-->




<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <div class="accordion">&ndash;&gt;-->
<!--&lt;!&ndash;    <div v-for="item in accordionItems" :key="item.id" class="terms-item">&ndash;&gt;-->
<!--&lt;!&ndash;      <button @click="toggleAccordion(item.id)" :class="{ active: item.open }">&ndash;&gt;-->
<!--&lt;!&ndash;        <span>{{ item.term }}</span>&ndash;&gt;-->
<!--&lt;!&ndash;        <i :class="item.toggle ? 'fas fa-minus' : 'fas fa-plus'"></i>&ndash;&gt;-->
<!--&lt;!&ndash;      </button>&ndash;&gt;-->
<!--&lt;!&ndash;      <div v-show="item.toggle" class="terms-content" ref="contentRef">&ndash;&gt;-->
<!--&lt;!&ndash;        <p>{{ item.termsContent }}</p>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;  data() {&ndash;&gt;-->
<!--&lt;!&ndash;    return {&ndash;&gt;-->
<!--&lt;!&ndash;      accordionItems: [&ndash;&gt;-->
<!--&lt;!&ndash;        {&ndash;&gt;-->
<!--&lt;!&ndash;          id: 1,&ndash;&gt;-->
<!--&lt;!&ndash;          term: 'Terms & Condition 1',&ndash;&gt;-->
<!--&lt;!&ndash;          termsContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur consequatur cupiditate, delectus doloribus ducimus eos et explicabo hic incidunt iste iure nobis odit, quod totam? Ab aliquam architecto cum, eveniet facere fugit harum impedit laborum nostrum, possimus praesentium, quisquam ratione repudiandae tempora temporibus! Ex iusto maiores unde. Architecto beatae, blanditiis consequatur cupiditate dolore doloremque dolorum error ex excepturi expedita hic illum impedit incidunt iure iusto, libero minima necessitatibus odit officiis porro praesentium quae quis repellendus repudiandae saepe sed temporibus totam! A aut corporis dolores, eligendi facere incidunt perspiciatis provident quae quod repudiandae, similique ullam voluptas. Aliquam ipsa, praesentium! Quia.',&ndash;&gt;-->
<!--&lt;!&ndash;          toggle: false,&ndash;&gt;-->
<!--&lt;!&ndash;        },&ndash;&gt;-->
<!--&lt;!&ndash;        {&ndash;&gt;-->
<!--&lt;!&ndash;          id: 2,&ndash;&gt;-->
<!--&lt;!&ndash;          term: 'Terms & Condition 2',&ndash;&gt;-->
<!--&lt;!&ndash;          termsContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur consequatur cupiditate, delectus doloribus ducimus eos et explicabo hic incidunt iste iure nobis odit, quod totam? Ab aliquam architecto cum, eveniet facere fugit harum impedit laborum nostrum, possimus praesentium, quisquam ratione repudiandae tempora temporibus! Ex iusto maiores unde. Architecto beatae, blanditiis consequatur cupiditate dolore doloremque dolorum error ex excepturi expedita hic illum impedit incidunt iure iusto, libero minima necessitatibus odit officiis porro praesentium quae quis repellendus repudiandae saepe sed temporibus totam! A aut corporis dolores, eligendi facere incidunt perspiciatis provident quae quod repudiandae, similique ullam voluptas. Aliquam ipsa, praesentium! Quia.',&ndash;&gt;-->
<!--&lt;!&ndash;          toggle: false,&ndash;&gt;-->
<!--&lt;!&ndash;        },&ndash;&gt;-->
<!--&lt;!&ndash;        {&ndash;&gt;-->
<!--&lt;!&ndash;          id: 3,&ndash;&gt;-->
<!--&lt;!&ndash;          term: 'Terms & Condition 3',&ndash;&gt;-->
<!--&lt;!&ndash;          termsContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur consequatur cupiditate, delectus doloribus ducimus eos et explicabo hic incidunt iste iure nobis odit, quod totam? Ab aliquam architecto cum, eveniet facere fugit harum impedit laborum nostrum, possimus praesentium, quisquam ratione repudiandae tempora temporibus! Ex iusto maiores unde. Architecto beatae, blanditiis consequatur cupiditate dolore doloremque dolorum error ex excepturi expedita hic illum impedit incidunt iure iusto, libero minima necessitatibus odit officiis porro praesentium quae quis repellendus repudiandae saepe sed temporibus totam! A aut corporis dolores, eligendi facere incidunt perspiciatis provident quae quod repudiandae, similique ullam voluptas. Aliquam ipsa, praesentium! Quia.',&ndash;&gt;-->
<!--&lt;!&ndash;          toggle: false,&ndash;&gt;-->
<!--&lt;!&ndash;        },&ndash;&gt;-->
<!--&lt;!&ndash;      ],&ndash;&gt;-->
<!--&lt;!&ndash;    };&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  methods: {&ndash;&gt;-->
<!--&lt;!&ndash;    toggleAccordion(itemId) {&ndash;&gt;-->
<!--&lt;!&ndash;      this.accordionItems.forEach((item) => {&ndash;&gt;-->
<!--&lt;!&ndash;        if (item.id === itemId) {&ndash;&gt;-->
<!--&lt;!&ndash;          item.toggle = !item.toggle;&ndash;&gt;-->
<!--&lt;!&ndash;        } else {&ndash;&gt;-->
<!--&lt;!&ndash;          item.toggle = false;&ndash;&gt;-->
<!--&lt;!&ndash;        }&ndash;&gt;-->
<!--&lt;!&ndash;      });&ndash;&gt;-->

<!--&lt;!&ndash;      // Scroll to the content when opening&ndash;&gt;-->
<!--&lt;!&ndash;      if (this.accordionItems.find((item) => item.id === itemId).open) {&ndash;&gt;-->
<!--&lt;!&ndash;        const contentElement = this.$refs.contentRef[itemId - 1];&ndash;&gt;-->
<!--&lt;!&ndash;        if (contentElement) {&ndash;&gt;-->
<!--&lt;!&ndash;          contentElement.scrollIntoView({behavior: 'smooth'});&ndash;&gt;-->
<!--&lt;!&ndash;        }&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;};&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--&lt;!&ndash;<style>&ndash;&gt;-->
<!--&lt;!&ndash;.accordion {&ndash;&gt;-->
<!--&lt;!&ndash;  margin-bottom: 20px;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.terms-item {&ndash;&gt;-->
<!--&lt;!&ndash;  margin-bottom: 10px;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;button {&ndash;&gt;-->
<!--&lt;!&ndash;  background-color: #f2f2f2;&ndash;&gt;-->
<!--&lt;!&ndash;  border: none;&ndash;&gt;-->
<!--&lt;!&ndash;  color: #333;&ndash;&gt;-->
<!--&lt;!&ndash;  padding: 10px;&ndash;&gt;-->
<!--&lt;!&ndash;  margin-bottom: 5px;&ndash;&gt;-->
<!--&lt;!&ndash;  cursor: pointer;&ndash;&gt;-->
<!--&lt;!&ndash;  width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;  text-align: left;&ndash;&gt;-->
<!--&lt;!&ndash;  transition: background-color 0.3s;&ndash;&gt;-->
<!--&lt;!&ndash;  display: flex;&ndash;&gt;-->
<!--&lt;!&ndash;  justify-content: space-between;&ndash;&gt;-->
<!--&lt;!&ndash;  align-items: center;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;button:hover {&ndash;&gt;-->
<!--&lt;!&ndash;  background-color: #e6e6e6;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;button.active {&ndash;&gt;-->
<!--&lt;!&ndash;  background-color: #ccc;&ndash;&gt;-->
<!--&lt;!&ndash;  color: #fff;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.terms-content {&ndash;&gt;-->
<!--&lt;!&ndash;  background-color: #f9f9f9;&ndash;&gt;-->
<!--&lt;!&ndash;  padding: 10px;&ndash;&gt;-->
<!--&lt;!&ndash;  overflow: hidden;&ndash;&gt;-->
<!--&lt;!&ndash;  transition: max-height 0.3s;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.accordion-content p {&ndash;&gt;-->
<!--&lt;!&ndash;  margin: 0;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;</style>&ndash;&gt;-->