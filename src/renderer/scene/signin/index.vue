<template>
  <div id="signin">
    <vue-particles
      class="particles"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab">
    </vue-particles>
    <div class="ad">
      <h1>Better Work Style for More</h1>
      <h1>Possibilities</h1>
      <div class="devider"></div>
      <p>Collaboration in one place</p>
    </div>
    <div class="card">
      <Card class="collapsed" v-if="panel === 'qr'" @click.native="handleSelectPanel('account')">
        <Icon type="md-person" class="icon" /> 账号登录
      </Card>
      <Card v-if="panel === 'account'">
        账号登录
      </Card>
      <div style="height: 20px;"></div>
      <Card class="collapsed" v-if="panel === 'account'" @click.native="handleSelectPanel('qr')">
        <Icon type="md-qr-scanner" class="icon" /> 扫码登录
      </Card>
      <Card v-if="panel === 'qr'" class="qr-container">
        <div v-if="qr === 'home'">
          <div class="title">扫码登录</div>
          <div class="qr-code">
            <div class="code-img">
              <img src="./images/demo-qr.png" />
            </div>
            <div class="code-mask">
              <Icon type="md-refresh" />
              <div class="refresh-str">刷新二维码</div>
            </div>
          </div>
          <div class="notice">请使用 mango 移动端扫描二维码</div>
          <div class="options">
            <Checkbox>15天内自动登录</Checkbox>
          </div>
        </div>
        <div v-if="qr === 'success'">
          <div class="avatar"></div>
          <div class="name">田昊天</div>
          <div class="success-str">扫码成功</div>
          <div class="notice">请在 mango 移动端确认登录</div>
          <div class="back-home notice"><Icon type="ios-arrow-back" /> 返回首页</div>
        </div>
      </Card>
    </div>
  </div>
</template>
<script src="./signin.js"></script>
<style src="./signin.scss" lang="scss" scoped></style>
