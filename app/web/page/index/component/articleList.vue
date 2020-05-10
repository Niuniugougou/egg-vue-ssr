<template>
  <div>
    <div class="container">
      <div class="" v-for="item in lists" :key="item.id">
        <div class="">
          <div class="post-preview">
              <div :href="item.url">
                  <h2 class="post-title">            
                      <a :href="item.url" target="_blank" style="font-size: 26px;">{{item.title}}</a>
                  </h2>
                  <div class="post-content-preview">{{item.summary}}</div>
              </div>
              <div class="post-meta">Posted by hubcarl on 17-09-24</div>
          </div>
          <hr>
        </div>
      </div>
    </div>
    <div style="text-align:center" v-if="isLoading">
       <img src="@web/asset/images/loading.gif">
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    hook: {},
    components: {},
    data(){
      return {
        isFinish: false,
        isLoading : false,
        pageIndex: 1,
        pageSize: 10,
        list: []
      }
    },
    computed: {
      lists(){
        return this.list;
      }
    },
    methods: {
      fetch(){
        this.$request.get(`/list?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`).then(res=> {
          console.log('res', res);
          if(res.data.list && res.data.list.length){
            this.total = res.data.total;
            this.list = this.list.concat(res.data.list);
          }else{
            this.isFinish = true;
          }
          this.isLoading = false;
        });
      },
      loadPage(){
        if (!this.isFinish && !this.isLoading) {
          this.isLoading = true;
          this.pageIndex++;
          setTimeout(()=>{
            this.fetch();
          }, 1500);
        }
      }
    },
    mounted() {
      this.loadPage();
      window.addEventListener('scroll', ()=>{
        this.loadPage();
      }, false);
    }
  }
</script>
<style lang="less" scoped>
</style>