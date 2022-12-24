var app= new Vue({
    el:"#app",
    data:{
       city:"",
       weatherlist:[],
    },
 
 
    methods:{
        getweather:function(){
            // 定义一个that指向外面的this
            var that=this
            // （网络请求库）axios是请求后台资源的摸块（可以使用get与post等请求）
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
            // then为获取数据成功，catch为获取数据失败
            // response和err是自定义但data是数据之一，具体看有什么数据去网页f12控制台上看
            .then((response)=>{
                // console.log(response)可以看出axios了网页有什么数据
                console.log(response.data.data.forecast)
                that.weatherlist=response.data.data.forecast
            })
            .catch((err)=>{
                console.log(err)
            })
        },
 
        changecity:function(city){
            this.city=city;   //city为v-model的参数
            this.getweather();
        }
    },
})