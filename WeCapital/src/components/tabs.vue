<template>
    <div>
      <div class="tabs">
        <ul>
          <li v-for="(tab, index) in tabs" :key="index" :class="{ 'is-active': activeTab === tab }">
            <a @click="setActiveTab(tab)">{{ tab }}</a>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <slot v-for="tab in tabs" :name="tab" :key="tab" v-show="activeTab === tab"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tabs',
    props: {
      value: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        activeTab: this.value
      }
    },
    computed: {
      tabs() {
        return this.$slots.default
          .filter(vnode => vnode.tag)
          .map(vnode => vnode.data.attrs.name)
      }
    },
    methods: {
      setActiveTab(tab) {
        this.activeTab = tab
        this.$emit('input', tab)
      }
    }
  }
  </script>
  
  <style>
  .tabs {
    display: flex;
    flex-direction: row;
  }
  
  .tabs li {
    list-style: none;
    cursor: pointer;
  }
  
  .tabs li.is-active a {
    color: red;
  }
  </style>
  