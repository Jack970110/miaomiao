<template>
    <div class="city_body">
        <div class="city_list">
            
   
            <mt-index-list >
                <div class="city_hot">
                    <h2>热门城市</h2>
                    <ul class="clearfix">
                        <li>上海</li>
                        <li>北京</li>
                        <li>上海</li>
                        <li>北京</li>
                        <li>上海</li>
                        <li>北京</li>
                    </ul>
                </div> 
                <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
                    <div  @click="handleClick(city.cityId,city.name)" v-for="city in data.list" :key="city.cityId">
                    <mt-cell :title="city.name">
                    </mt-cell>
                    </div>
                </mt-index-section>

            </mt-index-list>
        </div>
	</div>
</template>
<script>
export default {
    name : 'city',
    data(){
        return {
        datalist:[]
        }
     },

    mounted (){
        this.axios({
            url :"https://m.maizuo.com/gateway?k=1331843",
            headers :{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16153825561462956055330817"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then((res)=>{
            this.datalist = this.handleCity(res.data.data.cities)
        })
    },
    methods:{
    handleCity(datalist){
        var letterArr = []
        for(var i=65;i<91;i++){
            letterArr.push(String.fromCharCode(i));
        }

        var newlist = []
        for(var j=0;j<letterArr.length;j++){
            var arr=  datalist.filter(item=>item.pinyin.substring(0,1)===letterArr[j].toLowerCase())
            if(arr.length>0){
            newlist.push({
                index:letterArr[j],
                list:arr
            })
            }
        }
        return newlist
    },
    handleClick(id,name){
      console.log(id)
      localStorage.setItem("cityId",id);
      localStorage.setItem("cityName",encodeURIComponent(name));
      this.$router.push(`/cinema`)
    }
  }
}
</script>
<style scoped>
#content .city_body{ margin-top: 45px; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: white;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;margin-bottom: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}

.city_body .city_hot ul li{ float: left; background: #ebedf0; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #ebedf0; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
</style>