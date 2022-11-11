<template>
<!--  <layout-header :title="'主页面'" showBtn />-->
  <section class="sectionStyle">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
            v-model="sex"
            is-link
            readonly
            name="picker"
            label="性别"
            placeholder="性别"
            @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" position="bottom">
          <van-picker
              :columns="columns"
              @confirm="onConfirm"
              @cancel="showPicker = false"
          />
        </van-popup>
        <van-field
            v-model="phoneNumber"
            label="手机号"
            placeholder="手机号"
            readonly
            clickable
            :maxlength="11"
            @focus="showKeyboard"
            @touchstart.stop="showKeyboard"
        />
        <van-number-keyboard
            :show="show"
            @blur="show = false"
            @input="onInput"
            @delete="onDelete"
        />
      </van-cell-group>
      <div class="bottomBtn">
        <van-sticky :offset-bottom="5" position="bottom">
          <van-button size="small" round block type="primary" native-type="submit">
            提 交
          </van-button>
        </van-sticky>
      </div>
    </van-form>
  </section>

<!--  <layout-footer :msgNum="10"/>-->
</template>

<script lang="ts">
import LayoutHeader from "@/Layout/LayoutHeader/index.vue";
import LayoutFooter from "@/Layout/LayoutFooter/index.vue";
import { defineComponent, ref } from "vue";
import { Toast } from 'vant';
export default defineComponent({
  name: "Home",
  components: {
    LayoutHeader,
    LayoutFooter,
  },
  setup() {
    let username = ref('');
    let password = ref('');
    let phoneNumber = ref('');
    let sex = ref('');
    let showPicker = ref(false);
    let show = ref(false);
    let columns = ['男', '女', '其他'];

    const onSubmit = (values: any) => {
      console.log('submit', values);
    };
    const onConfirm = (value: string) => {
      sex.value = value;
      showPicker.value = false;
    };
    const showKeyboard = () => {
      show.value = true
    };
    const onInput = (value: any) => {
      phoneNumber.value = phoneNumber.value + value
      Toast(phoneNumber.value)
    };
    const onDelete = () => {
      if (phoneNumber.value.length > 0) {
        phoneNumber.value = phoneNumber.value.substring(0, phoneNumber.value.length - 1)
      }
    };

    return {
      username,
      password,
      phoneNumber,
      sex,
      showPicker,
      show,
      columns,
      onSubmit,
      onConfirm,
      showKeyboard,
      onInput,
      onDelete
    };
  },
});
</script>

<style lang="scss" scoped>
.index-body-container {
  background: #e8e8ed;
  :deep() .van-grid-item__content:focus {
    background-color: #ccc;
  }
}
.sectionStyle {
  box-sizing: border-box;
  padding-top: 4vw;
}
.bottomBtn {
  margin: 1vw 4vw;
}
</style>
