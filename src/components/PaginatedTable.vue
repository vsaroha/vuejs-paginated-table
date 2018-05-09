<template>
  <div class="hello">
    <p>
      <el-button @click="prevPage">Previous</el-button>
      <el-button @click="nextPage">Next</el-button>
    </p>
    <el-table :data="paginatedTable" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180"></el-table-column>
      <el-table-column prop="name" label="Name" width="180"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 1'
      }, {
        date: '2016-05-02',
        name: 'Sawer',
        address: 'No. 18'
      }, {
        date: '2016-05-04',
        name: 'James',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 200'
      }, {
        date: '2017-05-02',
        name: 'Nancy',
        address: 'Next address'
      }, {
        date: '2016-08-04',
        name: 'Hawk',
        address: 'Hogwarts'
      }, {
        date: '2016-05-11',
        name: 'Peter',
        address: 'Pottery Barn'
      }],
      pageSize: 3,
      currentPage: 1
    }
  },
  methods: {
    nextPage () {
      if ((this.currentPage * this.pageSize) < this.tableData.length) {
        this.currentPage++
      }
    },
    prevPage () {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    }
  },
  computed: {
    paginatedTable () {
      let start = (this.currentPage - 1) * this.pageSize
      let end = this.currentPage * this.pageSize
      return this.tableData.filter((row, index) => (index >= start && index < end))
    }
  }
}
</script>

<style scoped>

</style>
