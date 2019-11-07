<template>
    <div class="love">
        <div class="bg bg-blur"></div>
        <div class="content content-front">
            <div class="title">这是一个私人地方哦</div>
            <div>我们已经在一起</div>
            <div class="time">{{time}}</div>
            <div class="say">
                这是一些我想说的话，一开始没怎么觉得，但是自己真的一点一点的吧这个时间算出来的时候，真的有些诧异。
                我们竟然在一起这么久了，我甚至还去手机上看了一下确认。想想前段时间才过的两周年，真的是很久了呢。
                我们之前在这段时间里确实有很多的争吵与不开心，但是最后我们都是会好的。我不知道在你的心底有没有落下
                什么不好的印象，对我或者对我们的这份感情。我知道可能真的是我脾气越来越不好了，容易和你起冲突，和你争吵。
                但是每次过后，我也很气自己干嘛又和你吵，知道你会多想。情绪化。我真的很怕每次和你吵完，你自己偷偷的哭。
                每次想到这里我心里特别难受，觉得自己好差劲。我知道你为我付出了很多，包括来南京，甚至放弃考研。你对我也
                越来越看重。越来越依赖。可能是我还没适应这种情况，不知道应该如何去处理我们现在的情况。你对我的好，我心
                里都是记得的。我可能有时候就是不想去表达这种感情。觉得我们很好，没必要再去表达什么了。所以我以后尽量注意，
                多表达出对你的关心，爱护。么么哒＾3＾。
            </div>
            <div>{{myName}}永远都会爱{{youName}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "love",
        data() {
            return {
                myName: '徐文斌',
                youName: '赵欣悦',
                startTime: '2017-09-17 00:00:00',
                time: ''
            }
        },
        created() {
            let that = this;
            setInterval(function () {
                that.time = that.getTogetherTime();
            }, 1000);
        },
        methods: {
            getTogetherTime() {
                let startTime = new Date(this.startTime).getTime();
                let nowTime = new Date().getTime();
                let differTime = nowTime - startTime;

                //获取天数
                let day = Math.floor(differTime / (24 * 3600 * 1000));

                //获取小时数
                let hours = Math.floor((differTime - (day * 24 * 3600 * 1000)) / (3600 * 1000));

                //获取分钟数
                let minutes = Math.floor(((differTime - (day * 24 * 3600 * 1000) - (hours * 3600 * 1000))) / (60 * 1000));

                //获取秒数

                let seconds = Math.floor((differTime - (day * 24 * 3600 * 1000) - (hours * 3600 * 1000) - (minutes * 60 * 1000)) / 1000);
                day = day > 9 ? day : '0' + day.toString();
                hours = hours > 9 ? hours : '0' + hours.toString();
                minutes = minutes > 9 ? minutes : '0' + minutes.toString();
                seconds = seconds > 9 ? seconds : '0' + seconds.toString();
                return day + '天' + hours + '小时' + minutes + '分钟' + seconds + '秒';
            }
        }
    }
</script>

<style lang="less">
    .love {
        height: 100%;
        background: url("../assets/img/bc.jpg") no-repeat;
        background-size: cover;
        color: #ffffff;
        position: relative;
        .bg {
            background: url('../assets/img/bc.jpg');
            height:100%;
        }

        .bg-blur {
            float: left;
            width: 100%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            -webkit-filter: blur(15px);
            -moz-filter: blur(15px);
            -o-filter: blur(15px);
            -ms-filter: blur(15px);
            filter: blur(15px);
        }
        .content-front {
            position:absolute;
            left: 0;
            top: 0;
            height:100%;
            width: 100%;
            text-align: center;
            .title{
                padding: 15px;
            }
            .time{
                margin-top: 10px;
                margin-bottom: 20px;
            }
            .say{
                font-size: 12px;
                text-align: left;
                padding: 0 15px;
                text-indent: 2em;
                line-height: 20px;
                margin-bottom: 20px;
            }
        }
    }
</style>
