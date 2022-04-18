import Filter from "./components/Filter"

Nova.booting((Vue, router, store) => {
  Vue.component('nova-searchable-belongs-to-filter', Filter)
})
