<template>
    <div class="Sign_up_for_details_box">
        <!-- --------------    签约详情   ------------------- -->
        <!-- 返回   -->
        <div class="header_back">
            <i class="iconfont icon-fanhui1"></i>
            <p>签约管理</p>
            <span class="right">查看协议</span>
        </div>
        <!-- 等待审核 -->
        <div class="await">
            <i class="iconfont icon-naozhong"></i>
            等待医生审核中</div>


        <!-- 居民信息 -->
        <div class="residents_information">居民信息</div>

        <!-- 居民信息  个人信息 -->
        <div class="sign_contract_item">

            <!-- 第一行姓名 年龄 -->
          <div class="identity_card">
            <div class="left">姓名</div>
            <div class="right">王安然</div>
          </div>

          <!-- 身份证号 -->
          <div class="identity_card xiao">
            <p class="left">身份证号</p>
            <p class="right">345022********0423</p>
          </div>

            <!-- 性别 -->
           <div class="identity_card xiao">
             <div class="left">性别</div>
             <div class="right">女</div>
          </div>

          <!-- 年龄 -->
           <div class="identity_card xiao">
             <div class="left">年龄</div>
             <div class="right">26</div>
          </div>

          <!-- 联系电话 -->
           <div class="identity_card xiao">
             <div class="left">联系电话</div>
             <div class="right">1567890900</div>
          </div>

          <!-- 现居地 -->
           <div class="identity_card xiao">
             <div class="left">现居地</div>
             <div class="right">怀柔区罗溪县建设青莲小区6-601</div>
          </div>
        
        </div>

         <!-- 签约信息 -->
        <div class="residents_information">签约信息</div>

        <!-- 签约信息  个人信息 -->
        <div class="sign_contract_item">

            <!-- 签约状态 -->
          <div class="identity_card">
            <div class="left">签约状态</div>
            <div class="right lvse">待审核</div>
          </div>

          <!-- 签约机构 -->
          <div class="identity_card">
            <p class="left">签约机构</p>
            <p class="right">洛溪社区卫生服务站</p>
          </div>

            <!-- 签约团队 -->
          <div class="identity_card">
            <p class="left">签约团队</p>
            <p class="right">李明明团队</p>
          </div>

          <!-- 签约医生 -->
          <div class="identity_card">
            <p class="left">签约医生</p>
            <p class="right">李明明</p>
          </div>

          <!-- 服务包 -->
          <div class="identity_card">
            <p class="left">服务包</p>
            <p class="right">老年服务包</p>
          </div>

          <!-- 签约周期 -->
          <div class="identity_card">
            <p class="left">签约周期</p>
            <p class="right">1年</p>
          </div>

          <!-- 生效日期 -->
          <div class="identity_card">
            <p class="left">生效日期</p>
            <p class="right">20020/10/09</p>
          </div>

          <!-- 费用 -->
          <div class="identity_card">
            <p class="left">费用</p>
            <p class="right redSe">￥120</p>
          </div>

          <!-- 申请时间 -->
          <div class="identity_card">
            <p class="left">申请时间</p>
            <p class="right">20020/10/09 10:09:09</p>
          </div>

          <!-- 签约备注 -->
          <div class="identity_card">
            <p class="left">签约备注</p>
            <p class="right"></p>
          </div>
        
        </div>

        <!-- 一个空盒子，下面占位置 -->
        <div class="kong"></div>

        <!-- 按钮 -->
        <div class="btnBox">
            <div class="btnBox_item red">驳回</div>
            <div class="btnBox_item lv">审核通过</div>
        </div>




    </div>
</template>

<style lang="scss" scoped>
.Sign_up_for_details_box {
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
    .right {
      color: #5fdbb5;
      font-size: 16px;
    }
  }

  // 等待审核
  .await {
    background-color: #fddb78;
    font-size: 13px;
    display: flex;
    align-items: center;
    height: 40px;
    color: #fff;
    padding: 0 20px;
    i {
      font-size: 17px;
      margin-right: 10px;
    }
  }

  //   居民信息
  .residents_information {
    font-size: 17px;
    background-color: #f7fafd;
    padding: 20px;
  }

  // 个人信息
  .sign_contract_item {
    box-sizing: border-box;
    margin: 0 20px;
    // border: 0.1px solid #e9e9e9;
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
    // margin-bottom: 10px;

    //
    .identity_card {
      font-size: 14px;
      display: flex;
      margin: 15px 0;
      .left {
        width: 80px;
        // background-color: #5fdbb5;
        color: #999;
      }
      .right {
        color: #000;
      }
      .lvse {
        color: #5fdbb5;
      }
      .redSe {
        color: #fa7472;
      }
    }
  }

  // 一个空盒子，下面占位置
  .kong {
    width: 100%;
    height: 130px;
    background-color: #f7fafd;
  }

  // 按钮
  .btnBox {
    width: 100%;
    box-sizing: border-box;

    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    padding: 10px 20px;

    justify-content: space-between;
    align-items: center;
    .btnBox_item {
      width: 46%;
      line-height: 50px;
      border-radius: 10px;
      text-align: center;
      font-size: 18px;
    }
    .red {
      border: 1px solid #fa746b;
      color: #fa746b;
    }
    .lv {
      color: #Fff;
      background-color: #42d4ae;
    }
  }
}
</style>

