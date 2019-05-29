import VuetableFieldHandle from 'vuetable-2/src/components/VuetableFieldHandle.vue'

export default [
  {
    name: VuetableFieldHandle
  },
  {
    name: 'name',
    title: '<span class="orange glyphicon glyphicon-user"></span>时间',
    //sortField: 'name'
    //title: '机构编号',
    //key: 'number',
    //width: 85,
    //textAlign: 'left'
  },
  {
    name: 'name',
    title: '<span class="orange glyphicon glyphicon-user"></span>2018年9-10月',
    //sortField: 'name'
  },
  {
    name: 'name',
    title: '<span class="orange glyphicon glyphicon-user"></span>亚诺教育',
    //sortField: 'name'
  },
  {
    name: 'email',
    //sortField: 'email'
  },
  'birthdate',
  'nickname',
  {
    name: 'gender',
    formatter: (value) => {
      return value === 'M' ? 'Male' : 'Female'
    }
  }//,
  //'actions'
]
