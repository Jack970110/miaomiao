<template>
    <div class="cinema_body">
        <Loading v-if="isLoading"/>
        <Scroller v-else>
            <ul>
                <li v-for="item in cinemalist" :key="item.cinemaId">
                    <div>
                        <span>{{item.name}}</span>
                        <span class="q"><span class="price">{{item.lowPrice /100}}元起</span></span>
                    </div>
                    <div class="address">
                        <span>{{item.address}}</span>
                        <span>{{getDistance(item.Distance)}}</span>
                    </div>
                    <div class="card">
                        <div>小吃卡</div>
                        <div>折扣</div>
                    </div>
                </li>
            </ul>
        </Scroller>
	</div>
</template>
<script>
export default {
    name : 'CiList',data(){
        return {
        cinemalist:[],
        isLoading :true,
        prevId : -1
        }
     },
    activated (){
        var cityId = this.$store.state.city.cityId;
        if(this.prevId === cityId){
            return;
        }
        this.isLoading = true;
        this.axios({
            url :"https://m.maizuo.com/gateway?cityId="+cityId+"&ticketFlag=1&k=5599757",
            headers :{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16153825561462956055330817"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then((res)=>{
            //console.log(res.data);
            this.cinemalist = res.data.data.cinemas;
            this.isLoading = false;
            this.prevId = cityId;
        })
    },
    methods:{
         getDistance(data){
            var d = (data*100).toFixed(1); 
            return d + 'km';
         }
     }    
}
</script>
<style scoped>
    #content .cinema_body{ flex:1; overflow:auto;}
    .cinema_body ul{ padding:20px;}
    .cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
    .cinema_body div{ margin-bottom: 10px;}
    .cinema_body .q{ font-size: 11px; color:#f03d37;}
    .cinema_body .price{ font-size: 11px;float: right;}
    .cinema_body .address{ font-size: 13px; color:#666;}
    .cinema_body .address span:nth-of-type(2){ float:right; }
    .cinema_body .card{ display: flex;}
    .cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
    .cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
    .cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>
