<template>
   <div class="movie_body">
        <ul>
            <li v-for="data in movielist" :key="data.filmId">
                <div class="pic_show"><img :src="data.poster"></div>
                <div class="info_list">
                    <h2>{{data.name}} <img v-if="data.filmType.name =='3D'" src="@/assets/maxs.png" alt=""></h2>
                    <p>观众评分<span class="grade">{{data.grade}}</span></p>
                    <p>主演:{{data.actors | actorfilter}}</p>
                    <p>{{data.nation}}</p>
                    <p>电影时长：{{data.runtime}}分钟</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
        </ul>
	</div> 
</template>
<script>
import Vue from "vue"
Vue.filter('actorfilter', function (data) {
  // console.log(data);
  var newlist = data.map(item => item.name)
  return newlist.join(' ')
})
export default {
    name : 'NowPlaying',
    data(){
        return {
        movielist:[]
        }
     },
    mounted (){
        this.axios({
            url :"https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=4698548",
            headers :{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16153825561462956055330817"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then((res)=>{
            this.movielist = res.data.data.films;
        })
    },
}
</script>
<style scoped>
    #content .movie_body{ flex:1; overflow:auto;}
    .movie_body ul{ margin:0 12px; overflow: hidden;}
    .movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
    .movie_body .pic_show{ width:64px; height: 90px;}
    .movie_body .pic_show img{ width:100%;}
    .movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
    .movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
    .movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
    .movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
    .movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
    .movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
    .movie_body .btn_pre{ background-color: #3c9fe6;}
</style>