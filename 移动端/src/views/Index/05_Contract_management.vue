<template>
    <div class="contract_management_box">
        <!-- --------------   签约管理   ------------------- -->
        <!-- 返回   -->
        <div class="header_back">
            <i class="iconfont icon-fanhui1"></i>
            <p>签约管理</p>
            <span>&nbsp</span>
        </div>

        <!-- 顶部tab -->
        <van-tabs v-model="active">
           <!-- 全部 -->
            <van-tab title="全部">
             <!-- 个人信息 -->
        <div class="sign_contract_item">

            <!-- 第一行姓名 年龄 -->
          <div class="name_box">
            <div class="name_box_left">
              <big class="name">王小明</big>
              <p class="age">58岁</p>
              <div class="jigou">机构门诊</div>
            </div>
            <div class="daishnehe">待审核</div>
          </div>

          <!-- 身份证号 -->
          <div class="identity_card xiao">
            <p class="name">身份证号</p>
            <p>345022********0423</p>
          </div>

            <!-- 签约团队 -->
           <div class="identity_card xiao">
            <p class="name">签约团队</p>
            <p>李明明团队</p>
          </div>

          <!-- 服务包 -->
           <div class="identity_card xiao">
            <p class="name">服务包</p>
            <p>老年人服务包</p>
          </div>
        
        </div>

            </van-tab>
 <!-- 待审核 -->
            <van-tab title="待审核">
             
               <!-- 个人信息 -->
        <div class="sign_contract_item">

            <!-- 第一行姓名 年龄 -->
          <div class="name_box">
            <div class="name_box_left">
              <big class="name">王小明</big>
              <p class="age">58岁</p>
              <div class="jigou">机构门诊</div>
            </div>
            <div class="daishnehe">待审核</div>
          </div>

          <!-- 身份证号 -->
          <div class="identity_card xiao">
            <p class="name">身份证号</p>
            <p>345022********0423</p>
          </div>

            <!-- 签约团队 -->
           <div class="identity_card xiao">
            <p class="name">签约团队</p>
            <p>李明明团队</p>
          </div>

          <!-- 服务包 -->
           <div class="identity_card xiao">
            <p class="name">服务包</p>
            <p>老年人服务包</p>
          </div>
        </div>

            </van-tab>

            <!-- 待支付 -->
            <van-tab title="待支付">
              

              <!-- 个人信息 -->
        <div class="sign_contract_item">

            <!-- 第一行姓名 年龄 -->
          <div class="name_box">
            <div class="name_box_left">
              <big class="name">王小明</big>
              <p class="age">58岁</p>
              <div class="jigou">机构门诊</div>
            </div>
            <div class="daishnehe">待支付</div>
          </div>

          <!-- 身份证号 -->
          <div class="identity_card xiao">
            <p class="name">身份证号</p>
            <p>345022********0423</p>
          </div>

            <!-- 签约团队 -->
           <div class="identity_card xiao">
            <p class="name">签约团队</p>
            <p>李明明团队</p>
          </div>

          <!-- 服务包 -->
           <div class="identity_card xiao">
            <p class="name">服务包</p>
            <p>老年人服务包</p>
          </div>
        </div>
              
              </van-tab> 
              <!-- 生效中 -->
            <van-tab title="生效中">
             

               <!-- 个人信息 -->
        <div class="sign_contract_item">

            <!-- 第一行姓名 年龄 -->
          <div class="name_box">
            <div class="name_box_left">
              <big class="name">王小明</big>
              <p class="age">58岁</p>
              <div class="jigou">机构门诊</div>
            </div>
            <div class="daishnehe">生效中</div>
          </div>

          <!-- 身份证号 -->
          <div class="identity_card xiao">
            <p class="name">身份证号</p>
            <p>345022********0423</p>
          </div>

            <!-- 签约团队 -->
           <div class="identity_card xiao">
            <p class="name">签约团队</p>
            <p>李明明团队</p>
          </div>

          <!-- 服务包 -->
           <div class="identity_card xiao">
            <p class="name">服务包</p>
            <p>老年人服务包</p>
          </div>
        </div>

            </van-tab>
        </van-tabs>

        
        <!-- 没有更多了 -->
        <div class="none">没有更多了~</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
    };
  }
};
</script>

<style lang="scss" scoped>
.contract_management_box {
  height: 100%;
  background-color: #f7fafd;

  // 返回
  .header_back {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    font-size: 20px;
    padding: 0 20px;
  }

  .sign_contract_item {
    box-sizing: border-box;
    margin: 20px;
    border: 0.1px solid #e9e9e9;
    background-color: #fff;
    padding: 30px 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    // 名字
    .name_box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .name_box_left {
        display: flex;
        align-items: center;
        .name {
          width: 80px;
          font-size: 20px;
        }
        .age {
          // margin-left: 15px;
          color: rgb(83, 83, 83);
        }
        img {
          width: 20px;
          margin-left: 15px;
        }
        .jigou {
          padding: 2px 4px;
          border-radius: 5px;
          background-color: #e2e4fd;
          color: #7a83f5;
          margin-left: 15px;
        }
      }

      .daishnehe {
        color: #fa746b;
        font-size: 14px;
        float: right;
      }
    }

    // 身份证号
    .identity_card {
      display: flex;
      margin-top: 20px;
      align-items: center;
      font-size: 15px;
      .name {
        width: 80px;
      }
    }

    .xiao {
      font-size: 14px;
      color: #999;
    }
  }

  //   没有更多了
  .none {
    text-align: center;
    line-height: 60px;
    color: #999;
    font-size: 15px;
  }
}
</style>

