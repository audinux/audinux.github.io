// Everything is in the asynchronous function. It is called once search-data file is loaded.

$.getJSON("search-data.json", function (json) {
  //console.log(json); 
  var rows = json


  var configuration = {
    searchableFields: ['name', 'tag', 'summary', 'description'],
    sortings: {
      name_asc: {
        field: 'name',
        order: 'asc'
      },
      name_desc: {
        field: 'name',
        order: 'desc'
      }
    },
    aggregations: {
      category: {
        title: 'Categories',
        size: 10
      },
      type: {
        title: 'Types',
        size: 10
      },
      tag: {
        title: 'Tags',
        size: 10
      }
    }
  }

  itemsjs = itemsjs(rows, configuration);


  var vm = new Vue({
    el: '#el',
    data: function () {

      // making it more generic
      var filters = {};
      Object.keys(configuration.aggregations).map(function (v) {
        filters[v] = [];
      })

      return {
        query: '',
        // initializing filters with empty arrays
        filters: filters,
        selected_filters: [],
        sort_keys: Object.keys(configuration.sortings),
        sort: '',
        per_page: 50
      }
    },
    methods: {

      remove_filter: function (facet, name) {
        this.filters[facet] = this.filters[facet].filter(v => {
          return v !== name;
        });
      },

      reset: function () {
        var filters = {};
        Object.keys(configuration.aggregations).map(function (v) {
          filters[v] = [];
        })

        this.filters = filters;
        this.query = '';
      }
    },
    computed: {
      searchResult: function () {

        var result = itemsjs.search({
          query: this.query,
          filters: this.filters,
          per_page: this.per_page,
          sort: this.sort
        })

        // creating selected filters flat array
        this.selected_filters = [];
        for (const [key, value] of Object.entries(this.filters)) {

          for (const name in value) {
            this.selected_filters.push({
              name: value[name],
              facet: key
            })
          }
        }

        return result
      }
    }
  });
});
